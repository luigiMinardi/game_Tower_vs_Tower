class Spawnable extends Mob {
    constructor(name, hp, atk, sprite, id, price) {
        super(name, hp, atk, sprite, id);
        this.price = price
    }
}

// new Spawnable("Junin", 100, 5, "white", 1);
// new Spawnable(string, number, number, string, number);
