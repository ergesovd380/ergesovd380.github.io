let cols = document.querySelectorAll('.col')

function setRandomColors() {
    let hexCodes = '0123456789abcdef'
    let color = ''
    for(let i = 0; i < 6; i++) {
       color += hexCodes[Math.floor(Math.random() * hexCodes.length)] 
    }
    return '#' + color
}

document.addEventListener('keydown', event => {
    event.preventDefault()
    if(event.code.toLocaleLowerCase() === 'space') {
        changeColorsToCols()
    }
})

function changeColorsToCols(isInitial) {
    const colors = isInitial ? getColorsFromHash() : []
    cols.forEach((col, index) => {
        const txt = col.querySelector('h1')
        let btn = col.querySelector('button')

        if(btn.dataset.type === 'lock') {
            colors.push(txt.textContent)
            return
        }

        const color = isInitial 
        ? colors[index]
            ? colors[index]
            : chroma.random() 
        : chroma.random()

        if(!isInitial) {
            colors.push(color)
        }
        
        col.style.background = color
        txt.textContent = color
        textColor(txt, color)
        textColor(btn, color)
    })
    locationUrl(colors)
}

function copyText (text) {
    return navigator.clipboard.writeText(text)
}

document.addEventListener('click', event => {
    if(event.target.dataset.type === 'lock_open') {
        event.target.textContent = 'Lock'
        event.target.dataset.type = 'lock'
    } else if(event.target.dataset.type === 'lock') {
        event.target.textContent = 'Lock_open'
        event.target.dataset.type = 'lock_open'
    } else if (event.target.dataset.text === 'copy') {
        console.log(event.target.textContent)
        copyText(event.target.textContent)
    }
})

function locationUrl(colors = []) {
    document.location.hash = colors.map(col => {
        return col.toString().substring(1)
    })
    .join('-')
}

function textColor(text, color) {
    const luminance = chroma(color).luminance()
    text.style.color = luminance > 0.5 ? 'black' : 'white'
}

function getColorsFromHash() {
    if(document.location.hash > 1) {
        document.location.hash.substring(1).split('-').map(color => {
            return '#' + color
        })
    } 
    return[]
}

changeColorsToCols(true)
