//<img src="./assets/cards/ace_of_hearts.png" height="128" draggable="false">

async function AddCards(card) {
    const elem = document.createElement('img')
    elem.src = `./assets/cards/${card}.png`
    elem.height = 128
    elem.draggable = false
}

async function main() {
    const loader = await import('./loader.js')
    await loader.Call()
    console.log('Called')
}

main()