let person = {
    firstName: 'Zen',
    lastName: 'Oven',
    set fullName(name){
        if(!name) return;
        let names = name.split(' ');
        this.firstName = names[0];
        names[1] && (this.lastName = names[1]);
    },
    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }
};

console.log(person.fullName);
console.log(person.fullName = 'foo bar');
