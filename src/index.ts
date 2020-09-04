import { APIGatewayProxyEvent, APIGatewayEventRequestContext, APIGatewayProxyCallback } from "aws-lambda";

export const handler = async (event: APIGatewayProxyEvent, context: APIGatewayEventRequestContext, callback: APIGatewayProxyCallback) => {
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from Typescript Lambda Template!'),
    };

    return response;
};
