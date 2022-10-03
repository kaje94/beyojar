import { DynamoDB } from "aws-sdk";
import { nanoid } from "nanoid";

const dynamoDb = new DynamoDB.DocumentClient();
const notesTableName = process.env.NOTES_TABLE!;

export interface CreateNoteInput {
    title: string;
    content: string;
    color: {
        id: string;
        light: string;
        dark: string;
    };
    favorite: boolean;
    labels: string[];
}

export interface Note extends CreateNoteInput {
    id: string;
    userId: string;
}

export interface UpdateNoteInput extends CreateNoteInput {
    id: string;
}

export const createNote = async (note: CreateNoteInput): Promise<Note> => {
    const Item = { id: nanoid(), userId: "temp_user", ...note };
    await dynamoDb.put({ Item, TableName: notesTableName }).promise();
    return Item;
};

export const deleteNote = async (noteId: string): Promise<string> => {
    await dynamoDb.delete({ Key: { id: noteId, userId: "temp_user" }, TableName: notesTableName }).promise();
    return noteId;
};

export const listNotes = async (): Promise<Note[]> => {
    const notesData = await dynamoDb
        .query({
            TableName: notesTableName,
            KeyConditionExpression: "userId = :userId",
            ExpressionAttributeValues: { ":userId": "temp_user" },
        })
        .promise();

    return notesData.Items as Note[];
};

export const updateNote = async (note: UpdateNoteInput): Promise<Note> => {
    const Item = { userId: "temp_user", ...note };
    await dynamoDb.put({ Item, TableName: notesTableName }).promise();
    return Item;
};

export const getNoteById = async (noteId: string): Promise<Note | undefined> => {
    const params = { Key: { id: noteId, userId: "temp_user" }, TableName: process.env.NOTES_TABLE as string };
    const { Item } = await dynamoDb.get(params).promise();
    return Item as Note;
};

export const remoteLabelFromNotes = async (labelId: string) => {
    const allNotes = await listNotes();
    const filteredNotes = allNotes.filter((item) => item.labels.includes(labelId));

    const chunkSize = 25;
    const chunkedList = [...Array(Math.ceil(filteredNotes.length / chunkSize))].map((_) =>
        filteredNotes.splice(0, chunkSize)
    );

    for (const chunkItem of chunkedList) {
        await dynamoDb
            .transactWrite({
                TransactItems: chunkItem.map((noteItem) => ({
                    Update: {
                        TableName: notesTableName,
                        Key: { id: noteItem.id, userId: noteItem.userId },
                        UpdateExpression: "set labels = :updatedLabel",
                        ExpressionAttributeValues: {
                            ":updatedLabel": noteItem.labels.filter((item) => item !== labelId),
                        },
                    },
                })),
            })
            .promise();
    }
};
