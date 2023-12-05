import { AzureFunction, Context, HttpRequest } from "@azure/functions"

const sleep = (ms: number) => new Promise((res) => setTimeout(res, ms));

process.on('SIGTERM', async () => {
    console.log('関数 SIGTERM')
    process.exit(0);
});

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    console.log('関数 Start');

    await sleep(30000);
    context.log('30s...');
    await sleep(60000);
    context.log('90s...');
    await sleep(60000);
    context.log('150s...');
    await sleep(60000);
    context.log('210s...');

    console.log('関数 Finished');

    context.res = {
        body: "Hello, World!"
    };
};

export default httpTrigger;
