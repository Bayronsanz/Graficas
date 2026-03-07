const express = require('express');
const sequelize = require('./db/conexion');
const Producto = require('./models/Productos');

const app = express();

app.use(express.json());

app.get('/api/sum-by-product-type', async (req, resp) => {
    try {

        const data = await Producto.findAll({
            attributes: [
                'productType',
                [sequelize.fn('SUM', sequelize.col('value')), 'total_valor']
            ],
            group: ['productType']
        });

        resp.status(200).json(data);

    } catch (error) {
        resp.status(500).json({ message: 'Error al obtener total por tipo ' + error });
    }
});

app.get('/api/max-min-by-product-type', async (req, resp) => {
    try {

        const data = await Producto.findAll({
            attributes: [
                'productType',
                [sequelize.fn('MAX', sequelize.col('value')), 'valor_maximo'],
                [sequelize.fn('MIN', sequelize.col('value')), 'valor_minimo']
            ],
            group: ['productType']
        });

        resp.status(200).json(data);

    } catch (error) {
        resp.status(500).json({ message: 'Error al obtener max y min ' + error });
    }
});

app.get('/api/count-by-status', async (req, resp) => {
    try {

        const data = await Producto.findAll({
            attributes: [
                'status',
                [sequelize.fn('COUNT', sequelize.col('*')), 'total_productos']
            ],
            group: ['status']
        });

        resp.status(200).json(data);

    } catch (error) {
        resp.status(500).json({ message: 'Error al contar por status ' + error });
    }
});



app.listen(5000, () => {
    console.log('Servidor corriendo en el puerto 5000');
});
