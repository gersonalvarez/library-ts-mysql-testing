import DBLibrary from "../src/DBLibrary";
import dotenv from "dotenv";
dotenv.config();

const db = new DBLibrary();

test("Deberia existir una base de datos llamada biblioteca", async () => {
  const tables = await db.getTables();
  expect(tables).toBeDefined();
});
