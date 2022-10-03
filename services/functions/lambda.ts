import { createLabel, CreateLabelInput, deleteLabel, Label, listLabels, updateLabel, UpdateLabelInput } from "./labels";
import {
    createNote,
    CreateNoteInput,
    deleteNote,
    getNoteById,
    listNotes,
    Note,
    updateNote,
    UpdateNoteInput,
} from "./notes";

type AppSyncEvent = {
    info: {
        fieldName: string;
    };
    arguments: {
        newNote: CreateNoteInput;
        editNote: UpdateNoteInput;
        noteId: string;

        newLabel: CreateLabelInput;
        editLabel: UpdateLabelInput;
        labelId: string;
    };
};

export const handler = async (
    event: AppSyncEvent
): Promise<Note[] | Label[] | Note | Label | string | null | undefined> => {
    switch (event.info.fieldName) {
        // Notes handlers
        case "listNotes":
            return await listNotes();
        case "createNote":
            return await createNote(event.arguments.newNote);
        case "updateNote":
            return await updateNote(event.arguments.editNote);
        case "deleteNote":
            return await deleteNote(event.arguments.noteId);
        case "getNoteById":
            return await getNoteById(event.arguments.noteId);
        // Labels handlers
        case "listLabels":
            return await listLabels();
        case "createLabel":
            return await createLabel(event.arguments.newLabel);
        case "updateLabel":
            return await updateLabel(event.arguments.editLabel);
        case "deleteLabel":
            return await deleteLabel(event.arguments.labelId);
        default:
            return null;
    }
};
