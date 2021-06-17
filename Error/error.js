console.log('pocetak');
try{
    console.log('u try sam')
    var a=10; b;
    var sum = a + b;
    console.log(sum);
    console.log('u try nakon greske')    
}
catch(error){
    console.log(error.name);
}

console.log('izvan ceck')

//primer dva

try {
    
    throw new Error('greska se desila')
    console.log('nesto')
} catch {
    console.log(error.message);
}

console.log("nesto drugo")