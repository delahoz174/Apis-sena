const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');

const app = express();
app.use(express.json());
app.use('/', authRoutes);

app.get('/', (req, res) => {
  res.send('¡Servicio funcionando correctamente!');
});


// Conectar a MongoDB
const startServer = async () => {
  try {
    await mongoose.connect('mongodb+srv://delahoz1741:cASslDlmsLxtkeqK@cluster0.l7fgpif.mongodb.net/');
    console.log('Base de datos conectada correctamente');

    app.listen(3000, () => {
      console.log('Corriendo en http://localhost:3000');
    });
  } catch (error) {
    console.error('Error al conectar con la base de datos:', error);
  }
};

startServer();

