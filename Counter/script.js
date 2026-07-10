const countDisplay = document.getElementById('count')
const increase = document.getElementById('increase')
const decrease = document.getElementById('decrease')
const reset = document.getElementById('reset')
const input = document.getElementById('input')
 
let count = 0
 
function updateDisplay() {
    countDisplay.textContent = count
 
    countDisplay.classList.remove('positive', 'negative')
    if (count > 0) {
        countDisplay.classList.add('positive')
    } 
    else if (count < 0) {
        countDisplay.classList.add('negative')
    }
}
 
function getStep() {
    const step = parseInt(input.value)
    return isNaN(step) || step < 1 ? 1 : step
}
 
increase.addEventListener('click', function() {
    count += getStep()
    updateDisplay()
})
 
decrease.addEventListener('click', function() {
    count -= getStep()
    updateDisplay()
})
 
reset.addEventListener('click', function() {
    count = 0
    input.value = 1
    updateDisplay()
})