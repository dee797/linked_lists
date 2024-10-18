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
        while (tempNode !== null) {
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
        // index must be 0-based

        if (this.#linkedList.head === null) {
            return "There are currently no nodes stored in this list.";
        }

        let count = 0;
        let tempNode = this.#linkedList.head;
        while (tempNode !== null) {
            if (count === index) break;
            tempNode = tempNode.next;
            count++;
        }

        if (count !== index || tempNode === null) return "Index out of range.";
        return tempNode;
    }


    pop() {
        if (this.#linkedList.head === null) return "There are currently no nodes stored in this list.";

        let tempNode = this.#linkedList.head;
        let previousNode = tempNode;
        while (tempNode.next !== null) {
            previousNode = tempNode;
            tempNode = tempNode.next;
        }

        previousNode.next = null;
        return tempNode;
    }


    contains(value) {
        if (this.#linkedList.head === null) return "There are currently no nodes stored in this list.";

        let tempNode = this.#linkedList.head;
        while (tempNode !== null) {
            if (tempNode.value === value) return true;
            tempNode = tempNode.next;
        }
        return false;
    }


    find(value) {
        const containValue = this.contains(value);
        if (!containValue) return null;
        if (typeof containValue === 'string') return containValue;

        let count = 0;
        let tempNode = this.#linkedList.head;
        while (tempNode !== null) {
            if (tempNode.value === value) break;
            tempNode = tempNode.next;
            count++
        }

        return count;
    }


    toString() {
        let tempNode = this.#linkedList.head;
        let string = '';
        while (tempNode !== null) {
            string += `( ${tempNode.value} ) -> `;
            tempNode = tempNode.next;
        }

        string += tempNode;
        return string;
    }


    insertAt(value, index) {
        if (this.#linkedList.head === null) {
            this.prepend(value);
            return;
        }

        let count = 0;
        let tempNode = this.#linkedList.head;
        while (tempNode !== null) {
            if (count === index - 1) break;
            tempNode = tempNode.next;
            count++;
        }

        if (count !== index - 1 || tempNode === null) {
            console.log("Index out of range.");
            return;
        }

        tempNode.next = new Node(value, tempNode.next);        
    }


    removeAt(index) {
        if (this.#linkedList.head === null) {
            console.log("There are currently no nodes stored in this list.");
            return;
        }

        let count = 0;
        let tempNode = this.#linkedList.head;
        let previousNode = tempNode;

        while (tempNode !== null) {
            if (count === index) break;
            previousNode = tempNode;
            tempNode = tempNode.next;
            count++;
        }
        
        if (count !== index || tempNode === null) {
            console.log("Index out of range.");
        } else if (count === 0 ) {
            this.#linkedList.head = this.#linkedList.head.next; 
        } else {
            previousNode.next = tempNode.next;

        }
    }
}


class Node {
    constructor(value=null, next=null) {
        this.value = value;
        this.next = next;
    }
}


export default LinkedList;