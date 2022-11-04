const db = require('@src/db/postgres.db');

class User {
  async create(data) {
    try {
      const statement = `
            INSERT INTO users (id, name, pw, role)
            VALUES ($1, $2, $3)
            RETURNING *
        `;
      const result = await db.query(statement, [
        data.id,
        data.name,
        data.pw,
        data.role,
      ]);

      if (result.rows.length > 0) return result.rows[0];
      return null;
    } catch (err) {
      throw new Error(err);
    }
  }

  async update(data) {
    try {
      const statement = `
            UPDATE users 
            SET name=$2, pw=$3, role=$4
            WHERE id=$1    
        `;
      const result = await db.query(statement, [
        data.id,
        data.name,
        data.pw,
        data.role,
      ]);

      if (result.rows.length > 0) return result.rows[0];
      return null;
    } catch (err) {
      throw new Error(err);
    }
  }
}
