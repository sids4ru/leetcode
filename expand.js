/**
 * @param {string} s
 * @return {string[]}
 */
function TreeNode(val){
	this.val = val;
	this.nodes = [];
}
function insert(arr,root){
	if(root.nodes.length === 0){
		for(var i=0; i<arr.length; i++){
			root.nodes.push(new TreeNode(arr[i]));
		}
	}
	else{
		for(var i=0; i<root.nodes.length;i++){
			insert(arr,root.nodes[i]);
		}
	}
}
function makeString(root,str,result){
	if(root.nodes.length === 0){
		str.push(root.val)
		result.push(str.join(""));
		str.pop();
		return;
	}
	str.push(root.val);
	for(var i=0; i<root.nodes.length;i++){
		makeString(root.nodes[i],str,result);
	}
	str.pop();
}
var expand = function(s) {
	var root = new TreeNode("");
	for(var i=0; i<s.length;i++){
		if(s[i] === "{"){
			var chars = "";
			i++;
			while(s[i] != "}"){
				chars+=(s[i])
				i++;
			}
			chars = chars.split(",")
			chars = chars.sort(function(a,b){return a.charCodeAt() - b.charCodeAt()});
			insert(chars,root);
		}
		else insert([s[i]],root);
	}
	var result = [];
	makeString(root,[],result);
	return result;
};

console.log(expand(
"{a,b}{z,x,y}"
))

console.log(
["ax","ay","az","bx","by","bz"])

















