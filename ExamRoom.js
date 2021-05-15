/**
 * @param {number} N
 */
 var ExamRoom = function(N) {
    this.N = N;
    this.arr = []
};

/*function getMaxDist(left,right,arr){
    if(right-left === 1)
        return Math.floor((arr[left] + arr[right])/2);
    var mid = Math.floor((left+right)/2);
    if(arr[mid] - arr[left] >= arr[right] - arr[mid]){
        return getMaxDist(left,mid,arr);
    }
    else{
        return getMaxDist(mid,right,arr);
    }
}*/
function getMaxDist(arr,N){
    var left = 0; 
    var max = -Infinity;
    var maxleft = 0;
    var maxright = 0;
    for(var right = 1 ; right < arr.length;right++){
        var diff = Math.floor((arr[right] - arr[left])/2);
        if(diff > max){
            max = diff;
            maxleft = arr[left];
            maxright = arr[right];
        }
        left = right;
    }
    if(arr[0]!=0 && arr[arr.length-1]!=N-1){
        var diffN = N-1-arr[arr.length-1];
        var diff0 = arr[0];
        if(diff0>=diffN && diff0>=max){
            return 0
        }
        else if(diffN>diff0 && diffN>max){
            return N-1;
        }
    }
    if(arr[arr.length-1] != N-1){
        var diffN = N-1-arr[arr.length-1];
        if(diffN>max)
            return N-1;
    }
        if(arr[0]!=0){
        var diff0 = arr[0];
        if(diff0>=max)
            return 0;
    }

    return Math.floor((maxright + maxleft)/2);
}

/**
 * @return {number}
 */
ExamRoom.prototype.seat = function() {
    if(this.arr.length === 0){
        //this.arr.push(-Infinity);
        this.arr.push(0);
        //this.arr.push(Infinity);
        
        return 0;
    }
    
    /*if(this.arr.length === 3){
        this.arr.push(this.N-1);
        this.arr.sort(function(a,b){return a-b});
        return this.N-1;
    }*/
    
    var dist = getMaxDist(this.arr,this.N);
    this.arr.push(dist);
        
    this.arr.sort(function(a,b){return a-b});
    return dist;

};

/** 
 * @param {number} p
 * @return {void}
 */
ExamRoom.prototype.leave = function(p) {
    var index = this.arr.findIndex(element => element === p);
    [this.arr[index],this.arr[this.arr.length-1]] = [this.arr[this.arr.length-1],this.arr[index]];
    this.arr.pop();
    this.arr.sort(function(a,b){return a-b});
};

/** 
 * Your ExamRoom object will be instantiated and called as such:
 * var obj = new ExamRoom(N)
 * var param_1 = obj.seat()
 * obj.leave(p)
 */
function run(arr,vals){
    var room = null;
    var result = [];
    for(i=0; i<arr.length;i++){
        if(arr[i] === "ExamRoom"){
            room = new ExamRoom(vals[i][0])
            result.push(null);
        }
        else if(arr[i] === "seat"){
            result.push(room.seat());
        }
        else if(arr[i] === "leave"){
            room.leave(vals[i][0]);
            result.push(null);
        }

    }
    return result;
}
console.log(run(
    //["ExamRoom","seat","seat","seat","leave","leave","seat","seat","seat","seat","seat","seat","seat","seat","seat","leave"]
    //,[[10],[],[],[],[0],[4],[],[],[],[],[],[],[],[],[],[0]]
    //["ExamRoom","seat","seat","seat","leave","leave","seat","seat","seat","seat","seat","seat","seat"]
    //,[[8],[],[],[],[0],[7],[],[],[],[],[],[],[]]
    ["ExamRoom","seat","seat","seat","leave","leave","seat","seat","seat","seat","seat","seat","seat","leave","leave","seat","seat","leave","seat","leave","seat","leave","seat","leave","leave","seat","seat","leave","leave"]
    ,[[8],[],[],[],[0],[7],[],[],[],[],[],[],[],[0],[7],[],[],[7],[],[1],[],[3],[],[0],[5],[],[],[0],[6]]

))