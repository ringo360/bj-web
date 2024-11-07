const $g = (id => {return document.getElementById(id)})

$g('panel_hit').addEventListener('click', handleClick())
$g('panel_stand').addEventListener('click', handleClick())
$g('panel_bet').addEventListener('click', handleClick())

function handleClick() {
    console.log("Button was clicked!");
}

console.log('[EventListener] Called')