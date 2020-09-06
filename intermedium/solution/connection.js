const MongoClient = require("mongodb").MongoClient;

class Connection {
  static async connectToMongo() {
    if (this.db) {
      return this.db;
    }
    try {
      const mongoClient = await MongoClient.connect(this.url, this.options);
      this.db = mongoClient.db("app");
      console.log("Connected success with mongoDB");
    } catch (err) {
      console.error("Error when connected to mongoDB");
    }
  }
}

Connection.db = null;

Connection.url = "mongodb://mongo";

Connection.options = {
  bufferMaxEntries: 0,
  reconnectTries: 5000,
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

module.exports = { Connection };
