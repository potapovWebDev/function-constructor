function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function() {
        console.log(`hello ${this.name}`);
    };
}

User.prototype.exit = function() {
    console.log(`${this.id} вышел`);
};

const maksim = new User('maksim', 23);
/* 
console.log(maksim); */

maksim.exit();

maksim.hello();