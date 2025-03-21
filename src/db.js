// src/db.js
import Dexie from "dexie";

// Create a database named "ReactQueryCache"
const db = new Dexie("ReactQueryCache");

// Define a table named "queries" with keys: queryKey, data, and timestamp
db.version(1).stores({
  queries: "queryKey, data, timestamp",
});

export default db;
