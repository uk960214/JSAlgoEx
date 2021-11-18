class Node{
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        if(!this.length) {
            this.head = val;
            this.tail = val;
        } else {
            this.tail.next = val;
            this.tail = val;
        }
        this.length++;
        return this
    }

    pop() {
        if(!this.head) return;
        let pre = this.head;
        if (pre.next === null) {
            this.head = null;
            this.tail = null;
            this.length = 0;
            return pre;
        }

        while(pre.next.next) {
            pre = pre.next;
        }
        let target = pre.next;
        pre.next = null;
        this.tail = pre;
        this.length--;
        return target;
    }

    shift() {
        if(!this.length) return;
        let toShift = this.head;
        this.head = this.head.next;
        this.length--;
        toShift.next = null;
        if(!this.length) this.tail = null;
        return toShift;
    }

    unshift(val) {
        if(!this.length) {
            this.head = val;
            this.tail = val;
        } else {
            val.next = this.head;
            this.head = val;
        }
        this.length++;
        return this;
    }

    get(index) {
        if(index < 0 || index >= this.length) return null;
        let current = 0;
        let target = this.head;
        while(current < index) {
            target = target.next;
            current++;
        }
        return target;
    }

    set(index, val) {
        let target = this.get(index);
        if(!target) return false;
        target.value = val;
        return true;
    }

    insert(index, val) {
        if(index < 0 || index > this.length) return false;
        if(index === this.length) !!this.push(val);
        if(index === 0) return !!this.unshift(val);

        let newNode = new Node(val);
        let prev = this.get(index - 1)
        newNode.next = prev.next;
        prev.next = newNode;
        this.length++;
        return true;
    }

    remove(index) {
        if(index < 0 || index >= this.length) return false;
        if(index === this.length - 1) return this.pop();
        if(index === 0) return this.shift();

        let prev = this.get(index - 1);
        let target = prev.next;
        prev.next = target.next;
        target.next = null;
        this.length--;
        return target;
    }

    reverse() {
        let temp = this.head;
        this.head = this.tail;
        this.tail = temp;

        let tempPrev = null;
        let tempNext = this.tail;
        let curr = this.tail;

        while(tempNext) {
            tempNext = curr.next;
            curr.next = tempPrev;
            tempPrev = curr;
            curr = tempNext;
        }
        
        return this;
    }
}

let first = new Node("hi");
let second = new Node("bye");
let third = new Node("!");

let list = new SinglyLinkedList();
list.push(first);
list.push(second);
list.push(third);