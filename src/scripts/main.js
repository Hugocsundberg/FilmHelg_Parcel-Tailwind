//Get query parameters
const getQuery = () => {
    let QueryParameters = window.location.search
    QueryParameters = QueryParameters.replace('?', '')
    QueryParameters = QueryParameters.split('&')
    
    let queryObject = {}
    QueryParameters.forEach(QueryParameters => { // For each query patameter value
        const splitSet = QueryParameters.split('=')
        queryObject[splitSet[0]] = splitSet[1]
    });
    return queryObject
}

const queryName = getQuery().name
const queryScore = getQuery().name

const header = document.querySelector('h1.welcome')
header.textContent=`Welcome, ${queryName}!`

//Drag-scroll
const scrollContainers = document.querySelectorAll('.scroll-container')
console.log(scrollContainers)

scrollContainers.forEach((container)=>{ //for each container
    let touchPointX = 0
    let scrollPosition = 0
    let isGrabbing = false
    
    container.addEventListener('mousedown', (e) => { //On press
        console.log(e)
        console.log(`LayerX: ${e.layerX} scrollLeft: ${e.currentTarget.scrollLeft}`)
        touchPointX = e.x 
        isGrabbing = true
        
    })
    container.addEventListener('mouseup', (e) => { //On release
        isGrabbing = false
        scrollPosition = container.scrollLeft
    })
    container.addEventListener('mouseleave', (e) => { //On leave
        isGrabbing = false
        scrollPosition = container.scrollLeft
    })
    container.addEventListener('mousemove', (e) => { //On movement
        if(isGrabbing === true) {
            container.scrollLeft = (touchPointX - e.x) * 2 + scrollPosition  
        }
    })
})

//Dayselection
let day1 = false
let day2 = false
let day3 = false

const buttons = document.querySelectorAll('.day-button')
buttons.forEach((button)=>{
    button.addEventListener('click', (e)=>{
        const day = e.currentTarget.dataset.day
        if(day === '1') {
            day1 ? day1 = false : day1 = true
            e.currentTarget.classList.toggle('bg-red-500')
        }
        else if(day === '2') {
            day2 ? day2 = false : day2 = true
            e.currentTarget.classList.toggle('bg-red-500')
        }
        else if(day === '3') {
            day3 ? day3 = false : day3 = true
            e.currentTarget.classList.toggle('bg-red-500')
        }
        
        console.log(day1, day2, day3)
    })
})
