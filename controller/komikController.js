const db = require('../models');

async function getAllKomik(req, res) {
    try {
        const komiks = await db.Komik.findAll();
        res.status(200).json(komiks);
    }
}