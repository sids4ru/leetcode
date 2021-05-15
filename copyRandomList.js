
  // Definition for a Node.
  function Node(val, next, random) {
     this.val = val;
     this.next = next;
     this.random = random;
  };
 

/**
 * @param {Node} head
 * @return {Node}
 */
 var copyRandomList = function(head) {
    if(head === null)
        return head;
    var curr = head;
    
    while(curr){
        var newNode = new Node(curr.val, curr.next, curr.random);
        var next = curr.next
        curr.next = newNode;
        curr = next;
    }
    var copy = head.next;
    curr = head;
    while (curr){
        if(curr.random)
            curr.next.random = curr.random.next;
        curr = curr.next.next;
    }
    curr = head;
    var copyHead = curr.next;
    while(curr){
        
        var copyNext = null
        if(copyHead.next)
            copyNext = copyHead.next.next;
        
        curr.next = curr.next.next;
        curr = curr.next;
        copyHead.next = copyNext;
        copyHead = copyHead.next;

    }
    return copy;
};
