const output = document.querySelector("#output");
const url = "https://randomfox.ca/floof/";

fetch(url)
.then(async (res) => {
    const data = await res.json();
    const image = data.image;
    output.setAttribute("src", image);
})