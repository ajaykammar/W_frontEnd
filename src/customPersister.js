// src/persister.js
import db from "./db";

// Cache expiration time (e.g., 3 days)
const THREE_DAYS = 3 * 24 * 60 * 60 * 1000;

export const dexiePersister = {
  persistClient: async (client) => {
    await db.queries.put({
      queryKey: "react-query-client",
      data: client,
      timestamp: Date.now(),
    });
  },
  restoreClient: async () => {
    const cachedClient = await db.queries.get("react-query-client");
    if (cachedClient && Date.now() - cachedClient.timestamp < THREE_DAYS) {
      return cachedClient.data;
    }
    return undefined;
  },
  removeClient: async () => {
    await db.queries.delete("react-query-client");
  },
};
