---
slug: js-cheatsheet-blog-post
title: JS Cheatsheet Blog Post
authors: Yihan
tags: [JS]
---

# File with heading

#### 1 Array

##### 1.1 Array creation

- Create a new array

  `const A = [];`

- Create a subarray

  `const A = B.slice(l, r); // From idx l to r, r is not included`

- Copy from other array

  `const A = [...B];`

- Create an array from a set

  `const A = [...mySet];`

- Create an array from a string

  `const A = [...myStr];`

- Create an array from hashmap keys

  `const A = Object.keys(myMap);`

- Create an array from hashmap values

  `const A = Object.values(myMap);`

- Create an array from hashmap keys and values

  `const A = Object.entries(myMap);`

- Create an array with length `m`

  `const dp = Array(m);`

- Create an array with length `m`, initialized as `0`

  `const dp = Array(m).fill(0);`

- Create a 2-D array with dimension `r x c`, initialized as `-1`

  `const dp = Array.from(Array(r), () => Array(c).fill(-1));`

##### 1.2 Array modification

- Add an element

  `A.push(x);`

- Add all elements from other array

  `A.push(...B);`

- Add an element from left

  `A.unshift(x);`

- Pop an element

  `A.pop();`

- Pop an element from left

  `A.shift();`

- Remove/add element(s)

  `A.splice(idx, deleteCnt, x); // in place`

- Reverse an array

  `A.reverse(); // in place`

- Sort an array in increasing order

  `A.sort((a, b) => a - b); // in place`

- Other usages

  `A.map(); A.filter(); A.every(); A.some();`

#### 2 String

- Create a string literal

  `const s = "abcd";`

- Create a string from other string

  `const s1 = s2.substring(l, r); // From idx l to r, r is not included`

- Create a string by joining an array

  `const s = A.join("");`

- Create a string of repeating char

  `const s = "xyz".repeat(5);`

- Reverse a string

  `const s1 = [...s2].reverse().join("");`

- Loop a string

  `for (const char of s) {}`

- Split a string

  `const arr = s.split(" ");`

#### 3 Set

- Create a new set

  `const seen = new Set();`

- Create a set from an array

  `const seen = new Set(A);`

- Add an element

  `seen.add(x);`

- Delete an element

  `seen.delete(x);`

#### 4 Hashtable (object)

- Create a new hashtable

  `const g = {};`

- Add a key value pair

  `g[a] = b;`

- Delete a key

  `delete g[a];`

- Detect key exists

  `if (key in g) {}`

  `if (g[key]) {} // Only works if you know there is no falsy value`

  `if (g[key] !== undefined) {}`

- Loop through key value pair

  `for (const [key, value] of Object.entries(g)) {}`

#### 5 Heap

- Create a min heap

  `const minHeap = new Heap((a, b) => a - b);`

- Create a max heap

  `const maxHeap = new Heap((a, b) => b - a);`

- Create a custom heap

  `const heap = new Heap((a, b) => a[0] - b[0] ? a[0] - b[0] : a[1] - b[1]);`

- Create a heap from an array

  `minHeap.heapify(A);`

- Add an element

  `minHeap.add(x);`

- Pop an element

  `minHeap.pop();`

- Peek an element

  `minHeap.peek();`

- Delete an element

  `minHeap.delete(x);`

- Heap implementation

