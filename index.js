const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;
// const redis = require("redis");
// const createClient = redis.createClient;
const redis = require("ioredis");

const client = new redis(process.env.REDIS_URL);

require("dotenv").config();

async function check() {
  // await client.connect();

  await client.set("dsadad", "vaasalue");

  const value = await client.get("dsadad");

  console.log(value);
}
check();
app.use(cors());
app.use(express.json());

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
