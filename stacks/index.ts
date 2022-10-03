import { DynamoDbStack } from "./dynamoDb";
import { AppSyncStack } from "./appSync";

import { App } from "@serverless-stack/resources";

export default function (app: App) {
    app.stack(DynamoDbStack);
    app.stack(AppSyncStack);
}
