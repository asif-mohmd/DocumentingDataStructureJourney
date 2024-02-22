class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class List {
  constructor() {
    this.size = null;
    this.head = null;
  }

  isEmpty() {
    return this.size === 0;
  }
  
  getSize() {
    return this.size.length;
  }

  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  append(value){
    const node = new Node(value)
    if(this.isEmpty()){
        this.head = node
  }else{
    let curr = this.head
      while(curr.next){
        curr = curr.next
      }
      curr.next = node
      this.size++
  }

  }

  print(){
    if(this.isEmpty()){
        console.log("list is Empty")
    }else{
        let curr = this.head
        let listValues = ''
        while(curr){
            listValues += `${curr.value} `
            curr = curr.next
        }
        console.log(listValues)
    }
  }



}

const list = new List();

console.log(list.isEmpty());
list.print()
list.prepend(10);
list.print()

list.prepend(20);
list.prepend(30);
list.append(40)
list.print()

