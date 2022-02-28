let data = [];
let auxiliarArray = [];
let pokemonTypes = ["none","normal", "fire", "water", "grass", "electric", "ice", "fighting", "poison", "ground", "flying", "psychic", "bug", "rock", "ghost", "dark", "dragon", "steel", "fairy"];
function getData()
{
    fetch("pokeapi.json")
    .then(Response => Response.json())
    .then(dataFile => {
        data.push(dataFile);
        showPokemonTypes(pokemonTypes);
        showAllPokemons(dataFile);
    });
}
function showPokemonTypes(array)
{
    let categoriesSelect = document.getElementById("categoriesSelect");
    for(let i = 0; i < array.length; i++)
    {
        let option = document.createElement("option");
        let type = array[i];
        option.value = type;
        option.text = type;
        categoriesSelect.appendChild(option);
    }
}
function showAllPokemons(array)
{
    let resultDiv = document.getElementById("resultDiv");
    resultDiv.innerHTML = ``;
    let allDataDiv = document.getElementById("allDataDiv");
    for(let j = array.length-1; j >= 0; j--)
    {
        if(j == array.length-1 && j == 0 || j == 0)
        {
            auxiliarArray.push(array[j]);
            let individualDataDiv = document.createElement("div");
            individualDataDiv.setAttribute("id", `${j}`);
            individualDataDiv.setAttribute("class", "individualDataDiv");
            individualDataDiv.setAttribute("onclick", "showModalPokemon(auxiliarArray)");
            let pokemonPosition = document.createElement("div");
            pokemonPosition.innerHTML = `<h5> Pos: ${j}</h5>`;
            let pokemonImage = document.createElement("div");
            pokemonImage.innerHTML = `<img src="${array[j].ThumbnailImage}" onerror="this.onerror=null;this.src='errorLoad.png';">`
            let pokemonName = document.createElement("div");
            pokemonName.innerHTML = `<h5>${array[j].name}</h5>`;
            let pokemonType = document.createElement("div");
            pokemonType.innerHTML = `<h5>Type: ${array[j].type}</h5>`;
            allDataDiv.insertAdjacentElement("afterbegin",individualDataDiv);
            individualDataDiv.insertAdjacentElement("afterbegin", pokemonPosition);
            individualDataDiv.insertAdjacentElement("afterbegin", pokemonType);
            individualDataDiv.insertAdjacentElement("afterbegin", pokemonName);
            individualDataDiv.insertAdjacentElement("afterbegin", pokemonImage);
        }
        else if(j < array.length-1)
        {
            if(array[j].name == array[j-1].name)
            {
                auxiliarArray.push("NO DATA");
            }
            else
            {
                auxiliarArray.push(array[j]);
                let individualDataDiv = document.createElement("div");
                individualDataDiv.setAttribute("id", `${j}`);
                individualDataDiv.setAttribute("class", "individualDataDiv");
                individualDataDiv.setAttribute("onclick", "returnID()")
                let pokemonPosition = document.createElement("div");
                pokemonPosition.innerHTML = `<h5> Pos: ${j}</h5>`;
                let pokemonImage = document.createElement("div");
                pokemonImage.innerHTML = `<img src="${array[j].ThumbnailImage}" onerror="this.onerror=null;this.src='errorLoad.png';">`
                let pokemonName = document.createElement("div");
                pokemonName.innerHTML = `<h5>${array[j].name}</h5>`;
                let pokemonType = document.createElement("div");
                pokemonType.innerHTML = `<h5>Type: ${array[j].type}</h5>`;
                allDataDiv.insertAdjacentElement("afterbegin",individualDataDiv);
                individualDataDiv.insertAdjacentElement("afterbegin", pokemonPosition);
                individualDataDiv.insertAdjacentElement("afterbegin", pokemonType);
                individualDataDiv.insertAdjacentElement("afterbegin", pokemonName);
                individualDataDiv.insertAdjacentElement("afterbegin", pokemonImage);
            }
        }
    }
    auxiliarArray.reverse();
    console.log(auxiliarArray)
}

function returnID()
{
    console.log("Estás en la función returnID")
}

// function showModalPokemon(array)
// {
//     let id = document.getElementById()
//     for(let k = 0; k < array.length; k++)
//     {
//         let id = null;
//         if(array[k] == "NO DATA")
//         {
//             continue
//         }
//         else if(array[k] != "NO DATA")
//         {
//             let id = document.getElementById(`${k}`).textContent;
//             if(id.includes(array[k].name))
//             {
//                 console.log(`${id}`);
//             }
//             else
//             {
//                 continue
//             }
//         }
//     }
// }

// Swal.fire({
//     title: 'Sweet!',
//     text: 'Modal with a custom image.',
//     imageUrl: 'https://unsplash.it/400/200',
//     imageWidth: 400,
//     imageHeight: 200,
//     imageAlt: 'Custom image',
//   })
// https://sweetalert2.github.io/#download


getData();