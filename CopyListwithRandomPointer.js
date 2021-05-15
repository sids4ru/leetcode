/**
 * 
 * https://leetcode.com/problems/copy-list-with-random-pointer/
 * 
 * Copy List with Random Pointer
 * A linked list of length n is given such that each node contains an additional random pointer, which could point to any node in the list, or null.

Construct a deep copy of the list. The deep copy should consist of exactly n brand new nodes, where each new node has its value set to the value of its corresponding original node. Both the next and random pointer of the new nodes should point to new nodes in the copied list such that the pointers in the original list and copied list represent the same list state. None of the pointers in the new list should point to nodes in the original list.

For example, if there are two nodes X and Y in the original list, where X.random --> Y, then for the corresponding two nodes x and y in the copied list, x.random --> y.

Return the head of the copied linked list.

The linked list is represented in the input/output as a list of n nodes. Each node is represented as a pair of [val, random_index] where:

val: an integer representing Node.val
random_index: the index of the node (range from 0 to n-1) that the random pointer points to, or null if it does not point to any node.
Your code will only be given the head of the original linked list.

 

Example 1:


Input: head = [[7,null],[13,0],[11,4],[10,2],[1,0]]
Output: [[7,null],[13,0],[11,4],[10,2],[1,0]]
Example 2:


Input: head = [[1,1],[2,1]]
Output: [[1,1],[2,1]]
Example 3:



Input: head = [[3,null],[3,0],[3,null]]
Output: [[3,null],[3,0],[3,null]]
Example 4:

Input: head = []
Output: []
Explanation: The given linked list is empty (null pointer), so return null.
 

Constraints:

0 <= n <= 1000
-10000 <= Node.val <= 10000
Node.random is null or is pointing to some node in the linked list.
/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */
 function Node(val, next, random) {
    this.val = val;
    this.next = next;
    this.random = random;
 }
/**
 * @param {Node} head
 * @return {Node}
 */
 var copyRandomList = function(head) {
    var node = head;
    while(node){
        var nextNode = new Node(node.val,node.next);
        nextNode.pos = node.pos;
        node.next = nextNode;
        nextNode.random = null;
        node = node.next.next;

    }
    node = head;
    var copy = head.next;
    var copyBak = head.next;
    while(node){
        if(node.random)
            copy.random = node.random.next; 
        if (node){
            node = node.next.next;
            if(node)
                copy = copy.next.next;
        }
        if(!node)
            break;
        if(!copy)
            break;
            
    }
    node = head;
    var copy = head.next;
    var copyBak = head.next;

    while(node){        
        node.next = copy.next;
        if(copy.next)
            copy.next = copy.next.next;
        copy = copy.next;
        if(!node)
            break;
        if(!node.next)
            break;
        node = node.next;
        if(!node)
        break;
    if(!copy)
        break;
    }

    var result = [];
    copy = copyBak;
    while(copy){
        var obj = new Array(2);
        obj.fill(null);
        obj[0] = (copy.val);
        if(copy.random)
            obj[1]=(copy.random.pos);
        
        result.push(obj);
        copy = copy.next;
        if(!node)
        break;
    if(!copy)
        break;
    }
    return result;
};
function makeList(nodes){
    var nodeArray = new Array(nodes.length);

    for(var i=0;i<nodes.length;i++){
        nodeArray[i] = new Node(nodes[i][0]);
        nodeArray[i].pos = i;
        nodeArray[i].next = null;
        nodeArray[i].random = null;
    }
    for(var i=0; i<nodes.length;i++){
        nodeArray[i].next = nodeArray[i+1];
        nodeArray[i].random = nodeArray[nodes[i][1]];
    }
    return copyRandomList(nodeArray[0]);
}
console.log(makeList(
    [[7,null],[13,0],[11,4],[10,2],[1,0]]
));