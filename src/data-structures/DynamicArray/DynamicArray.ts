class DynamicArray<T> {
    private capacity: number;
    private length: number;
    private data: T[];
  
    constructor(initialCapacity: number = 1) {
      this.capacity = initialCapacity;
      this.length = 0;
      this.data = new Array(this.capacity);
    }
  
    // Returns the number of elements in the array
    size(): number {
      return this.length;
    }
  
    // Checks if the array is empty
    isEmpty(): boolean {
      return this.length === 0;
    }
  
    // Adds an element to the array
    add(item: T): void { 
      if (this.length === this.capacity) {
        this.resize();
      }
      this.data[this.length] = item;
      this.length++;
    }
  
    // Retrieves an element at a specific index
    get(index: number): T | undefined {
      if (index < 0 || index >= this.length) {
        throw new Error("Index out of bounds");
      }
      return this.data[index];
    }
  
    // Removes and returns the element at the specified index
    remove(index: number): T | undefined {
      if (index < 0 || index >= this.length) {
        throw new Error("Index out of bounds");
      }
      const item = this.data[index];
      for (let i = index; i < this.length - 1; i++) {
        this.data[i] = this.data[i + 1];
      }
      this.data[this.length - 1] = undefined as any;
      this.length--;
      return item;
    }
  
    // Resizes the internal array when capacity is reached
    private resize(): void {
      this.capacity *= 2;
      const newData = new Array<T>(this.capacity);
      for (let i = 0; i < this.length; i++) {
        newData[i] = this.data[i];
      }
      this.data = newData;
    }
  }
  
  export default DynamicArray;