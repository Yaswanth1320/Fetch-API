
const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";

const result = document.getElementById("result");
const sound = document.getElementById("sound");
const button = document.getElementById("search-btn");

button.addEventListener("click", () =>{
    let inputWord = document.getElementById("word").value;
    
    fetch(`${url}${inputWord}`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data[0]);
        result.innerHTML = `
            <div class="word">
                <h3>${inputWord}</h3>
                <button><i class="fas fa-volume-up"></i></button>
            </div>

            <div class="details">
                <p>${data[0].meanings[0].partOfSpeech}</p>
                <p>${data[0].phonetics}</p>
            </div>

            <p class="meaning">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Impedit, officiis.
            </p>

            <p class="example">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                 Temporibus, voluptates?</p>`;
    } );
});