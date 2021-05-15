function Link(key,val){
    this.key = key;
    this.val = val;

    this.next = null;
    this.prev = null;

}
function setInFront(link, head){
    var prev = link.prev;
    var next = link.next;
    prev.next = next;
    next.prev = prev;
    link.next = head.next;
    link.prev = head;
    head.next.prev = link;
    head.next = link;
}
function insertFront(link, head){
    link.prev = head;
    link.next = head.next;
    head.next.prev = link;
    head.next = link;
}
function removeLast(tail){
    var last = tail.prev;
    tail.prev = last.prev;
    last.prev.next = tail;
}
/**
 * @param {number} capacity
 */
 var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.size = 0;
    this.map = {};
    this.head = new Link("head","head");
    this.tail = new Link("tail","head");
    this.head.next = this.tail;
    this.tail.prev = this.head;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if(!this.map[key])
        return -1;
    
    setInFront(this.map[key],this.head,this.tail);
    return this.map[key].val;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if(this.map[key]){
        this.map[key].val = value;
        setInFront(this.map[key],this.head,this.tail);
    }
    else if(this.size<this.capacity){
        var link = new Link(key,value);
        this.map[key] = link;
        insertFront(link,this.head);
        this.size++;
    }
    else{
        var lastKey = this.tail.prev.key;
        this.map[lastKey] = undefined;
        removeLast(this.tail);
        var link = new Link(key,value);
        this.map[key] = link;
        insertFront(link,this.head);
    }

};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
function makeInput(arr, vals){
    var lru = null;
    var res = [];
    for(var i=0; i<arr.length; i++){
        if(arr[i] === "LRUCache"){
            lru = new LRUCache(vals[i][0]);
            res.push(null)
        }
        else if(arr[i] === "put"){
            lru.put(vals[i][0],vals[i][1])
            res.push(null);
        }
        else if(arr[i] === "get"){
            res.push(lru.get(vals[i][0]))
        }
    }
    return res;
}
console.log(makeInput(
    /*["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"],
[[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]*/

/*["LRUCache","get","put","get","put","put","get","get"],
[[2],[2],[2,6],[1],[1,5],[1,2],[1],[2]]*/
/*["LRUCache","put","put","get","put","get","put","get","get","get"],
[[2],[1,1],[2,2],[1],[3,3],[2],[4,4],[1],[3],[4]]*/
["LRUCache","put","put","put","put","get","get"],
[[2],[2,1],[1,1],[2,3],[4,1],[1],[2]]
));

console.log([null,null,null,null,null,-1,3])
