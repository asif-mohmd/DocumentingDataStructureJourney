const person1 = {
    name:"asif",
    age: 21
}

const person2 = {
    name: "jacky",
    age: 24
}

function fullDetails(place){
    console.log(this.name + " " + this.age + " " + place)
}

fullDetails.call(person1,"ernakulam")

//usecase of call instead of this 

// const person3 = {
//     name:"asif",
//     age: 21,
//     x:function fullDetails(){
//         console.log(this.name + " " + this.age)
//     }
// }

// const person4 = {
//     name: "jacky",
//     age: 24,
//     x:function fullDetails(){
//         console.log(this.name + " " + this.age)
//     }
// }

// console.log(person3.name)
