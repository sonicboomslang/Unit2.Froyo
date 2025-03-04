const Yogurt = prompt("Please enter a comma-seperated list of all of the yogurt flavors you've had")

let flavors = Yogurt.split(", ");

const froyoCount = {}; 

 for (let i = 0; i < flavors.length; i++) {
    const flavor = flavors[i];
    if (froyoCount[flavor]) {
        froyoCount[flavor] += 1; 
    } else {
        froyoCount[flavor] = 1; 
    }
}

console.table(froyoCount);