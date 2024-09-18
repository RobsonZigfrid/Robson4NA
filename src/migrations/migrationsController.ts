import pool from "../config/database";

const createProductTable = async () => {
  const client = await pool.connect();
  try {
    const queryText = `
      CREATE TABLE IF NOT EXISTS Product (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        Price DOUBLE PRECISION NOT NULL
      );
    `;
    await client.query(queryText);
    console.log('Tabela "Produtos" criada com sucesso!');
  } catch (err) {
    console.error("Erro ao criar tabela:", err);
  } finally {
    client.release();
  }
};

createProductTable().then(() => process.exit(0));
