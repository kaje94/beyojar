import { DynamoDB } from "aws-sdk";
import { nanoid } from "nanoid";
import { remoteLabelFromNotes } from "./notes";

const dynamoDb = new DynamoDB.DocumentClient();
const labelsTableName = process.env.LABELS_TABLE!;

export interface CreateLabelInput {
    name: string;
}

export interface Label extends CreateLabelInput {
    id: string;
    userId: string;
}

export interface UpdateLabelInput extends CreateLabelInput {
    id: string;
}

export const createLabel = async (label: CreateLabelInput): Promise<Label> => {
    const Item = { id: nanoid(), userId: "temp_user", name: label.name };
    await dynamoDb.put({ Item, TableName: labelsTableName }).promise();
    return Item;
};

export const deleteLabel = async (labelId: string): Promise<string> => {
    await dynamoDb.delete({ Key: { id: labelId, userId: "temp_user" }, TableName: labelsTableName }).promise();
    await remoteLabelFromNotes(labelId);
    return labelId;
};

export const listLabels = async (): Promise<Label[]> => {
    const labelsData = await dynamoDb
        .query({
            TableName: labelsTableName,
            KeyConditionExpression: "userId = :userId",
            ExpressionAttributeValues: { ":userId": "temp_user" },
        })
        .promise();

    return labelsData.Items as Label[];
};

export const updateLabel = async (label: UpdateLabelInput): Promise<Label> => {
    const Item = { userId: "temp_user", ...label };
    await dynamoDb.put({ Item, TableName: labelsTableName }).promise();
    return Item;
};
