const express = require("express");
const axios = require("axios");
const PORT = 8080;
const HOST = "0.0.0.0";
const app = express();

// Example curl -X GET https://api.mercadolibre.com/sites/{site}/search?q={query}

/**
 * Endpoint to retrieve items by search, if the q param not exists, it´s a bad request
 */
app.get("/sites/:siteId/search", async (req, res) => {
  const { siteId } = req.params;
  const { q } = req.query;
  if (q) {
    const {
      data: { results },
    } = await axios.get(
      `https://api.mercadolibre.com/sites/${siteId}/search?q=${q}`
    );
    return res.json(results);
  }
  return res.status(400).json({ msg: "there are no valid parameters" });
});

app.listen(PORT, HOST);

console.log(`App Started port::: ${PORT}`);
