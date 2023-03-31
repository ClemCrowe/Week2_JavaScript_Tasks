let pet = {
    name: "Dot",
    typeOfPet: "Cat",
    age: "3",
    color: "Black",
    eat(){
        return `${this.name} is currently feasting on delicious treats.`
    },
    drink(){
        return `${this.name} is currently sipping up a storm.`
    }
}

console.log(pet.eat())
console.log(pet.drink())