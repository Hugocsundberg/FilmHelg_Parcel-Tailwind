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
const swipeIndication = document.querySelector('.swipeIndicator')

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
    const scrollHandler = ()=>{
        if(container.scrollLeft > 20) {
            document.querySelectorAll('.swipeIndicator').forEach(indicator => {
                indicator.classList.add('opacity-0')
                indicator.classList.remove('animate-swipeIndication')
            }) 
        }
    } 
    container.addEventListener('scroll', scrollHandler)

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
            e.currentTarget.classList.toggle('bg-themeRed')
            updatePrice()
        }
        else if(day === '2') {
            day2 ? day2 = false : day2 = true
            e.currentTarget.classList.toggle('bg-themeRed')
            updatePrice()
        }
        else if(day === '3') {
            day3 ? day3 = false : day3 = true
            e.currentTarget.classList.toggle('bg-themeRed')
            updatePrice()
        }
    })
})

//SendActive 
const sendButton = document.querySelector('.send-button')
const emailInput = document.querySelector('.email-input')
const checkBox = document.querySelector('.check-box')
const checkImage = document.querySelector('.checkImage')
const checkIfValidSend = ()=>{
    setTimeout(() => {
        checkBox.checked ? checkImage.classList.remove('hidden') : checkImage.classList.add('hidden')
            
        if(emailInput.value !== "" && checkBox.checked) {
            sendButton.classList.add('bg-themeRed')
            sendButton.classList.add('text-white')
        } else {
            sendButton.classList.remove('bg-themeRed')
            sendButton.classList.remove('text-white')
        }
    }, 100);
}

window.addEventListener('keydown', checkIfValidSend)
checkBox.addEventListener('click', checkIfValidSend)

//Drapes
const rightDrape = document.querySelector('.rightDrapePath')
const leftDrape = document.querySelector('.leftDrapePath')
const rightDrapeContainer = document.querySelector('.animate-outRight')
const leftDrapeContainer = document.querySelector('.animate-outLeft')

let pathInt1 = 1500
let pathInt2 = 500
let pathInt3Left = 211
let pathInt3Right = 102
let slower = 0

const drapeInterval = setInterval(() => {
    slower++
    if(pathInt1 > 303) {
            pathInt1 = pathInt1 -5
    } 
    if(pathInt2 > 8) {
        pathInt2 = pathInt2 -2
    } 
    if(slower % 3 === 0) {
        if(pathInt3Left > 122) {
            pathInt3Left = pathInt3Left -1
        } 
        if(pathInt3Right < 191) {
            pathInt3Right = pathInt3Right +1
        } 
    }
    if(pathInt1 <= 303 && pathInt2 <= 8 && pathInt3Left <= 102 && pathInt3Right >= 211) {
        clearInterval(drapeInterval)
    }
    rightDrape.setAttribute('d', `M 102.80952,1.5119048 H 211.66666 V ${pathInt1}.84525 l -${pathInt2}.34219,-1.35553 C 197.05493,185.59875 ${pathInt3Right}.87662,99.819985 102.80952,1.5119048 Z`)
    leftDrape.setAttribute('d', `M 211.66666,1.5119048 H 102.80952 V ${pathInt1}.84525 l ${pathInt2}.34219,-1.35553 C 117.42125,185.59875 ${pathInt3Left}.59956,99.819985 211.66666,1.5119048 Z`)
    setTimeout(() => {
        rightDrapeContainer.remove()
        leftDrapeContainer.remove()
    }, 3000);
}, 10);
