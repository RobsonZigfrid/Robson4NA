import { Request, Response } from 'express';
import { UserProductRepository } from '../repositories/productRepositorys';

const userProductRepository = new UserProductRepository();

export const getProduct = async (req: Request, res: Response) => {
  try {
    const product = await userProductRepository.getAllProduct();
    res.status(200).json(product);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao buscar Produto' });
  }
};

export const addProduct = async (req: Request, res: Response) => {
  const { name, price } = req.body;
  try {
    const user = await userProductRepository.addUser(name, price);
    res.status(201).json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao adicionar Produto' });
  }
};