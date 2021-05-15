/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
 var isLongPressedName = function(name, typed) {
     var j=0;
    for(var i=0;i<name.length;i++){
        if(name[i] != typed[j]){
            return false;
        }
        if(i <name.length-1 && name[i+1] != name[i]){
            var curr = name[i]
            while(j<typed.length-1 && typed[j+1]===typed[j]){
                j++;
            }
        }
        j++;
        
    }
    while(j<typed.length){
        if(typed[j]!=typed[j-1])
            return false;
        j++;
    }
    return true;
};
console.log(isLongPressedName(
    "vtkgn",
    "vttkgnn"
))