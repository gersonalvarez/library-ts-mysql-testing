import { createPool, PoolOptions } from "mysql2/promise";

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

  async getTables(): Promise<{ Table: string }[]> {
    const tables = await this.queryDB(`show tables`);
    return tables;
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
