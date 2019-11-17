/*
You are given two non-empty linked lists representing two non-negative integers.
The digits are stored in reverse order and each of their nodes contain a single digit.
Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero,
 except the number 0 itself.

Example:

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/*
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// Solution 1 (1563/1563 test cases passed)

var addTwoNumbers = function(l1, l2) {
    let carry=0;
    const root = new ListNode(null);
    let lastNode=root;
    
    while(l1||l2||carry){
        let sum=carry;
        if(l1){
            sum+=l1.val;
            l1=l1.next;
        }
        if(l2){
            sum+=l2.val;
            l2=l2.next;  
        }
        if(sum>9){
            carry=1;
            sum=sum%10;
        }else{
            carry=0;
        }
        const node = new ListNode(sum);
        lastNode.next=node;
        lastNode=node;
    }
    return root.next;
    };

    // Solution 2 (1560/1563 test cases passed)
    // Reason: Javascipt cannot handle large number
    var addTwoNumbers = function(l1, l2) {
        var total = getIntFromList(l1)  + getIntFromList(l2)
        console.log(BigInt(total))
        var node = getNode(total, total.toString().length)
        return node
    };
    
    
    var getIntFromList = function(node){
        let result = 0;
        let index = 1;
        let currentNode = node
        while(currentNode.next){
            result += currentNode.val * index;
            currentNode = currentNode.next;
            index = (index * 10) 
        }
        result += currentNode.val * index;
        return result
    
    }
    
    var getNode = function(total, length){
        if(length > 0){
            var node = new ListNode(total%10)
            node.next = getNode(Math.floor(total/10), length - 1)
            return node
        }
        return null
    }