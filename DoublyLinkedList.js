class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let newNode = new Node(val)
        if (!this.length) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        if(!this.length) return;
        let toPop = this.tail;
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
        }     
        this.length--;
        toPop.prev = null;
        return toPop;
    }
    
    shift() {
        if(!this.length) return;
        let toShift = this.head;
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = toShift.next;
            this.head.prev = null;
        }
        this.length--;
        toShift.next = null;
        return toShift;
    }

    unshift(val) {
        let newNode = new Node(val);
        if(!this.length) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.length++;
        return this;       
    }

    get(index) {
        if(index < 0 || index >= this.length) return null;
        let counter = 0
        if(this.length / 2 > index) {
            let target = this.head;
            while (counter < index) {
                target = target.next;
                counter++;
            }
            return target;
        } else {
            let target = this.tail;
            while (counter < this.length - index) {
                target = target.prev;
                counter++;
            }
            return target;
        }
    }

    set(index, val) {
        let target = this.get(index);
        if (target) {
            target.val = val;
            return true;
        } else return false;
    }

    insert(index, val) {
        if(index < 0 || index > this.length) return false;
        if(index === 0) return !!this.unshift(val);
        if(index === this.length) return !!this.push(val);
        let previous = this.get(index - 1);
        let newNode = new Node(val);
        newNode.prev = previous;
        newNode.next = previous.next;
        previous.next.prev = newNode;
        previous.next = newNode;
        this.length++;
        return true;
    }

    remove(index) {
        if(index < 0 || index >= this.length) return;
        if(index === 0) return this.shift();
        if(index === this.length - 1) return this.pop();
        let toRemove = this.get(index);
        toRemove.prev.next = toRemove.next;
        toRemove.next.prev = toRemove.prev;
        toRemove.next = null;
        toRemove.prev = null;
        this.length--;
        return toRemove;
    }
}

let first = new Node(12);
let second = new Node(13);

let list = new DoublyLinkedList();

list.push(first);
list.push(second);
