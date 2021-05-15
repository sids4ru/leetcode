/**
 * @param {string} s
 * @return {string}
 */
 var lastSubstring = function(s) {
    let string = s;
    let max = s.charAt(0);
    
    for (let i = 1; i < s.length; i++) {
        if (s.charAt(i) > max) {
            string = s.substring(i, s.length);
            max = s.charAt(i);  //if char > max, its concluded that substring is max
        } else if (s.charAt(i) === max) {
            let sub = s.substring(i, s.length);
            //incase substring is 
            //bigger than string update ony in 
            //case of char being same as max
            string = sub > string ? sub : string;
        }
    }
    return string;
}
console.log(lastSubstring(
    //"abab"
    "leetcode"
    ));