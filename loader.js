async function delay(time){return new Promise((resolve)=>{setTimeout(resolve, time)})}
const card_names = [
    "10_of_clubs.png",
    "10_of_diamonds.png",
    "10_of_hearts.png",
    "10_of_spades.png",
    "2_of_clubs.png",
    "2_of_diamonds.png",
    "2_of_hearts.png",
    "2_of_spades.png",
    "3_of_clubs.png",
    "3_of_diamonds.png",
    "3_of_hearts.png",
    "3_of_spades.png",
    "4_of_clubs.png",
    "4_of_diamonds.png",
    "4_of_hearts.png",
    "4_of_spades.png",
    "5_of_clubs.png",
    "5_of_diamonds.png",
    "5_of_hearts.png",
    "5_of_spades.png",
    "6_of_clubs.png",
    "6_of_diamonds.png",
    "6_of_hearts.png",
    "6_of_spades.png",
    "7_of_clubs.png",
    "7_of_diamonds.png",
    "7_of_hearts.png",
    "7_of_spades.png",
    "8_of_clubs.png",
    "8_of_diamonds.png",
    "8_of_hearts.png",
    "8_of_spades.png",
    "9_of_clubs.png",
    "9_of_diamonds.png",
    "9_of_hearts.png",
    "9_of_spades.png",
    "ace_of_clubs.png",
    "ace_of_diamonds.png",
    "ace_of_hearts.png",
    "ace_of_spades.png",
    "ace_of_spades2.png",
    "black_joker.png",
    "jack_of_clubs.png",
    "jack_of_clubs2.png",
    "jack_of_diamonds.png",
    "jack_of_diamonds2.png",
    "jack_of_hearts.png",
    "jack_of_hearts2.png",
    "jack_of_spades.png",
    "jack_of_spades2.png",
    "king_of_clubs.png",
    "king_of_clubs2.png",
    "king_of_diamonds.png",
    "king_of_diamonds2.png",
    "king_of_hearts.png",
    "king_of_hearts2.png",
    "king_of_spades.png",
    "king_of_spades2.png",
    "playing-card-back.jpg",
    "queen_of_clubs.png",
    "queen_of_clubs2.png",
    "queen_of_diamonds.png",
    "queen_of_diamonds2.png",
    "queen_of_hearts.png",
    "queen_of_hearts2.png",
    "queen_of_spades.png",
    "queen_of_spades2.png",
    "red_joker.png",
];
const cardbytes = [
    54676, 46241, 46328, 50453, 23590, 19815, 20136, 21863, 29161, 24257, 24757,
    26922, 28623, 24212, 24681, 26409, 34857, 29319, 29804, 32219, 39972, 33692,
    33457, 36854, 41174, 34168, 34474, 37167, 48468, 40441, 40849, 44015, 51028,
    42981, 43085, 46943, 42481, 36810, 44136, 61075, 42763, 41744, 40192,
    208118, 34727, 215482, 42091, 260725, 40477, 247507, 42009, 263133, 36412,
    266252, 43728, 279570, 42335, 201544, 203016, 45004, 285495, 39185, 195223,
    46831, 243233, 45431, 205872, 41267,
];
let one_mb_ms = 1000;
async function Def_Speed() {
    const before = Date.now();
    await fetch("/assets/1mb.txt");
    const after = Date.now();
    console.log(`Took ${after - before}ms`);
    one_mb_ms = after - before;
}
function calcDelay(bytes) {
    const one_mb = 1024 * 1024;
    const mb = Number((bytes / one_mb).toFixed(2));
    console.log(`it may takes ${one_mb_ms * mb}ms (${mb}mb)`);
    return one_mb_ms * mb;
}
const length = card_names.length
async function loader() {
    await Def_Speed()
    /*
    for (let i = 0; i < length; i++) {
        console.log(`Fetching ${card_names[i]} (${cardbytes[i]}bytes)`)
        const newItem = document.createElement('div');
        newItem.classList.add('');
        newItem.innerHTML = `<img src="/assets/cards/${card_names[i]}" alt="image" /></a>`;
        await delay(calcDelay(cardbytes[i]))
    }*/
}
loader()