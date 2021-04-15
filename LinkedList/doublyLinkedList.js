

class Node {
    constructor(value, prevNode, nextNode) {
        this.value = value;
        this.previous = prevNode;
        this.next = nextNode;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null
        this.tail =  null
    }

     // O(1)
    addInTheBeginning(value) {
        if(this.head === null)
        {
            const node = new Node(value,null, null)
            this.head = node
            this.tail = node
        }
        else
        {
            const node = new Node(value, null, this.head)
            node.next.previous = node
            this.head =  node
        }
    }

    // O(1)
    addInTheEnd(value) {
        if(this.head === null)
        {
            const node = new Node(value,null, null)
            this.head = node
            this.tail = node
        }
        else
        {
            const node = new Node(value,this.tail, null)
            node.previous.next = node
            this.tail  = node
        }
    }

    // O(1)
    removeFromTheBeginning() {
        if(this.head === null)
            return;
        this.head = this.head.next
        this.head.previous = null
    }

    // O(1)
    removeFromEnd() {
        if(this.tail === null)
            return;
        this.tail = this.tail.previous
        this.tail.next = null

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
        while(currentNode !== null)
        {
            if(currentNode.value === value)
            {
                currentNode.previous.next = currentNode.next
                break;
            }
            currentNode = currentNode.next
        }

    }

}

const doublyLinkedList = new DoublyLinkedList()

console.log(`New List before inserting anything is empty = ${doublyLinkedList.isEmpty()}`)
doublyLinkedList.addInTheBeginning(11)
doublyLinkedList.addInTheBeginning(9)
doublyLinkedList.addInTheBeginning(7)
doublyLinkedList.addInTheBeginning(5)

doublyLinkedList.addInTheEnd(13)

console.log(`After inserting records is not empty = ${doublyLinkedList.isEmpty()}`)

console.log(`List content`)
doublyLinkedList.print()

console.log(`Finding 11 value in the list =`, doublyLinkedList.find(11))


doublyLinkedList.removeFromTheBeginning()
doublyLinkedList.removeFromEnd()

console.log(`List content After removing from the beginning and end`)
doublyLinkedList.print()

doublyLinkedList.remove(9)

console.log(`List content After removing 9 from the list`)

doublyLinkedList.print()


