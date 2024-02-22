class Queue{
    constructor(){
        this.items = []
    }

    enqueue(element){
        this.items.push(element)
    }

    dequeue(){
        this.items.shift()
    }

    isEmpty(){
        return this.items.length === 0
    }

    print(){
        if(this.isEmpty()){
            console.log("nothing to print")
        }else{
            let str = ""
            for(let i=0;i<this.items.length;i++){
                str += this.items[i] + " "
            }

            return str
        }
    }


}

const queue = new Queue()

queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)
console.log(queue.print())
queue.dequeue()
console.log(queue.print())