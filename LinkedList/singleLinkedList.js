

class Node {
    constructor(value, node) {
        this.value = value;
        this.next = node;
    }
}

class SingleLinkedList {
    constructor() {
        this.head = null
        this.tail =  null
    }

     // O(1)
    addInTheBeginning(value) {
        if(this.head === null)
        {
            const node = new Node(value,null)
            this.head = node
            this.tail = node
        }
        else
        {
            const node = new Node(value, this.head)
            this.head =  node
        }
    }

    // O(1)
    addInTheEnd(value) {
        const node = new Node(value,null)
        if(this.head === null)
        {
            this.head = node
            this.tail = node
        }
        else
        {
            this.tail.next  = node
            this.tail =  node
        }
    }

    // O(1)
    removeFromTheBeginning() {
        this.head = this.head.next
    }

    // O(n)
    removeFromEnd() {
        if(this.head === null)
            return;
        let node =  this.head
        while(node.next !== this.tail)
        {
            node = node.next
        }
        node.next = null
        this.tail = node

    }

    // O(1)
    isEmpty() {
        return this.head === null
    }

    // O(n)
    print() {
        if(this.head === null)
            return;

        let node =  this.head
        while(node !== null)
        {
            console.log(node.value)
            node = node.next
        }

    }

    // O(n)
    find(value) {
        if(this.head === null)
            return;
        let node =  this.head
        while(node !== null)
        {
            if(node.value === value)
            {
                break;
            }
            node = node.next
        }
        return node
    }

    // O(n)
    remove(value) {
        if(this.head === null)
            return;
        let currentNode =  this.head
        let previousNode = null
        while(currentNode !== null)
        {
            if(currentNode.value === value)
            {
                break;
            }
            previousNode = currentNode
            currentNode = currentNode.next
        }


        if(currentNode!==null)
        {
            previousNode.next = currentNode.next
        }

    }

}

const singleLinkedList = new SingleLinkedList()

console.log(`New List before inserting anything is empty = ${singleLinkedList.isEmpty()}`)
singleLinkedList.addInTheBeginning(11)
singleLinkedList.addInTheBeginning(9)
singleLinkedList.addInTheBeginning(7)
singleLinkedList.addInTheBeginning(5)

singleLinkedList.addInTheEnd(13)

console.log(`After inserting records is not empty = ${singleLinkedList.isEmpty()}`)

console.log(`List content`)
singleLinkedList.print()

console.log(`Finding 11 value in the list =`, singleLinkedList.find(11))


singleLinkedList.removeFromTheBeginning()
singleLinkedList.removeFromEnd()

console.log(`List content After removing from the beginning and end`)
singleLinkedList.print()

singleLinkedList.remove(9)

console.log(`List content After removing 9 from the list`)

singleLinkedList.print()


