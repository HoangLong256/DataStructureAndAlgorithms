/*
--QUESTION--
Given a linked list, remove the n-th node from the end of list and return its head.

--EXAMPLE--
Given linked list: 1->2->3->4->5, and n = 2.
After removing the second node from the end, the linked list becomes 1->2->3->5.

--APPROACH--
Approach 1:
    + Calculate the length of linkedlist
    + The removed node = length - n
Approach 2: Use two pointer
    + The first pointer at the head
    + The second pointer at the n (from the head)
    + Second pointer - First pointer = n
    + Travel both pointer, if the second pointer reach null,
      the first pointer will reach the removed node

*/



//SOLUTION 1: Two pass
//COMPLEXITY: O(2*n)

var removeNthFromEnd = function(head, n) {
    //Identify the node to remove
    let removed = linkedListLen(head) - n ;
    
    //Remove the node at the head
    if(removed < 0){
        head = head.next;
        return head;
    }
    
    //Travel to the removed node
    let currentNode = head;
    for(let i = 0; i <= removed - 1; i++){
        currentNode = currentNode.next;
    }
    
    //Removed it
    currentNode.next = currentNode.next.next;
    return head;
    
};


// Calculate the length of linkedlist
var linkedListLen = function(head){
    let totalNode = 0;
    let currentNode = head;
    while(currentNode.next !== null){
        currentNode = currentNode.next;
        totalNode += 1;
    }
    return totalNode;
}

//SOLUTION 2: One pass two pointer
//COMPLEXITY: O(n)
var removeNthFromEnd = function(head, n) {
    let pointer1 = head;
    let pointer2 = head;
    for(let i = 0; i < n; i++){
        pointer2 = pointer2.next;
    }
    if(!pointer2){
        head = head.next;
        return head;
    }

    while(pointer2.next !== null){
        pointer2 = pointer2.next;
        pointer1 = pointer1.next;
    }
    pointer1.next = pointer1.next.next;
    return head;
};