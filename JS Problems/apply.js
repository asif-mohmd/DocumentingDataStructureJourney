const person1 = {
    name:"asif",
    age: 21
}

const person2 = {
    name: "jacky",
    age: 24
}

function fullDetails(place,car){
    console.log(this.name + " " + this.age + " " + place +  " " + car)
}

fullDetails.apply(person1,["ernakulam","porche"])