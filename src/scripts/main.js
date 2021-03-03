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
            container.scrollLeft = touchPointX - e.x + scrollPosition  
        }
    })
})