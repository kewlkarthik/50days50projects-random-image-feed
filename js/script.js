const container = document.querySelector('.container')
const unsplash = 'https://source.unsplash.com/random/'
const rows = 12

for(let i = 0; i < rows * 3; i++){
    const img = document.createElement('img')
    img.src = `${unsplash}${getRandomSize()}`
    console.log(img)
    container.appendChild(img)
}

function getRandomSize(){
    return `${getRandomNum()}x${getRandomNum()}`
}
function getRandomNum(){
    return Math.floor(Math.random() * 10) + 300
}