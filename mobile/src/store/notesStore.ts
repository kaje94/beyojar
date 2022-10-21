/* eslint-disable typescript-sort-keys/interface */
/* eslint-disable sort-keys-fix/sort-keys-fix */
import create from "zustand";
import { devtools, persist } from "zustand/middleware";

import { persistHelper } from "@src/common/helpers";
import { Label, Note } from "@src/common/interfaces";

interface NotesState {
    /** List of notes persisted in the store */
    notes: Note[];
    /** List of labels persisted in the store */
    labels: Label[];
    /** Create a new note and add it to the persisted notes list */
    addNote: (newNote: Note) => void;
    /** Update an exiting note from the store */
    updateNote: (updatedNote: Note) => void;
    /** Delete a note that is persisted in the store */
    deleteNote: (noteId: string) => void;
    /** Create a new Label and add it to the persisted labels list */
    addLabel: (newLabel: Label) => void;
    /** Update the properties of an exiting label */
    updateLabel: (updatedLabel: Label) => void;
    /** Delete a label from the persisted labels as well as from any notes that are referring it */
    deleteLabel: (LabelId: string) => void;
    /** Deletes all notes and labels permanently */
    resetNotes: () => void;
}

/** Zustand hook to manage notes and labels state */
export const useNotesStore = create<NotesState>()(
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
                resetNotes: () => set(() => ({ labels: [], notes: [] })),
            }),
            { name: "notes-storage", getStorage: () => persistHelper }
        )
    )
);
