
let factbtn = document.getElementById("fact-btn");
let ranbtn = document.getElementById("ran-btn");

let fact = document.querySelector(".fact");
let url = "http://numbersapi.com/";

let fetchFact = (num) =>{
    let finalUrl = url + num;
    fetch(finalUrl)
    .then(response => response.text())
    .then(data =>{
        fact.innerHTML = `
        <h2>${num}</h2>
        <p>${data}</p>`;
        document.querySelector(".container").append(fact);
    });
};

let getFact = () =>{
    let num = document.getElementById("inputValue").value;
    if(num){
        if(num >=0 && num<=300){
            fetchFact(num);
            fact.style.display = "block";
        }else{
            fact.style.display = "block";
            fact.innerHTML = `<p class="alert">Enter a number between 0 and 300</p>`;
            
        }
    }else{
        fact.style.display = "block";
        fact.innerHTML = `<p class="alert">Input field cannot be empty</p>`;
    }
};

factbtn.addEventListener("click",getFact);

