/**
 * https://leetcode.com/problems/lru-cache/
 * 
 * 146. LRU Cache
Medium

8240

337

Add to List

Share
Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.

Implement the LRUCache class:

LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
int get(int key) Return the value of the key if the key exists, otherwise return -1.
void put(int key, int value) Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.
Follow up:
Could you do get and put in O(1) time complexity?

 

Example 1:

Input
["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
[[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
Output
[null, null, null, 1, null, -1, null, -1, 3, 4]

Explanation
LRUCache lRUCache = new LRUCache(2);
lRUCache.put(1, 1); // cache is {1=1}
lRUCache.put(2, 2); // cache is {1=1, 2=2}
lRUCache.get(1);    // return 1
lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
lRUCache.get(2);    // returns -1 (not found)
lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
lRUCache.get(1);    // return -1 (not found)
lRUCache.get(3);    // return 3
lRUCache.get(4);    // return 4
 

Constraints:

1 <= capacity <= 3000
0 <= key <= 3000
0 <= value <= 104
At most 3 * 104 calls will be made to get and put.
 * 
 * 
 * 
 */
/**
 * @param {number} capacity
 */
function LinkNode(key,value){
    this.next = null;
    this.prev = null;
    this.val = value;
    this.key = key;
}

 var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.size = 0;
    this.map = {};
    this.head = new LinkNode();
    this.tail = new LinkNode();
    this.head.next = this.tail;
    this.tail.prev = this.head;

};
function insertFront(node,head){
    node.next = head.next;
    node.prev = head;
    head.next.prev = node;
    head.next = node;
}
function bringToFront(node,head){
    node.prev.next = node.next;
    node.next.prev = node.prev;
    insertFront(node,head);
}
/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if(this.map[key]){
        bringToFront(this.map[key],this.head);
        return this.map[key].val;
    }
    else return -1;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {

    if(this.map[key]){
        bringToFront(this.map[key],this.head);
        this.map[key].val = value;
    }
    else {
        var node = new LinkNode(key, value);
        this.map[key] = node;
        if(this.size < this.capacity){    
            this.map[key] = node;
            insertFront(node,this.head);
            this.size++;
        }
        else{
            var last = this.tail.prev;
            this.tail.prev = last.prev;
            this.tail.prev.next = this.tail;
            this.map[last.key] = undefined;
            insertFront(node,this.head);
        }
    }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
function makeLRU(commands,values){
    var LRU;
    var result = [];
    for(var i=0; i<commands.length; i++){
        var command = commands[i];
        var value = values[i];
        if(command === "LRUCache"){
            LRU = new LRUCache(value[0]);
            result.push(null)
        }
        else if(command === "put")
        {
            LRU.put(value[0],value[1]);
            result.push(null);
        }
        else if(command === "get"){
            result.push(LRU.get(value[0]))
        }
    }
    return result;
}

console.log(makeLRU(
    ["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"],
    [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
))