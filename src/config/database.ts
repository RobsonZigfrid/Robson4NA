import { Pool } from 'pg';

// Substitua pela sua string de conexão do Render.com
const connectionString = "postgresql://robsonna4_user:J2cDUGJ7gcB4kqZwKNsG6my60FJpynd1@dpg-crjl3u2j1k6c73fneg2g-a.oregon-postgres.render.com/robsonna4";

const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false, // Permite conexões SSL não autorizadas
  }
});

export default pool;