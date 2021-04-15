const express = require ('express');
const conectarDB = require ('./config/db')

const app = express();

conectarDB();

app.use(express.json({ extended:true }));

const PORT = process.env.PORT || 4000;

app.use('/api/user', require('./routes/user'))
app.use('/api/auth', require('./routes/auth'))
app.use('/api/patient', require('./routes/patient'))
app.use('/api/quotes', require ('./routes/quotes'))


app.listen(PORT, () => {
    console.log(`El servidor esta funcionando en el puerto ${PORT}`);
});

