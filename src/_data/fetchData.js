require("dotenv").config();
const airtable = require("airtable");

const base = new airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  "appYLSaJubArHC7Zq"
);

const fetchData = (tableName) =>
  new Promise((resolve, reject) => {
    const results = [];

    function handlePage(records, fetchNextPage) {
      records.forEach((record) =>
        results.push({ id: record._rawJson.id, ...record.fields })
      );
      fetchNextPage();
    }

    function done(err) {
      if (err) {
        console.error(err);
        reject(err);
      } else {
        console.log(`Retrieved ${results.length} records`);
        resolve(results);
      }
    }

    console.log(`Fetching ${tableName} from Airtable`);
    base(tableName).select().eachPage(handlePage, done);
  });

exports.fetchData = fetchData;
