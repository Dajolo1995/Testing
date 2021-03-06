const express = require ('express');
const conectarDB = require ('./config/db')

const app = express();

conectarDB();

app.use(express.json({ extended:true }));

const PORT = process.env.PORT || 5000;

app.use('/api/personal', require('./routes/personal'))
app.use('/api/auth', require('./routes/auth'))
app.use('/api/patient', require('./routes/patient'))
app.use('/api/cita', require ('./routes/cita'))


app.listen(PORT, () => {
    console.log(`El servidor esta funcionando en el puerto ${PORT}`);
});

