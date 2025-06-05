const express = require('express')
const session = require('express-session')
const flash = require('connect-flash')
const path = require('path')
const db = require('./database')

const app = express()
const PORT = 3000

// Middleware
app.use(express.urlencoded({ extended: true }))
app.use(session({
  secret: 'secret123',
  resave: false,
  saveUninitialized: true,
}))
app.use(flash())

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

// ROUTES

// Form page
app.get('/', (req, res) => {
  res.render('form', { messages: req.flash('success') })
})

// Handle form submit
app.post('/submit', (req, res) => {
  const { name, email, message } = req.body
  if (!name || !email || !message) {
    req.flash('error', 'Semua field wajib diisi!')
    return res.redirect('/')
  }
  db.run('INSERT INTO guests (name, email, message) VALUES (?, ?, ?)', [name, email, message], (err) => {
    if (err) {
      req.flash('error', 'Gagal menyimpan data.')
      return res.redirect('/')
    }
    req.flash('success', 'Terima kasih sudah mengisi buku tamu!')
    res.redirect('/')
  })
})

// List tamu
app.get('/list', (req, res) => {
  db.all('SELECT * FROM guests ORDER BY id DESC', [], (err, rows) => {
    if (err) {
      return res.send('Gagal mengambil data.')
    }
    res.render('list', { guests: rows })
  })
})

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`)
})
