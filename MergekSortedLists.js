/**
 * https://leetcode.com/problems/merge-k-sorted-lists/
 * 
 * Merge k Sorted Lists
 * You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

Merge all the linked-lists into one sorted linked-list and return it.

 

Example 1:

Input: lists = [[1,4,5],[1,3,4],[2,6]]
Output: [1,1,2,3,4,4,5,6]
Explanation: The linked-lists are:
[
  1->4->5,
  1->3->4,
  2->6
]
merging them into one sorted list:
1->1->2->3->4->4->5->6
Example 2:

Input: lists = []
Output: []
Example 3:

Input: lists = [[]]
Output: []
 

Constraints:

k == lists.length
0 <= k <= 10^4
0 <= lists[i].length <= 500
-10^4 <= lists[i][j] <= 10^4
lists[i] is sorted in ascending order.
The sum of lists[i].length won't exceed 10^4.
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

  function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
 }
 
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
 var mergeKLists = function(lists) {
    var pointers = new Array;
    for(var i=0; i<lists.length;i++){
        pointers.push(lists[i]);
    }
    
    
    var head;
    var node;
    while(true){
        var min = Infinity;
        var minPos = -1;
        for(var i=0; i<lists.length;i++){
            if(!pointers[i])
                continue;
            /*if(pointers[i]>=lists[i].length)
                continue;*/
            if(pointers[i].val<min){
                min = pointers[i].val;
                minPos = i;
            }
        }
        if(min === Infinity)
            break;
        if(!head){
            head = pointers[minPos];
            node = head;
        }
        else{
            head.next = pointers[minPos];
            head = head.next;
        }
        
        pointers[minPos] = pointers[minPos].next;
    }
    return node;
};
var makelists = function(lists){
    var plists = new Array;
    for(var i=0;i<lists.length;i++){
        var list = lists[i];
        head = new ListNode(list[0])
        plists.push(head);
        for(var j=1;j<list.length; j++){
            head.next = new ListNode(list[j]);
            head = head.next;
        }
    }
    return mergeKLists(plists);
}
console.log(makelists(
    [[1,4,5],[1,3,4],[2,6]]

))