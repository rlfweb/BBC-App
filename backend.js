// init api append
let express = require('express');
let fs = require('fs/promises');
let cors = require('cors');

let app = express();

app.use(express.json());
app.use(cors());

// endpoints
app.get('/albums/random', function (req, res) {
    fs.readFile(`${__dirname}/albums.json`, 'utf8')
        .then(function (data) {
            let albums = JSON.parse(data);

            // get random index for albums (get random album from array)
            let albumsQuantity = albums.length;
            let randomAlbumIndex = Math.floor(Math.random() * (albumsQuantity - 1));

            let randomAlbumJson = JSON.stringify(albums[randomAlbumIndex]);

            res.send(randomAlbumJson);
        })
});

// start server
let server = app.listen(8001);
