//<img src="./assets/cards/ace_of_hearts.png" height="128" draggable="false">

async function main() {
    const loader = await import('./loader.js')
    loader.Call()
    await import('./game.js')
    console.log('Loaded')
}

main()