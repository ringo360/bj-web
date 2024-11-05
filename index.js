//<img src="./assets/cards/ace_of_hearts.png" height="128" draggable="false">

async function ClearPlayerCards() {
    const elem = document.getElementById('player_cards')
    Array.from(elem.children).forEach((el) => {
        el.remove()
    });
}

async function ClearDealerCards() {
    const elem = document.getElementById('dealer_cards')
    Array.from(elem.children).forEach((el) => {
        el.remove()
    });
}

async function ClearAllCards() {
    await ClearDealerCards()
    await ClearPlayerCards()
}

async function AddCards(card) {
    const img = document.createElement('img')
    img.src = `./assets/cards/${card}.png`
    img.height = 128
    img.draggable = false
}

async function main() {
    const loader = await import('./loader.js')
    await loader.Call()
    console.log('Called')
}

main()