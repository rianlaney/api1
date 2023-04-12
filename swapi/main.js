const button = document.querySelector('button')
let worldContainer = document.querySelector('#planet')


const buttonClicked =() => {
    axios.get(`https://swapi.dev/api/planets/2`)
         .then(res =>{
            displayPlanet(res.data)
            console.log(displayPlanet)
         })

     console.log('button clicked')
}

const displayPlanet = obj =>{
    worldContainer.innerHTML = ''
    let {residents} = obj
    for(let i=0; i<residents.length;i++){
        axios.get(residents[i])
             .then(res=>{
                let resident = document.createElement(`h2`)
                resident.textContent = res.data.name
                console.log(res.data)

             worldContainer.appendChild(resident)
            }
             )
    }
    // let {url} = obj
    
}
document.addEventListener('click', buttonClicked)