

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

scrollContainers.forEach((container)=>{ //for each container
    let touchPointX = 0
    let scrollPosition = 0
    let isGrabbing = false
    
    container.addEventListener('mousedown', (e) => { //On press
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
let currentPrice = 0

const totalCostElement = document.querySelector('.total-cost')
const getTotal = () => {
    let totalCost = 0;
    if(day1 === true) {
        totalCost = totalCost + 100
    }
    if(day2 === true) {
        totalCost = totalCost + 100
    }
    if(day3 === true) {
        totalCost = totalCost + 100
    }
    if(getQuery().score > 500) {
        totalCost = totalCost - 100
        if(totalCost < 0) totalCost = 0;
    }
    return totalCost
}

let isActive = false
const updatePrice = () => {
    if(isActive === false) {
        const total = getTotal()
        if(currentPrice < total) {
            isActive = true
            const priceInterval = setInterval(() => {
                currentPrice++
                totalCostElement.textContent = `${currentPrice} Kr`
                if(currentPrice >= total) {
                    isActive = false
                    clearInterval(priceInterval)
                    updatePrice()
                }
            }, 10);
        }
        if(currentPrice > total) {
            isActive = true
            const priceInterval = setInterval(() => {
                currentPrice--
                totalCostElement.textContent = `${currentPrice} Kr`
                if(currentPrice <= total) {
                    isActive = false
                    clearInterval(priceInterval)
                    updatePrice()
                }
            }, 10);
        }
    }
}

const buttons = document.querySelectorAll('.day-button')
buttons.forEach((button)=>{
    button.addEventListener('click', (e)=>{
        const day = e.currentTarget.dataset.day
        if(day === '1') {
            day1 ? day1 = false : day1 = true
            e.currentTarget.classList.toggle('bg-red-500')
            updatePrice()
        }
        else if(day === '2') {
            day2 ? day2 = false : day2 = true
            e.currentTarget.classList.toggle('bg-red-500')
            updatePrice()
        }
        else if(day === '3') {
            day3 ? day3 = false : day3 = true
            e.currentTarget.classList.toggle('bg-red-500')
            updatePrice()
        }
    })
})

//Total cost 



