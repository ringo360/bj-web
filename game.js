const $g = (id => {return document.getElementById(id)})

$g('panel_hit').onclick = game_HIT
$g('panel_stand').onclick = game_STAND
$g('panel_bet').onclick = game_BET

async function ClearPlayerCards() {
    const elem = $g('player_cards')
    Array.from(elem.children).forEach((el) => {
        el.remove()
    });
}

async function ClearDealerCards() {
    const elem = $g('dealer_cards')
    Array.from(elem.children).forEach((el) => {
        el.remove()
    });
}

async function ClearAllCards() {
    await ClearDealerCards()
    await ClearPlayerCards()
}

async function AddCards(card, p) {
    const img = document.createElement('img')
    img.src = `./assets/cards/${card}.png`
    img.height = 128
    img.draggable = false
}

async function game_HIT() {
    console.log('uwu')
}
async function game_STAND() {
    console.log('uwu')
}
async function game_BET() {
    console.log('uwu')
}


console.log('[Game] Called')