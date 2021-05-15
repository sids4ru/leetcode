/**
 * @param {string} time
 * @return {string}
 */
 var nextClosestTime = function(time) {
    if(time === "00:00")
        return time;
    var patches = time.split(":")
    var hour = parseInt( patches[0]);
    var min = parseInt (patches[1]);
    digits = patches[0].split("") + patches[1].split("");
    var map = {};
    for(var i=0; i<digits.length;i++){
        map[digits[i]] = 1;
    }
    while(true){
        min++;
        if(min >= 60)
        {
            hour++;
            min = 0;
        }
        if(hour>=24){
            hour = 1;
            min = 0;
        }
        
        if(checkDigits(hour,min,map)){
            return makeTIme(hour,min);
        }
    }
    
};
function makeTIme(hour,min){
    var h = ""
    if(hour === 0)
        h = "00"
    while(hour>0){
        h+=hour%10;
        hour = Math.floor(hour/10);
    } 
    if(h.length === 1)
        h+=("0")
    h = h.split("").reverse().join("");
    
    var m = "";
    if(min === 0)
        m = "00"
    while(min>0){
        m+=min%10;
        min = Math.floor(min/10)
    }
    if(m.length === 1)
        m+=("0");
    m = m.split("").reverse().join("");
    return h+":"+m;
}
function checkDigits(hour,min,map){
    var digits = "";
    if(Math.floor(hour/10) === 0)
        digits+="0";
    if(Math.floor(min/10) === 0)
        digits+="0"
    while(hour>0){
        digits+=hour%10;
        hour = Math.floor(hour/10);
    }
    while(min>0){
        digits+=min%10;
        min = Math.floor(min/10)
    }
    for(var i=0;i<digits.length;i++){
        if(!map[digits[i]])
            return false;
    }
    return true;
}

console.log(nextClosestTime(
    "00:00"
));
