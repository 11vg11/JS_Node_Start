const express = require('express');

// express app
const app = express();


//register

app.get('/', (req, res) => {
    res.status(200).sendFile('./views/index.html', { root: __dirname });
});

app.get('/about', (req, res) => {
    res.status(200).sendFile('./views/about.html', { root: __dirname });
});


//redirection 
app.get('/about-us', (req, res) => {
    res.status(301).redirect('/about');

})

// for 404 error 
app.use((req, res) => {
    res.status(404).sendFile('./views/404.html', { root: __dirname });
})



app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

