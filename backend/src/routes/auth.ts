import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const router = express.Router();

router.post('/register', async (req, res) => {
  // Lógica para registrar usuário
});

router.post('/login', async (req, res) => {
  // Lógica para autenticar usuário e gerar JWT
});

export default router;
