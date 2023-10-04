
const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";

const result = document.getElementById("result");
const sound = document.getElementById("sound");
const button = document.getElementById("search-btn");

button.addEventListener("click", () =>{
    let inputWord = document.getElementById("word").value;
    
    fetch(`${url}${inputWord}`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        result.innerHTML = `
            <div class="word">
                <h3>${inputWord}</h3>
                <button onclick="playSound()" ><i class="fas fa-volume-up"></i></button>
            </div>

            <div class="details">
                <p>${data[0].meanings[0].partOfSpeech}</p>
                <p>${data[0].phonetics[1].text}/</p>
            </div>

            <p class="meaning">
                ${data[0].meanings[0].definitions[0].definition}
            </p>

            <p class="synonyms">
                ${data[0].meanings[0].synonyms[0]}
            </p>`;

            sound.setAttribute("src", `${data[0].phonetics[0].audio}`);
            console.log(sound);
    }).catch( () =>{
            result.innerHTML =`<h3 class="error" >Couldn't found the word</h3>`
    })
});

function playSound(){
    sound.play();
}