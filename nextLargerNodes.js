/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var nextLargerNodes = function(head) {
    if(head === null)
    	return;
    var arr = [];
    var t = head;
    while(t){
    	arr.push(t.val);
    	t = t.next;
    }
    var gr = new Array(arr.length);
    gr.fill(0);
    for(var i=0; i<arr.length;i++){
    	var max = arr[i]
    	for(j=i+1;j<arr.length;j++){
    		if(arr[j] > max)
    			max = arr[j]
    	}
    	if(max > arr[i])
	    	gr[i] = max;
    }
    /*for(var i=arr.length-2; i>=0; i--){
    	if(gr[i+1] > arr[i+1])
    		gr[i] = gr[i+1];
    	else
    		gr[i] = arr[i+1];
    }*/
    return gr;
};

console.log(nextLargerNodes(
[2,7,4,3,5]

))
