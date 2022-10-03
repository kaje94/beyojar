import { StackContext, AppSyncApi, use } from "@serverless-stack/resources";
import { DynamoDbStack } from "./dynamoDb";

export function AppSyncStack({ stack }: StackContext) {
    const { notesTable, labelsTable } = use(DynamoDbStack);

    stack.setDefaultFunctionProps({
        runtime: "nodejs16.x",
        srcPath: "services",
        bundle: { format: "esm" },
    });

    // Create the AppSync GraphQL API
    const api = new AppSyncApi(stack, "AppSyncApi_v1", {
        schema: "services/graphql/schema.graphql",
        defaults: {
            function: {
                environment: {
                    NOTES_TABLE: notesTable.tableName,
                    LABELS_TABLE: labelsTable.tableName,
                },
            },
        },
        dataSources: {
            notes: "functions/lambda.handler",
            labels: "functions/lambda.handler",
        },
        resolvers: {
            "Query    listNotes": "notes",
            "Query    getNoteById": "notes",
            "Mutation createNote": "notes",
            "Mutation updateNote": "notes",
            "Mutation deleteNote": "notes",

            "Query    listLabels": "labels",
            "Mutation createLabel": "labels",
            "Mutation updateLabel": "labels",
            "Mutation deleteLabel": "labels",
        },
    });

    // Enable the AppSync API to access the DynamoDB table
    api.attachPermissions([notesTable, labelsTable]);

    stack.addOutputs({
        ApiId: api.apiId,
        ApiKey: api.cdk.graphqlApi.apiKey!,
        APiUrl: api.url,
    });
}
