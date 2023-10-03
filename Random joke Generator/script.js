
const jokeContent = document.getElementById("joke");
const search = document.getElementById("btn");

const url= "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

let generateJoke = () =>{
    jokeContent.classList.remove("fade");
    fetch(url)
    .then(response => response.json())
    .then(data =>{
        jokeContent.textContent = `${data.joke}`;
        jokeContent.classList.add("fade");
    });
}   

search.addEventListener("click",generateJoke)
generateJoke();