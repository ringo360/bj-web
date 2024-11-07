const $g = (id => {return document.getElementById(id)})

$g('panel_hit').onclick = handleClick
$g('panel_stand').onclick = handleClick
$g('panel_bet').onclick = handleClick

console.log('[EventListener] Called')