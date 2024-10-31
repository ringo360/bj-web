let one_mb_ms = 1000;
async function Def_Speed() {
    const before = Date.now();
    await fetch("/1mb.txt");
    const after = Date.now();
    console.log(`Took ${after - before}ms`);
    one_mb_ms = after - before;
}

function calcDelay(bytes) {
    const one_mb = 1024 * 1024;
    const mb = Number((bytes / one_mb).toFixed(2));
    console.log(`it may takes ${one_mb_ms * mb}ms (${mb})`);
    return one_mb_ms * mb;
}
