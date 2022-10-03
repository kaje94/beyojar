import { StackContext, Table } from "@serverless-stack/resources";

/** All DynamoDB table definitions */
export function DynamoDbStack({ stack }: StackContext) {
    const suffix = "v1";

    /** DynamoDB table to store all the notes */
    const notesTable = new Table(stack, `notes-table-${stack.stage}-${suffix}`, {
        fields: {
            userId: "string",
            id: "string",
        },
        primaryIndex: { partitionKey: "userId", sortKey: "id" },
    });

    /** DynamoDB table to store all the notes */
    const labelsTable = new Table(stack, `labels-table-${stack.stage}-${suffix}`, {
        fields: {
            userId: "string",
            id: "string",
        },
        primaryIndex: { partitionKey: "userId", sortKey: "id" },
    });

    // /** DynamoDB table to store all the notes */
    // const blockHistoryTableOriginGsi = `block-history-table-origin-gsi-${randomSuffix}`;

    // const notesTable = new Table(stack, `notes-table-${stack.stage}-${suffix}`, {
    //     fields: {
    //       blockNumber: "string",
    //       ts: "number",
    //       baseFee: "number",
    //       origin: "string",
    //       ttl: "number",
    //     },
    //     primaryIndex: { partitionKey: "blockNumber" },
    //     globalIndexes: {
    //       [blockHistoryTableOriginGsi]: {
    //         partitionKey: "origin",
    //         sortKey: "ts",
    //         projection: ["blockNumber", "ts", "baseFee"],
    //       },
    //     },
    //   }
    // );

    return {
        notesTable,
        labelsTable,
    };
}
