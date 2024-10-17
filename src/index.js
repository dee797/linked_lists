class LinkedList {
    #linkedList = {
        head: null
    };


    append(value) {
        const newNode = new Node(value);

        if (this.#linkedList.head === null) this.prepend(value);
        else {
            let tempNode = this.#linkedList.head;
            while (tempNode.next !== null) tempNode = tempNode.next;

            tempNode.next = newNode;
        }
    }


    prepend(value) {
        this.#linkedList.head = new Node(value, this.#linkedList.head);
    }


    get size() {
        let count = 0;
        if (this.#linkedList.head === null) return count;
        
        let tempNode = this.#linkedList.head;
        while (tempNode.next !== null) {
            tempNode = tempNode.next;
            count++;
        }

        return count;
    }


    get head() {
        return this.#linkedList.head;
    }


    get tail() {
        if (this.#linkedList.head === null) return this.#linkedList.head;

        let tempNode = this.#linkedList.head;
        while (tempNode.next !== null) tempNode = tempNode.next;

        return tempNode;
    }


    at(index) {
        if (this.#linkedList.head === null) return console.log("There are currently no nodes stored in this list.");

        let count = 0;
        let tempNode = this.#linkedList.head;
        while (tempNode.next !== null && count <= index) {
            tempNode = tempNode.next;
            count++;
        }

        if (count !== index) return console.log("Index out of range.");
        return tempNode;
    }


    pop() {
        if (this.#linkedList.head === null) return console.log("There are currently no nodes stored in this list.");

        let tempNode = this.#linkedList.head;
        let previousNode = tempNode;
        while (tempNode.next !== null) {
            previousNode = tempNode;
            tempNode = tempNode.next;
        }

        previousNode.next = null;
    }


    contains(value) {
        if (this.#linkedList.head === null) return console.log("There are currently no nodes stored in this list.");

        let tempNode = this.#linkedList.head;
        while (tempNode.next !== null) {
            if (tempNode.value === value) return true;
            tempNode = tempNode.next;
        }
        return false;
    }
}

class Node {
    constructor(value=null, next=null) {
        this.value = value;
        this.next = next;
    }
}


