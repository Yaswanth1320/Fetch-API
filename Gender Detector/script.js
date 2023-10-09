
let url = "https://api.genderize.io?name=";

let wrapper = document.getElementById("result");
let submit = document.getElementById("search");

let predict = () =>{
    let name = document.getElementById("name").value;
    let error = document.getElementById("error");
    let finalUrl = url + name ;
    wrapper.innerHTML = "";

    if(name.length > 0 && /^[A-Za-z]+$/.test(name)){
        fetch(finalUrl)
        .then(response => response.json())
        .then(data => {
            let div = document.createElement("div");
            div.setAttribute("id", "info");
            div.innerHTML = `
            <h2 id="result-name">${data.name}</h2>
            <img src="" id="gender-icon"/>
            <h1 id="gender">${data.gender}</h1>
            <h4 id="prob">Probability: ${data.probability}</h4>`;

            wrapper.append(div);
            if(data.gender == "female"){
                div.classList.add("female");
                document.getElementById("gender-icon").setAttribute("src","female.jpeg");
            }
            else{
                div.classList.add("male");
                document.getElementById("gender-icon").setAttribute("src","male.avif");
            }
        })
    }
    else{
        error.innerHTML = `<h3>Input cannot be empty</h3>`;
    }
};

submit.addEventListener("click",predict);
window.addEventListener("load", predict);