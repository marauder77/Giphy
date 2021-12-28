

//GIPHY API
//http://api.giphy.com/v1/gifs/search

//TOKEN MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym



const submitform = document.getElementById("submitForm")
const searchItem = document.getElementById("Search")
const submit = document.getElementById("submit")  
const gifLocation = document.getElementById("gifLocation")
const apiKey = "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"
const api = "http://api.giphy.com/v1/gifs/search"


async function getGiphy() {
    let res = await axios.get(api, {
        params: {
            api_key: apiKey,
            q: searchItem
        }
    })
    return res.data.data;
}

function createGif(){
    //container is where the gif will be. 
    let container = document.createElement("div")
    container.classList.add("container")
    createImage(container);
    //gifLocation is where the container will go into on the HTML.
    gifLocation.append(container)
   

}

function createImage() {
    let result = Math.floor((Math.random() * 20) + 1);
    // CANT FIGURE OUT HOW TO PULL THE URL FROM AXIOS/API TO CREATE THE IMAGE
    // AND APPEND THAT TO gifLocation 
    
}
//Tried using jQuery on this but I feel like something is off, but can't figure out what
$(submitform).submit(function(evt) {
    evt.preventDefault();
    let searchValue = $("input").val
    getGiphy(searchItem).then(function(result) { createGif(result)})
    evt.target.reset();
})