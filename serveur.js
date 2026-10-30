// creer un formulaire qui recupere l'url d'un site et genere le qr du site et creer un fichier  readme.md qui explique les etapes
const express = require('express');
const qrcode = require('qrcode');
const app = express();

app.get('/', async (req, res) => {
    const url = req.query.url;
    let qrHtml = "";

    if (url) {
        const qrimage = await qrcode.toDataURL(url);
        qrHtml = `<img src="${qrimage}">`;
    }

    res.send(`
        <h1>Générateur QR</h1>
        <p>URL du site</p>
        <form action="/" method="get">
            <input type="text" name="url" placeholder="https://...">
            <br><br>
            <button type="submit">Générer</button>
        </form>
        <div>${qrHtml}</div>
    `);
});
app.listen(3000, () => {
    console.log("Serveur démarré sur le port 3000");
});