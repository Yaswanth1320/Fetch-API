let submitBtn = document.getElementById("submit-btn");

let generateGif = () => {
    let loader = document.querySelector(".loader");
    loader.style.display = "block";
    document.querySelector(".wrapper").style.display = "none";

    let inputValue = document.getElementById("search-input").value;
    let gifCount = 10;

    let finalUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apikey}&q=${inputValue}&limit=${gifCount}&offset=0&rating=g&lang=en`;
    document.querySelector(".wrapper").innerHTML = "";

    fetch(finalUrl)
    .then(response => response.json())
    .then(info => {
        console.log(info.data);

        let gifdata = info.data;
        gifdata.forEach((gif) =>{

            let container = document.createElement('div');
            container.classList.add("container");
            let iframe = document.createElement("img");
            iframe.setAttribute("src", gif.images.downsized_medium.url);
            iframe.onload = () =>{
                gifCount--;
                if(gifCount == 0){
                    loader.style.display = "none";
                    document.querySelector(".wrapper").style.display = "grid";
                }
                container.append(iframe);
                document.querySelector(".wrapper").append(container);
                let copyBtn = document.createElement("button");
                copyBtn.innerText = "Copy Link";
                copyBtn.onclick = () =>{
                    let copyLink = `https://media4.giphy.com/media/${gif.id}/giphy.mp4`;
                    navigator.clipboard.writeText(copyLink).then(() =>{
                        alert("Gif copied to clipboard");
                    }).catch(() =>{
                        alert("Gif copied to clipboard");

                        let hiddenInput = document.createElement("input");
                        hiddenInput.setAttribute("type", "text");
                        document.body.appendChild(hiddenInput);
                        hiddenInput.value = copyLink;
                        hiddenInput.select();
                        document.execCommand("copy");
                        document.body.removeChild(hiddenInput);
                    });

                };
                container.append(copyBtn);
            };
        });
    })
};


submitBtn.addEventListener("click", generateGif);
window.addEventListener("load", generateGif);