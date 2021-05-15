/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    var min = new Array(prices.length);
    var max = new Array(prices.length);
    min[0] = prices[0]
    for(var i=1; i<prices.length; i++){
        min[i] = Math.min(min[i-1],prices[i]);
    }
    max[prices.length-1] = prices[prices.length-1];
    for(i=prices.length-2; i>=0;i--){
        max[i] = Math.max(max[i+1], prices[i]);
    }
    var maxp = 0;
    for(var i=0; i<prices.length;i++){
        maxp = Math.max(maxp, max[i] - min[i])
    }
    return maxp;
};
console.log(maxProfit(
    [7,6,4,3,1]
))