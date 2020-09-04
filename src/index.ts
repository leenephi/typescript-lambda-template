import { APIGatewayProxyEvent, APIGatewayEventRequestContext, APIGatewayProxyCallback } from "aws-lambda";

export const handler = async (event: APIGatewayProxyEvent, context: APIGatewayEventRequestContext, callback: APIGatewayProxyCallback) => {
    callback(null, {
        statusCode: 200,
        body: '',
        headers: {
            'Access-Control-Allow-Origin': '*',
        }
    });
};
