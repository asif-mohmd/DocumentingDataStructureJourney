class Stack{
    constructor(){
        this.items = []
    }

    push(element){
        this.items.push(element)
    }

    pop(){
        this.items.pop()
    }
    isEmpty(){
        return this.items.length == 0
    }
    peek(){
        if(this.isEmpty()){
            console("Nothing in stack")
    }else{
        return this.items[0]
    }
    }

    print(){
       
        if(this.isEmpty()){
            console.log("nothing in stack")
        }else{
           let str = ""
            for(let i=0;i<this.items.length;i++){
                 str +=  this.items[i] + " "
            }
            return str
        }
      
    }
    

}

let stack = new Stack()
console.log("works")
stack.push(10)
stack.push(20)
console.log(stack.print())