class Stack{
    constructor(){
        this.items = []
    }

    push(item){
        this.items.push(item)
    }

    pop(){
        return this.items.pop()
    }

    isEmpty(){
       
       return this.items.length ===0
    }

    peek(){
        return this.items[this.items.length -1]
    }



}

const cars = new Stack()



cars.push("BMW")
cars.push("Audi")
cars.push("Benz")
console.log(cars)
console.log(cars.isEmpty())
console.log(cars)