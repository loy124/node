class Robot {
    constructor(name) {
        this.name = name;
    }

    speack() {
        console.log(`${this.name}`);
    }
}

class Ai extends Robot {
    constructor(name) {
        super(name);
    }
    walk() {
        console.log(`walk: ${this.name}`);
    }
}

const r = new Robot('hello');
r.speack();

const a = new Ai('hi');
a.speack();
a.walk();