const pool = require('../database/connection');


// Lista todos os livros do acervo
const listarTodosLivros = async () => {
  try {
    const resultado = await pool.query('SELECT * FROM livros ORER BY id');
    return resultado.rows;
  } catch (error) {
    console.log('Erro ao listar todos os livros', error.message);
    throw error;
  }
};

// Busca um livro específico pelo ID
const buscarLivroPorId = async (id) => {
  const livro = acervo.find((l) => l.id === Number(id));
  // Regra de negócio: se não existe, retorna null.
  // O Controller decide o que fazer com o null.
  return livro || null;
};

// Criar um novo livro no acervo
const criarLivro = async ({ titulo, autor }) => {
  // Regra de negócio: título e autor são obrigatórios
  if (!titulo || !autor) {
    throw new Error('Título e autor são obrigatórios.');
  }
  const novoLivro = {
    id: acervo.length + 1,
    titulo,
    autor,
    disponivel: true,
  };
  acervo.push(novoLivro);
  return novoLivro;
};

module.exports = { listarTodosLivros, buscarLivroPorId, criarLivro };
