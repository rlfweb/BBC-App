function getAnAlbum() {
    fetch("http://localhost:8001/albums/random")
     .then((albumDataResponse) => {
        albumDataResponse.json()
          .then((album) => {
                document.getElementById("title").innerHTML = album.title;
                document.getElementById("artist").innerHTML = album.artist;
                document.getElementById("price").innerHTML = album.price;
                document.getElementById("tracks").innerHTML = album.tracks;
            }) 
     });
}

document.getElementById("title").innerHTML = " ... ";
document.getElementById("artist").innerHTML = " ... ";
document.getElementById("price").innerHTML = " ... ";
document.getElementById("tracks").innerHTML = " ... ";