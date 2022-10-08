import create from "zustand";
import { devtools, persist } from "zustand/middleware";

import { persistHelper } from "@src/common/helpers";
import { INoteColors } from "@src/common/theme";

export interface Label {
    id: string;
    name: string;
}

export interface Note {
    id?: string;
    title: string;
    content: string;
    color: INoteColors;
    favorite: boolean;
    labels: Label[];
    ts: number;
}

interface NotesState {
    notes: Note[];
    labels: Label[];
    addNote: (newNote: Note) => void;
    updateNote: (updatedNote: Note) => void;
    deleteNote: (noteId: string) => void;
    addLabel: (newLabel: Label) => void;
    updateLabel: (updatedLabel: Label) => void;
    deleteLabel: (LabelId: string) => void;
}

export const useStore = create<NotesState>()(
    devtools(
        persist(
            (set) => ({
                notes: [],
                labels: [],
                addNote: (newNote) => set((state) => ({ notes: [newNote, ...state.notes] })),
                updateNote: (note) =>
                    set(({ notes }) => ({ notes: notes.map((item) => (item.id === note.id ? note : item)) })),
                deleteNote: (noteId) => set((state) => ({ notes: state.notes.filter((item) => item.id !== noteId) })),
                addLabel: (newLabel) => set((state) => ({ labels: [newLabel, ...state.labels] })),
                updateLabel: (updatedLabel) =>
                    set(({ labels, notes }) => ({
                        labels: labels.map((item) => (item.id === updatedLabel.id ? updatedLabel : item)),
                        notes: notes.map((item) => ({
                            ...item,
                            labels: item.labels.map((label) => (label.id === updatedLabel.id ? updatedLabel : label)),
                        })),
                    })),
                deleteLabel: (LabelId) =>
                    set(({ labels, notes }) => ({
                        labels: labels.filter((item) => item.id !== LabelId),
                        notes: notes.map((item) => ({
                            ...item,
                            labels: item.labels.filter((label) => label.id !== LabelId),
                        })),
                    })),
            }),
            { name: "notes-storage", getStorage: () => persistHelper }
        )
    )
);
