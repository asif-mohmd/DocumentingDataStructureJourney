const person1 = {
    name:"asif",
    age: 21
}

const person2 = {
    name: "jacky",
    age: 24
}

function fullDetails(place,car){
    console.log(this.name + " " + this.age + " " + place)
}

const print = fullDetails.bind(person1,"ernakulam","audi")

print()