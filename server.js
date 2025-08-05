const express = require('express');
const path = require('path');
const app = express();

// EJS ayarı
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Statik dosyalar (varsa)
app.use(express.static(path.join(__dirname, 'public')));

// Ana sayfa route
app.get('/', (req, res) => {
  res.render('index');  // index.ejs renderlanacak
});

// Vercel portu ayarı
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port ${port}`));