```js
  class Heap {   
      constructor(comparator) {     
            this.arr = [];     
            this.comparator = comparator;   
      }    
      
      getL() {     
            return this.arr.length;   
      } 

      getPIdx(i) {     
            return Math.floor((i - 1) / 2);   
      }    
         
      getLIdx(i) {     
            return 2 * i + 1;   
      }    
         
      getRIdx(i) {     
            return 2 * i + 2;   
      }    
         
      swap(i, j) {     
            [this.arr[i], this.arr[j]] = [this.arr[j], this.arr[i]];   
      }    
         
      peek() {     
            if (!this.arr.length) 
                  return null;     
            return this.arr[0];   
      }    
         
      pop() {     
            if (!this.arr.length) 
                  return null;     
            if (this.arr.length === 1) 
                  return this.arr.pop();     
            const res = this.arr[0];     // Move last item from end to head     
            this.arr[0] = this.arr.pop();     
            this.heapifyDown();     
            return res;   
      }    
            
      add(n) {     
            this.arr.push(n);     
            this.heapifyUp();   
      }    // Default idx is the first idx   
            
      heapifyDown(idx = 0) {     
            let p = idx;     
            let c;     
            // Compare parent with its children and swap with target child if necessary     
      // Do it in a loop     
            while (this.getLIdx(p) < this.arr.length) {       
            // Get target child first       
                  if (this.getRIdx(p) < this.arr.length && this.comparator(this.arr[this.getRIdx(p)], this.arr[this.getLIdx(p)]) < 0)         
                        c = this.getRIdx(p);       
                  else 
                        c = this.getLIdx(p);       
            // Compare with parent, if not valid, break       
                  if (this.comparator(this.arr[p], this.arr[c]) <= 0) 
                        break;       
            // Swap       
                  this.swap(p, c);       
                  p = c;     
            }   
      }    
            // Default idx is the last idx   
      heapifyUp(idx = this.arr.length - 1) {     
            let c = idx;     
            let p = null;     
            // While has parent     
            while (c) {       
                  p = this.getPIdx(c);       
                  if (this.comparator(this.arr[p], this.arr[c]) <= 0) break;       
            // Swap       
                  this.swap(p, c);       
                  c = p;     
            }   
      }    
            
      heapify(A) {     // Bottom up     // Heapify down each item     
            this.arr = A;     
            for (let i = Math.floor(A.length / 2); i >= 0; i--) {       
                  this.heapifyDown(i);     
            }   
      }    
            
      delete(n) {     
            const idx = this.arr.indexOf(n);     
            this.arr[idx] = this.arr[this.arr.length - 1];     
            this.arr.pop();     
            this.heapifyDown(idx);   
      }
}
```

#### 6 Union find

```js
class DS {   
      constructor(n) {     
            this.root = [...Array(n + 1).keys()];     
            this.rank = Array(n + 1).fill(0);   
      }   

      find(i) {     
            if (i !== this.root[i]) 
                  this.root[i] = this.find(this.root[i]);     
            return this.root[i];   
      }   

      union(i, j) {     
            const [root1, root2] = [this.find(i), this.find(j)];     
            if (root1 === root2) 
                  return false;     
            if (this.rank[root1] > this.rank[root2]) 
                  this.root[root2] = root1;     
            else if (this.rank[root1] < this.rank[root2]) 
                  this.root[root1] = root2;     
            else {       
                  this.root[root2] = root1;       this.rank[root1]++;     
            }     
            return true;   
      } 
}
```

#### 7 Trie

```js
// Construct a trie from W (W is an array of words) 
const trie = {}; 
W.forEach((w) => {   
      let node = trie;   

      for (const c of w) {     
            if (!node[c]) 
            node[c] = {};     
            node = node[c];   
      }   

      node.end = true; 
});
```

#### 8 Monotonic queue e.g. 239-sliding-window-maximum

```js
const maxSlidingWindow = (A, k) => {   
      const win = []; // Store idx  
      const res = [];   

      for (let i = 0; i < A.length; i++) {     
      // Need to get max from win[0], so keep an descending queue     
      while (win.length && A[win[win.length - 1]] <= A[i]) 
            win.pop();     
            win.push(i);     
      // Remove first element if it's out of window     
      if (win[0] === i - k) 
            win.shift();     
      if (i >= k - 1) 
            res.push(A[win[0]]);   
      }   
      return res; 
};
```

#### 9 Quick sort/select

```js
const partition = (A, l, r) => {   
      let j = l;   
      let boundary = A[r];   

      for (let i = l; i < r; i++) {     
            if (A[i] < boundary) {       
                  [A[i], A[j]] = [A[j], A[i]];       
                  j++;     
            }   
      }   
      [A[j], A[r]] = [A[r], A[j]];   
      return j; 
};  

const quickSort = (A, l, r) => {   
      if (r <= l) return; 
        
      const idx = partition(A, l, r);   
      quickSort(A, l, idx - 1);   
      quickSort(A, idx + 1, r);   
      return A; 
};
```

#### 10 Bianry index tree

```js
class BIT {   
      constructor(n) {     
            this.pre = Array(n + 1).fill(0);   
      }   

      update(i, delta) {     
            while (i < this.pre.length) {       
                  this.pre[i] += delta;       
                  i += i & -i;     
            }   
      }  
                        
      getSum(i) {     
            let res = 0;     
            while (i) {       
                  res += this.pre[i];       
                  i -= i & -i;     
            }     
            return res;   
      } 
}
```
