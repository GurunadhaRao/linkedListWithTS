"use strict";
// Individual node in the linked list
class ListNode {
    value;
    // This member is used to link the next node
    // We made it as optional because what if it is the last node in the list.
    next;
    constructor(value) {
        this.value = value;
    }
}
// Used to store the root node of the linked list
class LinkedList {
    root;
    tail;
    length = 0;
    // To add a new node
    add(value) {
        // No need to explicitly pass the TYPE as typeScript can infer the type based on the type of value we are passing.
        const node = new ListNode(value);
        if (!this.root || !this.tail) {
            this.root = node;
            this.tail = node;
        }
        else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
    }
    getNumberOfElements() {
        return this.length;
    }
    print() {
        let current = this.root;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }
}
const numberList = new LinkedList();
numberList.add(10);
numberList.add(5);
numberList.add(-3);
console.log('Length: ' + numberList.getNumberOfElements());
numberList.print();
const nameList = new LinkedList();
