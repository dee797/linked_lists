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
}

class Node {
    constructor(value=null, next=null) {
        this.value = value;
        this.next = next;
    }
}


