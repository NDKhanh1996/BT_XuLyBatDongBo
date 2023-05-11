let money = 0.3

function getSalary() {
    return new Promise((resolve) => {
        if (money < 2000){
            setTimeout(() => {
                money += 2000;
                resolve()
            }, 1000);
        }
    });
}

function buyBike() {
    if (money >= 3000) {
        console.log('bought');
    } else {
        console.log('not enough money');
    }
}

getSalary().then(buyBike)