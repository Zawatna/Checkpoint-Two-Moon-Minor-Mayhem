console.log("Hello")


let cheese = 0


let clickUpgrades = [
    {
        name: 'pickaxe',
        emoji: '⛏️',
        price: 10,
        quantity: 0,
        bonus: 1
    },
    {
        name: 'drill',
        emoji: '⚙️',
        price: 20,
        quantity: 0,
        bonus: 5
    },
    {
        name: 'hydromole',
        emoji: '🌊',
        price: 30,
        quantity: 0,
        bonus: 10
    },
    {
        name: 'dynamite',
        emoji: '🧨',
        price: 50,
        quantity: 0,
        bonus: 25
    },
];

let automaticUpgrades = [
    {
        name: 'rover',
        emoji: '🛻',
        price: 60,
        quantity: 0,
        bonus: 40
    },
    {
        name: 'jetpack',
        emoji: '🚀',
        price: 200,
        quantity: 0,
        bonus: 100
    },
];

//not sure how to make this a forEach statement
function mine() {
    cheese += 1
    console.log("Cheese plus one", cheese)
    // TODO this whole repeating section could be replaced with a for loop!
    if (clickUpgrades[0].quantity >= 1) {
        let totalClickBonus = (clickUpgrades[0].bonus) * (clickUpgrades[0].quantity);
        console.log("New Mining Power", totalClickBonus)
        cheese = totalClickBonus + cheese
    }
    if (clickUpgrades[1].quantity >= 1) {
        let totalClickBonus = (clickUpgrades[1].bonus) * (clickUpgrades[1].quantity);
        console.log("New Mining Power", totalClickBonus)
        cheese = totalClickBonus + cheese
    }
    if (clickUpgrades[2].quantity >= 1) {
        let totalClickBonus = (clickUpgrades[2].bonus) * (clickUpgrades[2].quantity);
        console.log("New Mining Power", totalClickBonus)
        cheese = totalClickBonus + cheese
    }
    if (clickUpgrades[3].quantity >= 1) {
        let totalClickBonus = (clickUpgrades[3].bonus) * (clickUpgrades[3].quantity);
        console.log("New Mining Power", totalClickBonus)
        cheese = totalClickBonus + cheese
    }
    if (automaticUpgrades[0].quantity >= 1) {
        let totalClickBonus = (automaticUpgrades[0].bonus) * (automaticUpgrades[0].quantity);
        console.log("New Rover Power", totalClickBonus)
        cheese = totalClickBonus + cheese
    }
    if (automaticUpgrades[1].quantity >= 1) {
        let totalClickBonus = (automaticUpgrades[1].bonus) * (automaticUpgrades[1].quantity);
        console.log("New Jetpack Power", totalClickBonus)
        cheese = totalClickBonus + cheese
    }

    updateCheese()
}

function updateCheese() {
    console.log("You have more cheese", cheese)
    const cheeseContainer = document.getElementById("cheese")
    cheeseContainer.innerHTML = cheese.toString()
}

function buyPickaxe() {

    if (cheese < clickUpgrades[0].price) {
        window.alert("sorry")
        return
    }
    else if (cheese >= clickUpgrades[0].price) {
        clickUpgrades[0].quantity += 1
        cheese -= clickUpgrades[0].price
        clickUpgrades[0].price = (Math.round(clickUpgrades[0].price * 1.1));
        console.log("Purchased")
        // updatePickaxe()
        updateCheese()
        updateKeyStats()
        updateTotalClickUpgrades()
    }
}
// FIXME  abandon this function, and move on to updateKeyStats
// function updatePickaxe() {
//     console.log("More axes!")
//     const axeContainer = document.getElementById("pluspickaxe")
//     axeContainer.innerHTML = clickUpgrades[0].quantity.toString()
//         //  add in more "drawing" to draw the upgrades price as well
//         `<span> ⚙️Drill +1 |price | qty</span>`
// }
function buyDrill() {

    if (cheese < clickUpgrades[1].price) {
        window.alert("sorry")
        return
    }
    else if (cheese >= clickUpgrades[1].price) {
        clickUpgrades[1].quantity += 1
        cheese -= clickUpgrades[1].price
        clickUpgrades[1].price = (Math.round(clickUpgrades[1].price * 1.2));
        console.log("Purchased")
        updateCheese()
        updateKeyStats()
        updateTotalClickUpgrades()
    }
}

function buyHydroMole() {

    if (cheese < clickUpgrades[2].price) {
        window.alert("sorry")
        return
    }
    else if (cheese >= clickUpgrades[2].price) {
        clickUpgrades[2].quantity += 1
        cheese -= clickUpgrades[2].price
        clickUpgrades[2].price = (Math.round(clickUpgrades[2].price * 1.3));
        console.log("Purchased")
        updateCheese()
        updateKeyStats()
        updateTotalClickUpgrades()
    }
}

