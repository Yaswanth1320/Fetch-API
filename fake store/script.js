

fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
        .then(json=>{
           
            let data1 ="";
            json.map((values) =>{
                data1 +=`<div class="card">
                <h2 class="card-title">${values.title}</h2>
                <img src=${values.image} height="350px" width="350px" alt="image">
                <p class="des"><Strong>Description:</Strong><br>${values.description}</p>
                <p class="type"><Strong>Category:</Strong><br>${values.category}</p>
                <p class="price">${values.price} $</p>
            </div>`;
            });
            console.log(data1);
            document.getElementById("container").innerHTML= data1;
            
        })
    .catch(err =>{
        console.error(`Error: ${err}`);
    })



