const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3000;
// const redis = require("redis");
// const createClient = redis.createClient;
const redis = require("ioredis");

const client = new redis(process.env.REDIS_URL);

async function check() {
  // await client.connect();

  await client.set("dsadad", "vaasalue");

  const value = await client.get("dsadad");

  console.log({ value });
}
check();

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
