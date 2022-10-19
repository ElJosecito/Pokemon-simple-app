//Campos de texto
const PokemonId = document.querySelector(".id");
const pokemonName = document.querySelector(".name");
const pokemonType = document.querySelector(".tipo");
const pokemonAbilityOne = document.querySelector(".first__ability");
const pokemonAbilitytwo = document.querySelector(".second__ability");

//imagen
const imgSelector = document.querySelector(".imgSrc");

//boton
const btnCallPokemon = document.getElementById("btn__pokemon");




//funcion que hace la consulta a la api.
const PokemonCall = ()=>{
    //funcion para tener un numero random entr 0 y el numero marcado.
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }
      
    //definicion de variable y uso de funcion getRandomInt para tener un numero diferente cada vez que se ejecute.
    let data = getRandomInt(789);

    //Conexion a la api mediante fetch 
    fetch(`https://pokeapi.co/api/v2/pokemon/${data}/`).then(response => response.json()).then(json =>{

 //desestructuracion del objeto para acceder de manera mas facil a la propiedades
    const {name,id,
                types:{
                    0:{
                        type:{name: typeName}
                    }
                },

                abilities:{0:{
                    ability:
                    {name: powerNameOne}
                    },
                    1:{
                        ability:{
                            name: powerNametwo
                        }
                    }

            },
            sprites:{front_default}
    } = json


    //Hacemos uso de innerHTML para dar funcionalidad.

    PokemonId.innerHTML = (`#${id.toString().padStart(3,0)}`);

    //name.charAt(0).toUpperCase() + name.slice(1) capitaliza la palabra
    pokemonName.innerHTML = (name.charAt(0).toUpperCase() + name.slice(1));
    pokemonType.innerHTML = (`Type: ${typeName.charAt(0).toUpperCase() + typeName.slice(1)}`);
    pokemonAbilityOne.innerHTML = (`First Ability:    ${powerNameOne}`);
    pokemonAbilitytwo.innerHTML = (`Second Ability:    ${powerNametwo}`);

    //le damos un link a la imagen 
    imgSelector.src = front_default;
});
};




//llamo la funcion PokemonCall que ejecuta el script por primera vez para que no se quede en blanco
PokemonCall();


//evento para que cada que clickemos el boton ejecute la funcion pokemonCall. 
btnCallPokemon.addEventListener("click", ()=>{
    PokemonCall();
});

