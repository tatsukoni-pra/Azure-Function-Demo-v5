import { AzureFunction, Context, HttpRequest } from "@azure/functions"

const sleep = (ms: number) => new Promise((res) => setTimeout(res, ms));

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    // 10秒待機
    await sleep(10000);

    context.res = {
        body: "Hello, World!"
    };
};

export default httpTrigger;
