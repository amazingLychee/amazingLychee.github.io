# Fast and Slow Pointers in Linked Lists
## 1. Overview
The fast and slow pointers technique involves using two pointers that traverse the linked list at different speeds:

- **Slow pointer** moves one step at a time.
- **Fast pointer** moves two steps at a time.
### Common Use Cases
- **Cycle Detection**: To check if the linked list contains a cycle (loop).
- **Finding the Middle Node**: To find the middle element of the linked list in a single traversal.
- **Cycle Length**: To determine the length of the cycle if one exists.
## 2. Fast and Slow Pointers for Cycle Detection (Floyd’s Cycle-Finding Algorithm)
### Implementation
```python
def has_cycle(head):
slow = head
fast = head

while fast and fast.next:
slow = slow.next        # Move slow pointer by 1
fast = fast.next.next   # Move fast pointer by 2

        if slow == fast:        # Cycle detected
            return True

return False
```

### Explanation
- The `fast` pointer moves two steps, and the `slow` pointer moves one step at a time.
- If there is a cycle, the fast pointer will eventually meet the slow pointer inside the cycle.
- If there is no cycle, the fast pointer will reach the end of the list (`None`).
## 3. Finding the Middle of the Linked List
### Implementation
```python
def find_middle(head):
slow = head
fast = head

while fast and fast.next:
slow = slow.next        # Move slow pointer by 1
fast = fast.next.next   # Move fast pointer by 2

return slow  # Slow pointer will be at the middle when fast reaches the end
```

### Explanation
- The `fast` pointer moves at double the speed of the `slow` pointer.
- When the `fast` pointer reaches the end of the list, the `slow` pointer will be at the middle.
### Example Usage
```python
# Creating a linked list: 1 -> 2 -> 3 -> 4 -> 5
llist = LinkedList()
llist.insert_at_end(1)
llist.insert_at_end(2)
llist.insert_at_end(3)
llist.insert_at_end(4)
llist.insert_at_end(5)

# Finding the middle node
middle_node = find_middle(llist.head)
print(middle_node.data)  # Output: 3
```

## 4. Finding the Start of the Cycle
If a cycle is detected, you can use the fast and slow pointers to find the cycle's start node.

### Implementation
```python
def find_cycle_start(head):
slow = head
fast = head
has_cycle = False

    # First, detect if there is a cycle
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
        if slow == fast:
            has_cycle = True
            break

    # If there is no cycle, return None
    if not has_cycle:
        return None

    # Find the start of the cycle
    slow = head
    while slow != fast:
        slow = slow.next
        fast = fast.next

    return slow  # The start of the cycle
```

### Explanation
Detect if there is a cycle using the fast and slow pointers.
If a cycle is detected:
- Move one pointer to the head of the list.
- Move both pointers one step at a time.
- The node where they meet is the start of the cycle.
## 5. Calculating the Length of a Cycle
If a cycle is detected, you can calculate its length.

### Implementation
```python
def cycle_length(head):
slow = head
fast = head
has_cycle = False

    # First, detect if there is a cycle
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
        if slow == fast:
            has_cycle = True
            break

    # If there is no cycle, return 0
    if not has_cycle:
        return 0

    # Calculate the length of the cycle
    current = slow
    length = 0
    while True:
        current = current.next
        length += 1
        if current == slow:
            break

    return length
```

### Explanation
- After detecting a cycle, keep traversing the cycle until you return to the starting point to count its length.
## 6. Usage Examples
### Cycle Detection
```python
# Creating a linked list with a cycle
llist = LinkedList()
llist.insert_at_end(1)
llist.insert_at_end(2)
llist.insert_at_end(3)
llist.insert_at_end(4)

# Creating a cycle (4 -> 2)
llist.head.next.next.next.next = llist.head.next

print(has_cycle(llist.head))  # Output: True
```
### Finding the Start of the Cycle
```python
cycle_start_node = find_cycle_start(llist.head)
print(cycle_start_node.data)  # Output: 2
```

### Finding Cycle Length
```python
length_of_cycle = cycle_length(llist.head)
print(length_of_cycle)  # Output: 3
```
