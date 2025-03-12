// //Gambling Dice Program
// let moneyValue = 0
// let addMoney;
// let loseMoney;
// let cl = console.log;
// // let money = 100;
// // Bet Raises
// let lowBet = 5;
// let mediumBet = 10;
// let highBet = 20;
// let maxBet = 50;

// function rollDice() {
//     const numOfDice = document.getElementById('numOfDice').value;
//     const diceResult = document.getElementById('diceResult');
//     const diceImages = document.getElementById('diceImages');
//     const gameOutcome = document.getElementById('gameOutcome');
//     const wallet = document.getElementById('moneyValue');
//     const values = [];
//     const images = [];

//     for (let i = 0; i < numOfDice; i++) {
//         const value = Math.floor(Math.random() * 6) + 1;
//         cl(diceResult);
//         values.push(value);
//         images.push(`<img src ="dice-images/${value}.jpg">`);
//     }
//     diceResult.textContent = `${values.join(", ")}`;
//     diceImages.innerHTML = images.join('');
//     const valueNum = values.join(", ");
//     ////////////////////////////////////////////////// SCORE CLASS LOGIC
//     if (valueNum === "2") {
//         moneyValue += highBet;
//         wallet.textContent = `$${moneyValue}`;
//         gameOutcome.textContent = "You've Won";
//         gameOutcome.style.color = "green";
//     }
//     else if (valueNum === "1, 1") {
//         moneyValue += 10
//         wallet.textContent = `$${moneyValue}`;
//         gameOutcome.textContent = "You've Won";
//         gameOutcome.style.color = "green";
//     }
//     else if (valueNum === "1, 1, 1" || valueNum === "2, 2, 2" || valueNum === "3, 3, 3" || valueNum === "4, 4, 4" || valueNum === "5, 5, 5," || valueNum === "6, 6, 6") {
//         moneyValue += 10;
//         wallet.textContent = `$${moneyValue}`;
//         gameOutcome.textContent = "You've Won";
//         gameOutcome.style.color = "green";
//     }
//     else {
//         moneyValue -= 10;
//         wallet.textContent = `$${moneyValue}`;
//         gameOutcome.textContent = "You lost";
//         gameOutcome.style.color = "red";
//     }



//     //////////////////////////////////////////////////// NUMDICE BET LOGIC


//     cl(moneyValue)
// }

// LUCKY SEVENS PROGRAM

let moneyValue = 0;
let lowBet = 5;
let mediumBet = 10;
let highBet = 20;
let maxBet = 50;

function rollDice() {
    const numOfDice = document.getElementById('numOfDice').value;
    const diceResult = document.getElementById('diceResult');
    const diceImages = document.getElementById('diceImages');
    const gameOutcome = document.getElementById('gameOutcome');
    const wallet = document.getElementById('moneyValue');
    const values = [];
    const images = [];

    // Roll the dice and store the results
    for (let i = 0; i < 6; i++) {
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src ="dice-images/${value}.jpg">`);
    }

    // Display results
    diceResult.textContent = `${values.join(", ")}`;
    diceImages.innerHTML = images.join('');

    // Count occurrences of each die value
    const counts = [0, 0, 0, 0, 0, 0];  // counts[0] = count of 1's, counts[1] = count of 2's, etc.
    values.forEach(value => {
        counts[value - 1]++;
    });

    // Check different winning conditions

    // Full House
    if (isFullHouse(counts)) {
        moneyValue += maxBet;
        wallet.textContent = `$${moneyValue}`;
        gameOutcome.textContent = "You've Won: Full House!";
        gameOutcome.style.color = "green";
        console.log('FULL HOUSE')
    }
    // 3 of a kind
    else if (counts[0] === 3 || counts[1] === 3 || counts[2] === 3 || counts[3] === 3 || counts[4] === 3 || counts[5] === 3 || counts[6] === 3) {
        console.log('3 OF A KIND')
        moneyValue += 10;
        wallet.textContent = `$${moneyValue}`;
        gameOutcome.textContent = "You've Won: 3 of a Kind!";
        gameOutcome.style.color = "green";

    }
    // 4 of a Kind
    else if (counts[0] === 4 || counts[1] === 4 || counts[2] === 4 || counts[3] === 4 || counts[4] === 4 || counts[5] === 4 || counts[6] === 4) {
        moneyValue += mediumBet;
        wallet.textContent = `$${moneyValue}`;
        gameOutcome.textContent = "You've Won: 4 of a Kind!"
        gameOutcome.style.color = 'green';
    }
    // YAHTZEE
    else if (counts[0] === 5 || counts[1] === 5 || counts[2] === 5 || counts[3] === 5 || counts[4] === 5 || counts[5] === 5 || counts[6] === 5){
        moneyValue += mediumBet;
        wallet.textContent = `$${moneyValue}`;
        gameOutcome.textContent = "You've Won: 4 of a Kind!"
        gameOutcome.style.color = 'green';
    }
    // 5-straight
    else if (isStraight(values)) {
        moneyValue += maxBet;
        wallet.textContent = `$${moneyValue}`;
        gameOutcome.textContent = "You've Won: 5-straight!";
        gameOutcome.style.color = "green";
    }
    else {
        moneyValue -= 10;
        wallet.textContent = `$${moneyValue}`;
        gameOutcome.textContent = "You lost";
        gameOutcome.style.color = "red";
    }
}

// Function to check for a Full House (3 of a kind and a pair)
function isFullHouse(counts) {
    const threeOfAKind = counts.filter(count => count === 3).length === 1;
    const pair = counts.filter(count => count === 2).length === 1;
    return threeOfAKind && pair;
}

// Function to check for a 5-straight sequence
function isStraight(diceValues) {
    const uniqueValues = [...new Set(diceValues)].sort();
    if (uniqueValues.length === 5) {
        for (let i = 0; i < uniqueValues.length - 1; i++) {
            if (uniqueValues[i + 1] !== uniqueValues[i] + 1) {
                return false;
            }
        }
        return true;
    }
    return false;
}
