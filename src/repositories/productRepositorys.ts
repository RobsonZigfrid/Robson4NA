import { Pool } from 'pg';
import pool from '../config/database';
import { Product } from '../models/modelController';

export class UserProductRepository {
  private pool: Pool;

  constructor() {
    this.pool = pool;
  }

  // Método para buscar todos os usuários
  async getAllProduct(): Promise<Product[]> {
    const { rows } = await this.pool.query('SELECT * FROM users');
    return rows;
  }

  // Método para adicionar um novo usuário
  async addUser(name: string, price: number): Promise<Product> {
    const queryText = 'INSERT INTO users(name, email) VALUES($1, $2) RETURNING *';
    const { rows } = await this.pool.query(queryText, [name, price]);
    return rows[0];