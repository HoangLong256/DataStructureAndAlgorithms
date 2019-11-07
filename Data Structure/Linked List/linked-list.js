class Node{
    constructor(data, next = null){
        this.data = data
        this.next = next
    } 
}

class Linkedlist{
    constructor(){
        this.head = null
    }
}

Linkedlist.prototype.insertAtTheEnd = function(data){
    let node = new Node(data)
    if(this.head === null){
        this.head = node
        return node
    }
    let currentNode = this.head
    while(currentNode.next !== null){
        currentNode = currentNode.next
    }
    currentNode.next = node
    return node
}

Linkedlist.prototype.insertAtTheBegining = function(data){
    let node = new Node(data)
    if(this.head === null){
        this.head === node
        return node
    }
    let temp = this.head
    this.head = node
    node.next = temp
    return node
}

Linkedlist.prototype.printAll = function(){
    let currentNode = this.head
    while(currentNode.next !== null){
        console.log(currentNode.data)
        currentNode = currentNode.next
    }
    console.log(currentNode.data)
}
let linkedlist = new Linkedlist()
linkedlist.insertAtTheEnd(5)
linkedlist.insertAtTheEnd(7)
linkedlist.insertAtTheEnd(9)
linkedlist.insertAtTheBegining(8)
linkedlist.insertAtTheBegining(3)

linkedlist.printAll()