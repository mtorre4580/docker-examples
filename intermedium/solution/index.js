const express = require("express");
const axios = require("axios");
const { Connection } = require("./connection");
const PORT = 8080;
const app = express();

/**
 * Save in cache the search for the user
 * @param {string} key 
 * @param {object[]} items
 * @returns {Promise}
 */
const saveCache = async (key, items) => {
  try {
    await Connection.db.collection("items").insertOne({ key, items });
  } catch (err) {
    console.error("Error to save the last query...", err);
  }
};

/**
 * Retrieve the search via key
 * @param {string} key 
 * @returns {Promise}
 */
const retrieveCache = async (key) => {
  try {
    const algo = await Connection.db.collection("items").findOne({ key });
    return algo;
  } catch (err) {
    console.error("Error to retrieve the last query from cache", err);
    return null;
  }
};

/**
 * Endpoint to retrieve items by search, if the q param not exists, it´s a bad request
 * Example curl -X GET https://api.mercadolibre.com/sites/{site}/search?q={query}
 */
app.get("/sites/:siteId/search", async (req, res) => {
  const { siteId } = req.params;
  const { q } = req.query;
  if (q) {
    const url = `https://api.mercadolibre.com/sites/${siteId}/search?q=${q}&limit=5`;
    const {
      data: { results },
    } = await axios.get(url);
    saveCache(url, results);
    return res.json(results);
  }
  return res.status(400).json({ msg: "there are no valid parameters" });
});

/**
 * Endpoint to retrieve the cache 
 */
app.get("/cache", async (req, res) => {
  const { url } = req.query;
  try {
    const urlWithLimit = `${url}&limit=5`;
    const items = await retrieveCache(urlWithLimit);
    res.json(items);
  } catch (err) {
    res.json([]);
  }
});

app.listen(PORT, async () => {
  await Connection.connectToMongo();
  await Connection.db.collection('items').remove({});
});

console.log(`App Started port::: ${PORT}`);

