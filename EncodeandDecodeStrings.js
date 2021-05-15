/**
 * 
 * https://leetcode.com/problems/encode-and-decode-strings/
 * Encode and Decode Strings
 * Design an algorithm to encode a list of strings to a string. The encoded string is then sent over the network and is decoded back to the original list of strings.

Machine 1 (sender) has the function:

string encode(vector<string> strs) {
  // ... your code
  return encoded_string;
}
Machine 2 (receiver) has the function:
vector<string> decode(string s) {
  //... your code
  return strs;
}
So Machine 1 does:

string encoded_string = encode(strs);
and Machine 2 does:

vector<string> strs2 = decode(encoded_string);
strs2 in Machine 2 should be the same as strs in Machine 1.

Implement the encode and decode methods.

 

Example 1:

Input: dummy_input = ["Hello","World"]
Output: ["Hello","World"]
Explanation:
Machine 1:
Codec encoder = new Codec();
String msg = encoder.encode(strs);
Machine 1 ---msg---> Machine 2

Machine 2:
Codec decoder = new Codec();
String[] strs = decoder.decode(msg);
Example 2:

Input: dummy_input = [""]
Output: [""]
 

Constraints:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] contains any possible characters out of 256 valid ASCII characters.
 

Follow up:

Could you write a generalized algorithm to work on any possible characters?
Could you solve the problem without using any serialize methods (such as eval)?
 * 
 */
/**
 * Encodes a list of strings to a single string.
 *
 * @param {string[]} strs
 * @return {string}
 */
 var encode = function(strs) {
    var result = "";
    for(var i=0;i<strs.length;i++){
        var str = strs[i];
        var length = str.length;
        var chars = "";
        while(length>0){
            chars += length%10;
            length = Math.trunc(length/10);
        }
        while(chars.length<3){
            chars+= "0";
        }
        chars = chars.split("").reverse().join("");
        result+=chars;
        result+=str;
    }
    return result;
};

/**
 * Decodes a single string to a list of strings.
 *
 * @param {string} s
 * @return {string[]}
 */
var decode = function(s) {
    var strs = [];
    var chars = 0;
    var pos = 0;
    while(pos<s.length){
        var l = s.substring(pos,pos+3);
        var length = parseInt(l);
        pos += 3
        var str = s.substring(pos, pos+length);
        strs.push (str);
        pos = pos+length;
    }
    return strs;
};
var encodedStr = encode(
    ["C#","&","~Xp|F","R4QBf9g=_"]
);
console.log(decode(
    encodedStr
));
/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */