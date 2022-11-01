import { Label, Note } from "./interfaces";
import { noteColors } from "./theme";

/** Dummy note item to be used for testing */
export const defaultNoteItem: Note = {
    color: noteColors[0],
    content:
        "amet consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae",
    createdAt: 0,
    favorite: false,
    labels: [
        { id: "1", name: "Grocery" },
        { id: "2", name: "work" },
    ],
    title: "Title of the card",
    updatedAt: Date.now(),
};

/** Dummy list of labels to be used for testing */
export const defaultLabels: Label[] = [
    { id: "1", name: "Grocery" },
    { id: "2", name: "work" },
    { id: "3", name: "Study" },
    { id: "4", name: "Home" },
    { id: "5", name: "Passion" },
];
