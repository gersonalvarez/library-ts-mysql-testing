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
    const autors = await db.getAuthors();
    expect(autors.length).toBeGreaterThanOrEqual(3);
  });

  test("Deberia existir un autor llamada Jorge Luis Borges", async () => {
    const autors = await db.getAuthors();
    const jorge = autors.find((autor) => autor.nombre === "Jorge Luis Borges");
    expect(jorge).toBeDefined();
  });
});

describe("Tests Libro's Table", () => {
  test("Deberia existir una tabla llamada Libro", async () => {
    const tables = await db.getTables();
    expect(tables).toContain("libro");
  });

  test("Deberia existir al menos tres libros", async () => {
    const libros = await db.getBooks();
    expect(libros.length).toBeGreaterThanOrEqual(3);
  });

  test('Deberia existir un libro llamado "El aleph"', async () => {
    const libros = await db.getBooks();
    const aleph = libros.find((libro) => libro.titulo === "El aleph");
    expect(aleph).toBeDefined();
  });

  test("Deberian existir al menos dos libros de Julio Cortazar", async () => {
    const libros = await db.getBooksByAuthor("Julio Cortázar");
    expect(libros.length).toBeGreaterThanOrEqual(2);
  });
});
