class Player {
    constructor() {
        this.mana = 0;
        this.maxMana = 100;
        this.manaGeneratorLevel = 1;
        this.manaGeranationRate = 1;

        this.manaCounter = document.getElementById("manaCounter");
    }

    #manaGenerator() {
        switch (this.manaGeneratorLevel) {
            case 2:
                this.maxMana = 150;
                this.manaGeranationRate = 1.2;
                break;
            case 3:
                this.maxMana = 250;
                this.manaGeranationRate = 1.4;
                break;
            case 4:
                this.maxMana = 350;
                this.manaGeranationRate = 1.8;
                break;
            case 5:
                this.maxMana = 500;
                this.manaGeranationRate = 2;
                break;
            case 6:
                this.maxMana = 1000;
                this.manaGeranationRate = 2.2;
                break;
        }
    }

    upgradeManaGenerator() {
        if (this.mana >= 75 % this.maxMana && this.manaGeneratorLevel < 7) {
            this.mana -= 75 % this.maxMana;
            this.manaGeneratorLevel++;
            this.#manaGenerator();
            this.manaCounter.innerText = `Mana: ${this.mana}/${this.maxMana}`;
        } else if (this.manaGeneratorLevel == 6) {
            console.log("Max level");
        } else {
            console.log("You don't have enought mana to upgrade the mana generator");
        }
        console.log(this.manaGeneratorLevel, "mana gen, upgrd");
        console.log(this.manaGeranationRate, "gen rate, upgrd");
    }

    generateMana() {
        if (this.mana < this.maxMana) {
            this.mana += this.manaGeranationRate;
            this.manaCounter.innerText = `Mana: ${this.mana}/${this.maxMana}`;
        }
    }
}