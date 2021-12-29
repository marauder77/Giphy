

//GIPHY API
//http://api.giphy.com/v1/gifs/search

//TOKEN MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym


//made what I thought would be necessary, but I feel like some of these aren't necessary
const submitForm = document.getElementById("submitForm")
const searchItem = document.getElementById("Search")
const submit = document.getElementById("submit")  
const gifLocation = document.getElementById("gifLocation")






$("submitForm").on("submit", async function getGiphy(evt) {
evt.preventDefault();

let searchGif = $searchItem.val();
$searchItem.val("")

    const res = await axios.get("http://api.giphy.com/v1/gifs/search", {
        params: {
            api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym",
            q: searchGif
        }
    })
    addGif(res.data)
})


function addGif(res) {
    let results = res.data.length;
    if (results) {
    let random = Math.floor(Math.random() * results);
    let $createGif = $("<img>", {
        src: res.data(random).images.original.url, 
    })
        $gifLocation.append($createGif)
    }
}

