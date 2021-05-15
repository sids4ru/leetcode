
/*var maxProduct = function(nums) {
    var max = -Infinity;
    var dp = [];    
    
    for(var i=nums.length-1; i>=0;i--)
    {
        var product = calcProduct(nums,i,dp); 
        
        if(max < product){
        max = product;  
        }
        //dp[i] = product;
    }
    return max;
}
function calcProduct(nums,start,dp){

    if(nums.length === 1)
        return nums[0];
    
    if(start === nums.length-1)
        return nums[start];
    var t1=start,t2=start,negPos=-1;
    var product = 1;
    var maxProd = -1*Infinity;
    while(true){
        if(t2>=nums.length)
            break;
        if(dp[t2]){
            prod = product*dp[t2];
            if(prod > maxProd)
                return prod;
        }
        var prod = product * nums[t2]
        var prod = product * nums[t2];
        if(nums[t2] === 0){
            product = 1;
            if(prod > maxProd)
                maxProd = prod;
            t1=t2;
            
        }
        else if(nums[t2] < 0){
            var success = false;
            if(negPos != t2){
                for(var i=t2+1;i<nums.length;i++){
                    if(nums[i] === 0)
                    break;
                    if(nums[i] < 0){
                        negPos = i;
                        success = true;
                        break;
                    }
                }
            }else success = true;
            if(success){
                
                product = prod;
                if(maxProd < product)
                    maxProd = product;
            }
            else{
                product = 1;
                t1=t2;
            }
        }
        else{
            product = prod;
            if(maxProd < product)
                maxProd = product;
        }
        t2++;
    }
    return maxProd;
}*/
function maxProduct(nums) {
    if (nums.length == 0) return 0;

    var max_so_far = nums[0];
    var min_so_far = nums[0];
    var result = max_so_far;

    for (var i = 1; i < nums.length; i++) {
        var curr = nums[i];
        var temp_max = Math.max(curr, Math.max(max_so_far * curr, min_so_far * curr));
        min_so_far = Math.min(curr, Math.min(max_so_far * curr, min_so_far * curr));

        max_so_far = temp_max;

        result = Math.max(max_so_far, result);
    }

    return result;
}
maxProduct([2,3,-2,4]);

