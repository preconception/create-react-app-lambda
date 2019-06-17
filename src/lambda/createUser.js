import TrueVaultClient from "truevault";

const createUserTvClient = new TrueVaultClient({
  apiKey: "8ae03bf3-6596-4bce-aa9b-2d0c4dfbc2c2"
});

export async function handler(event, context) {
  console.log(event, context);
  try {
    await createUserTvClient.createUser("sean", "zeep");
  } catch (err) {
    console.log(err); // output to netlify function log
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: err.message }) // Could be a custom message or object i.e. JSON.stringify(err)
    };
  }
}
