/*
This script will add images to an element with an id of "gallery".
Frist, your images must be in the images/art folder
Then, put their names in the images variable below! Example:

    const images = ["image1.png", "image2.jpg"]

You can use the included script getImageNames.sh to help you do this.
Finally, make sure this script is loaded into your html file like so:

    <script src="js/showGallery.js" defer></script>

*/

const images = []

const gallery = document.getElementById("gallery");

images.forEach(function (file, index) {
    const img = document.createElement("img");
    img.classList.add("gallery-image")
    img.src = "images/art/" + file;
    img.alt = `Artwork #${index} - ${file}`;
    gallery.appendChild(img);
});
