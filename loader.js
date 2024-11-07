let one_mb_ms=1000;
export let Called=(async()=>{let b=Date.now();await fetch("/assets/1mb.txt");let a=Date.now();console.log(`Took ${a-b}ms`);one_mb_ms=a-b;})