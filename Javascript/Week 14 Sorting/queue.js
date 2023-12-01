class Queue{
    constructor(){
        this.items = []
    }

    enqueue(item){
        this.items.push(item)
    }

    dequeue(){
        return this.items.shift()
    }
}


const cars = new Queue()

cars.enqueue("nn")
cars.enqueue("mm")
console.log(cars)

cars.dequeue()
console.log(cars)