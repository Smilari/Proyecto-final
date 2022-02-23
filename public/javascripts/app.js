//! GENERADOR DE NUMERO RANDOM
const getRandomInt = (min, max) => {
    return  Math.floor(Math.random() * (max - min)) + min; 
  }

const random = getRandomInt(1,152) //* Genera un numero del 1 al 151 y lo pasa a una constante
  

 
const fetchData = async(id) => {
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const data = await res.json() //* Transformo la informacion a un json
        console.log(data);
    } catch (error) { //* En caso de haber un error salta directamente a esta linea de codigo
        console.log(error)
    }
}
fetchData(random)
