/**
 * @param {number[]} arr
 * @return {number[]}
 */
 var arrayRankTransform = function(arr) {
     if(arr.length === 0)
        return [];
    var map = {};
    for(var i=0; i<arr.length;i++){
        if(!map[arr[i]]) map[arr[i]] = [];
        map[arr[i]].push(i); 
    }
    arr.sort(function(a,b){return a-b});
    var res = new Array(arr.length);
    res.fill(Infinity);
    var rank = 1;
    var rankval = arr[0];
    
    var poss = map[arr[0]];
    setAtPos(res,poss,1);
    for(var i=1;i<arr.length;i++){
        if(rankval != arr[i]){
            var poss = map[arr[i]];
            setAtPos(res,poss,++rank);
            rankval = arr[i];
        }
    }
    return res;
};
function setAtPos(res,poss,rank){
    for(var i=0;i<poss.length;i++){
        res[poss[i]] = rank;
    }
}
console.log(arrayRankTransform(
    
    [37,12,28,9,100,56,80,5,12]
))