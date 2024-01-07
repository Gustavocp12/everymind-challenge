const connection = require('./index');

const getAll = async () => {
    const [rows] = await connection.query('SELECT * FROM produtos');
    return rows;
}

const getById = async (id) => {
    const [rows] = await connection.query('SELECT * FROM produtos WHERE id = ?', [id]);
    return rows;
}

const create = async (product) => {
    const [rows] = await connection.query('INSERT INTO produtos (nome, codigo, descricao, preco) VALUES (?, ?, ?, ?)', [product.name, product.code, product.description, product.price]);
    return rows;
}

const update = async (product, id) => {
    const [rows] = await connection.query('UPDATE produtos SET nome = ?, codigo = ?, descricao = ?, preco = ? WHERE id = ?', [product.name, product.code, product.description, product.price, id]);
    return rows;
}

const remove = async (id) => {
    const [rows] = await connection.query('DELETE FROM produtos WHERE id = ?', [id]);
    return rows;
}

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove
}