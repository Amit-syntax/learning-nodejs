import fetch from 'node-fetch'

// basic async await example through API.
const getPokemon = async () => {
    let pokemons = await fetch('https://pokeapi.co/api/v2/pokemon/')
    console.log('requesting')

    return pokemons
}

getPokemon().then(async (res)=>{
    console.log(await res.json())
})


// testing asying await with for looping
for (let i=0; i <= 50; i++){
    await getPokemon().then(e => {
        getPokemon(); 
        getPokemon();
        console.log('Fetched; ', i) // this line will excute if previous 2 function invocation awaits
    })
    console.log('here 2: ', i)
}
