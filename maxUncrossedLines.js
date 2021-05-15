/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
/* var maxUncrossedLines = function(A, B) {
    
    if(A.length > B.length)
        [A,B] = [B,A]
    var DP = new Array(A.length); 
    return makeLines(0,0,-1,B,A);
};
function makeLines(count, Apos, BPos,B, A){
    if(Apos >= A.length)
        return count;
    
    var maxcount = 0

    var posB = B.indexOf(A[Apos],BPos+1);
    if(posB>=0 && posB > BPos)
        maxcount = Math.max(makeLines(count+1,Apos+1,posB,B,A),maxcount)
    maxcount = Math.max(makeLines(count,Apos+1,BPos,B,A),maxcount);
    
    return maxcount;
}*/


 var maxUncrossedLines = function(A, B) {
    
    if(A.length > B.length)
        [A,B] = [B,A]
    var DP = new Array(A.length); 
    for(var i=0; i<A.length;i++){
        var cols = new Array(B.length+1);
        cols.fill(-Infinity);
        DP[i] = cols;
    }
    //DP.fill(-Infinity);
    return makeLines(0,-1,B,A,DP);
};
function makeLines(Apos, BPos,B, A,DP){
    if(Apos >= A.length)
        return 0;
    
    if(DP[Apos][BPos+1] > -Infinity)
        return DP[Apos][BPos+1];
    var maxcount = 0

    var posB = B.indexOf(A[Apos],BPos+1);
    if(posB>=0 && posB > BPos)
        maxcount = Math.max(makeLines(Apos+1,posB,B,A,DP)+1,maxcount)
    maxcount = Math.max(makeLines(Apos+1,BPos,B,A,DP),maxcount);
    
    DP[Apos][BPos+1] = maxcount;
    return maxcount;
}
console.log(maxUncrossedLines(
   /* [2,1,2]
,[2,2,2]*/
   /* [2,5,1,2,5],
    [10,5,2,1,5,2]*/
    /*[1,3,7,1,7,5]
    ,[1,9,2,5,1]*/
    [1,1,2,1,2]
,[1,3,2,3,1]
))