function createSortedList() {
  class list {
    constructor() {
      this.arr = [];
      this.size = 0;
    }
    add(element) {
      this.arr.push(element)
      this.size++;
      return this.arr.sort((a,b) => a-b);
    }
    remove(index) {
      if (this.arr.length > index && index >= 0) {
        this.arr.splice(index,1)
        this.size--;
        return this.arr;
      }else{
        throw new Error('Index outside boundary');
      }
    }
    get(index) {
        if (this.arr.length > index && index >= 0) {
            return this.arr[index]
        }else{
            throw new Error('Index outside boundary');
        }
    }
    
  }
  return new list()
}

let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));