import DBLibrary from "../src/DBLibrary";
import dotenv from "dotenv";
dotenv.config();

const db = new DBLibrary();

test("Deberia existir una base de datos llamada biblioteca", async () => {
  const tables = await db.getTables();
  expect(tables).toBeDefined();
});

describe("Tests Autor's Table", () => {
  test("Deberia existir una tabla llamada Autor", async () => {
    const tables = await db.getTables();
    expect(tables).toContain("autor");
  });

  test("Deberia existir al menos tres autores", async () => {
    const autors = await db.getAutors();
    expect(autors.length).toBeGreaterThanOrEqual(3);
  });

  test("Deberia existir un autor llamada Jorge Luis Borges", async () => {
    const autors = await db.getAutors();
    const jorge = autors.find((autor) => autor.nombre === "Jorge Luis Borges");
    expect(jorge).toBeDefined();
  });
});
