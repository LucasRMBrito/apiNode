const { Router } = require('express');

const ProductController = require('./Controllers/ProductController');

const routes = Router();

routes.get('/health', (req, res) => {
    return res.status(200).json({message:"Servidor online..."});
});

routes.post('/produto', ProductController.store);
routes.get('/produto', ProductController.index);
routes.get('/produto/:id', ProductController.show);
routes.put('/produto/:id', ProductController.update);
routes.delete('/produto/:id', ProductController.destroy);

module.exports = routes

//criando as rotas