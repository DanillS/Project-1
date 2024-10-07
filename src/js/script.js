'use strict'

const elements = document.querySelectorAll('.text'),
      Previous = document.querySelector('#Previous'),
      Next = document.querySelector('#Next')

function searchRed() {
    const redLine = document.querySelector('.red__line')
    const redColor = document.querySelector('.redColor')
    return {
        redColor,
        delRed: function() {
            return redLine.classList.remove('red__line'),
                   redColor.classList.remove('redColor')
        },
        addRed: function(parent) {
            return parent.children[0].classList.add('red__line'), 
                   parent.children[1].classList.add('redColor')
        }
    }
}
   
elements.forEach(element => {
    element.addEventListener('click', e => {
        searchRed().delRed()
        searchRed().addRed(element)
    })
})

Previous.addEventListener('click', e => {
    const redColor = searchRed().redColor
     if (redColor.textContent !== '1') {
        searchRed().delRed()
        const parentBack = redColor.parentElement.previousElementSibling
        searchRed().addRed(parentBack)
     }
})

Next.addEventListener('click', e => {
    const redColor = searchRed().redColor
     if (redColor.textContent !== '5') {
        searchRed().delRed()
        const parentBack = redColor.parentElement.nextElementSibling
        searchRed().addRed(parentBack)
     }
})