import { createPool, PoolOptions } from "mysql2/promise";
import { Autor, Libro } from "./types";

class DBLibrary {
  private readonly config: PoolOptions;
  constructor() {
    this.config = {
      host: process.env.BDD_HOST,
      user: process.env.BDD_USER,
      password: process.env.BDD_PASS,
      database: "biblioteca",
    };
  }

  async getTables(): Promise<string[]> {
    const tables: { Tables_in_biblioteca: string }[] = await this.queryDB(
      `show tables`
    );
    const tableNames = tables.map((table) => table.Tables_in_biblioteca);
    return tableNames;
  }

  async getAuthors(): Promise<Autor[]> {
    const autors: Autor[] = await this.queryDB(`select * from autor`);
    return autors;
  }

  async getBooks(): Promise<Libro[]> {
    const libros: Libro[] = await this.queryDB(`select * from libro`);
    return libros;
  }

  async getBooksByAuthor(author: string): Promise<Libro[]> {
    const libros: Libro[] = await this.queryDB(
      `select * from libro where autorid = (select id from autor where nombre = "${author}")`
    );
    return libros;
  }

  private async queryDB(query: string) {
    const pool = createPool(this.config);
    try {
      const [rows] = await pool.query(query);
      const registers = await JSON.parse(JSON.stringify(rows));
      return registers;
    } catch (error) {
      console.log(error);
    } finally {
      await pool.end();
    }
  }
}

export default DBLibrary;
