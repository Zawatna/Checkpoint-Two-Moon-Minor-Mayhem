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
        name: 'hydro mole',
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
        name: 'jet pack',
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
        clickUpgrades[0].price = (Math.round(clickUpgrades[0].price * 0.1));
        console.log("Purchased")
        updatePickaxe()
        updateCheese()
        updateKeyStats()
    }
}

function updatePickaxe() {
    console.log("More axes!")
    const axeContainer = document.getElementById("pluspickaxe")
    axeContainer.innerHTML = clickUpgrades[0].quantity.toString()

}

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
        updateDrill()
        updateCheese()
        updateKeyStats()
    }
}

function updateDrill() {
    console.log("More drills!")
    const drillContainer = document.getElementById("plusdrill")
    drillContainer.innerHTML = clickUpgrades[1].quantity.toString()

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
        updateHydroMole()
        updateCheese()
        updateKeyStats()
    }
}

function updateHydroMole() {
    console.log("More Hydro Moles!")
    const moleContainer = document.getElementById("plushydromole")
    moleContainer.innerHTML = clickUpgrades[2].quantity.toString()

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
        updateDynamite()
        updateCheese()
        updateKeyStats()
    }
}

function updateDynamite() {
    console.log("More dynamite!")
    const dynamiteContainer = document.getElementById("plusdynamite")
    dynamiteContainer.innerHTML = clickUpgrades[3].quantity.toString()
}





//1) not sure when things should be plural and not,
//2) whether the let statsElm line is correct and why or why not
//3) how to update the total stats buttons on the html page.

function updateKeyStats() {
    clickUpgrades.forEach(clickUpgrade => {
        let clickUpgradeBinElm = document.getElementById(clickUpgrade.name)
        // console.log(clickUpgrade.name, clickUpgradeBinElm)
        let statsElm = clickUpgradeBinElm.querySelector('plusclickupgrades')
        // console.log('📈', statsElm);
        statsElm.innerHTML = `${clickUpgrade.name} | ${clickUpgrade.price} | ${clickUpgrade.bonus}`
    })
}

function collectAutoUpgrades() {
    automaticUpgrades.forEach(automaticUpgrades => {
        let automaticUpgradeBinElm = document.getElementById(automaticUpgrades.name)

        let totalAutomaticUpgradesElm = (automaticUpgrades.bonus) * (automaticUpgrades.quantity);
        console.log(".stats", totalAutomaticUpgradesElm)
        cheese = totalAutomaticUpgradesElm + cheese
        updateAutoUpgrades()
        updateCheese()
    })
}
function updateAutoUpgrades() {
    console.log("Bonus Upgrades")
    automaticUpgrades.forEach(automaticUpgrade => {
        let automaticUpgradeBinElm = document.getElementById(automaticUpgrade.name)
        //console.log(automaticUpgrade.name, automaticUpgradeBinElm);
        let statsElm = automaticUpgradeBinElm.querySelector('.stats')
        //console.log('', statsElm);
        statsElm.innerHTML = `${automaticUpgrade.name} | ${automaticUpgrade.price} | ${automaticUpgrade.bonus}`
    })
}

setInterval(collectAutoUpgrades, 3000);

function totalClickUpgrades() {

}