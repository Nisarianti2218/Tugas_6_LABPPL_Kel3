const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database(':memory:') // pakai memory untuk contoh, bisa ganti file

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS guests (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    message TEXT NOT NULL
  )`)
})

module.exports = db