function buyDynamite() {

    if (cheese < clickUpgrades[3].price) {
        window.alert("sorry")
        return
    }
    else if (cheese >= clickUpgrades[3].price) {
        clickUpgrades[3].quantity += 1
        cheese -= clickUpgrades[3].price
        clickUpgrades[3].price = (Math.round(clickUpgrades[3].price * 1.5));
        console.log("Purchased")
        // updateDynamite()
        updateCheese()
        updateKeyStats()
        updateTotalClickUpgrades()

    }
}

function updateKeyStats() {
    clickUpgrades.forEach(clickUpgrade => {
        let clickUpgradeBinElm = document.getElementById(clickUpgrade.name)
        console.log(clickUpgrade.name, clickUpgradeBinElm)
        clickUpgradeBinElm.innerHTML = `${clickUpgrade.name} +${clickUpgrade.bonus} | 🧀${clickUpgrade.price} | #️${clickUpgrade.quantity}`
    })
}

function buyRover() {
    if (cheese < automaticUpgrades[0].price) {
        window.alert("Sorry, you do not have enough cheese!")
        return
    }
    else if (cheese >= automaticUpgrades[0].price) {
        automaticUpgrades[0].quantity += 1
        cheese -= automaticUpgrades[0].price
        automaticUpgrades[0].price = (Math.round(automaticUpgrades[0].price * 1.6));
        console.log("Purchased Rover")
        updateCheese()
        updateAutoUpgrades()
        updateTotalAutoUpgrades()
    }
}
function buyJetpack() {
    if (cheese < automaticUpgrades[0].price) {
        window.alert("Sorry, you do not have enough cheese!")
        return
    }
    else if (cheese >= automaticUpgrades[0].price) {
        automaticUpgrades[0].quantity += 1
        cheese -= automaticUpgrades[0].price
        automaticUpgrades[0].price = (Math.round(automaticUpgrades[0].price * 2.2));
        console.log("Purchased Jetpack")
        updateCheese()
        updateAutoUpgrades()
        updateTotalAutoUpgrades()
    }
}
// FIXME we need functions to buy our auto upgrades

// calculating + data manipulation
// this function needs to add up the total bonus of all the upgrades in autoUpgrades
// add that total to cheese
// TODO logically this calculation is fine, but it's mixed with drawing elements that ultimately breaks things
function collectAutoUpgrades() {
    automaticUpgrades.forEach(automaticUpgrade => {
        let sum = (automaticUpgrade.bonus) * (automaticUpgrade.quantity);
        cheese = sum + cheese
        console.log('auto collecting', sum);
        updateAutoUpgrades() // bring me back once this calculation works
        updateCheese()
        updateTotalAutoUpgrades()
    })
}
function updateAutoUpgrades() {
    console.log("Bonus Upgrades")
    automaticUpgrades.forEach(automaticUpgrade => {
        let automaticUpgradeBinElm = document.getElementById(automaticUpgrade.name)
        //console.log(automaticUpgrade.name, automaticUpgradeBinElm);
        //console.log('', statsElm);
        automaticUpgradeBinElm.innerHTML = `${automaticUpgrade.name} +${automaticUpgrade.bonus} | 🧀${automaticUpgrade.price} | #${automaticUpgrade.quantity}`
    })
}

// drawing
// FIXME this tries to grab elements based on upgrade names, but there are no ID's with those upgrade names
// it also tries to grab a SECOND element, which is not needed

setInterval(collectAutoUpgrades, 5000);

// FIXME need a totalClickUpgrades
// FIXME need a totalAutoUpgrades
// both of these will add up your total power, then render it to the page
function totalClickUpgrades() {
    let total = 0
    clickUpgrades.forEach(clickUpgrade => {
        total += (clickUpgrade.quantity) * (clickUpgrade.bonus)
        console.log('🧮', total);
    })
    console.log('✔️🧮', total);

    return total
}
function updateTotalClickUpgrades() {
    const totalClickUpgradesElm = document.getElementById('totalclick')
    totalClickUpgradesElm.innerHTML = `${totalClickUpgrades()}`
}

function totalAutoUpgrades() {
    let total = 0
    automaticUpgrades.forEach(automaticUpgrade => {
        total += (automaticUpgrade.quantity) * (automaticUpgrade.bonus)
        console.log('🧮', total);
    })
    console.log('✔️🧮', total);
    return total
}

function updateTotalAutoUpgrades() {
    const totalAutoUpgradesElm = document.getElementById('totalauto')
    totalAutoUpgradesElm.innerHTML = `${totalAutoUpgrades()}`
}