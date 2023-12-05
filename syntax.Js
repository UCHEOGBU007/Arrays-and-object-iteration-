// Step 1
var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake'];

function logDairy() {
    for (let item of dairy) {
        console.log(item);
    }
}

logDairy();

// Step 2
const animal = {
    canJump: true
};

const bird = Object.create(animal);

bird.canFly = true;
bird.hasFeathers = true;

function birdCan() {
    for (let prop in bird) {
        if (bird.hasOwnProperty(prop)) {
            console.log(`${prop}: ${bird[prop]}`);
        }
    }
}

birdCan();

// Step 3
function animalCan() {
    for (let prop in bird) {
        console.log(`${prop}: ${bird[prop]}`);
    }
}

animalCan();
