class LinkedListNode<T> {
  data: T;
  next: LinkedListNode<T> | null = null;

  constructor(data: T) {
    this.data = data;
  }
}

class SinglyLinkedList<T> { 
  private head: LinkedListNode<T> | null = null;

  // This method checks if the singly linked list is empty
  isEmpty(): boolean {
    return this.head === null;
  }

  // This method inserts a node at the beginning of the list
  insertAtBeginning(data: T): void {
    const newNode = new LinkedListNode(data);

    if (this.head === null) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  // This method inserts a node at the end of the list
  insertAtEnd(data: T): void {
    const newNode = new LinkedListNode(data);

    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;

      while (current.next !== null) {
        current = current.next;
      }

      current.next = newNode;
    }
  }

  // This method deletes the first occurence of a value

  deleteValue(data: T): void {
    if (this.head === null) return;

    // if it is the head node that is being deleted
    if (this.head.data === data) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;
    while (current.next !== null && current.next.data !== data) {
      current = current.next;
    }

    if (current.next !== null) {
      current.next = current.next.next;
    }
  }

  // This method traverses and prints the list
  print(): void {
    let current = this.head;
    while (current !== null) {
      console.log(current.data, '-->');
      current = current.next;
    }
  }


  reverseListIteratively(): LinkedListNode<T> | null {
    let previous: LinkedListNode<T> | null = null;
    let current: LinkedListNode<T> | null = this.head;
    let next: LinkedListNode<T> | null = null;


    while ( current !== null){
       
      next = current.next;

      current.next = previous;

      previous = current;
      current = next;
    }

    this.head = previous;
    return this.head;
  }
}

export { LinkedListNode, SinglyLinkedList };
