// Individual node in the linked list
class ListNode<T> {
    // This member is used to link the next node
    // We made it as optional because what if it is the last node in the list.
    next?: ListNode<T>

    constructor(public value: T) { }
}

// Used to store the root node of the linked list
class LinkedList<T> {
    private root?: ListNode<T>;
    private tail?: ListNode<T>;
    private length = 0;

    // To add a new node
    add(value: T) {
        // No need to explicitly pass the TYPE as typeScript can infer the type based on the type of value we are passing.
        const node = new ListNode(value);

        if (!this.root || !this.tail) {
            this.root = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
    }
}