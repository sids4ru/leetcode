/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
function Link(char){
	this.char = char;
	this.pos = -1;
	this.prev = null;
	this.next = null;
	this.count = 0;
}

function insertAtEnd(node,tail){
	node.prev = tail.prev;
	node.next = tail;
	var prev = tail.prev;
	prev.next = node;
	tail.prev = node;
}
function insert(head,tail,node){
	var run = head.next;
	while (run!=tail){
		if(run.pos>=node.pos){
			var prev = run.prev;
			node.prev = prev;
			node.next = run;
			prev.next = node;
			run.prev = node;
			break;
		}
		else run = run.next;
	}
	if(run === tail){
		insertAtEnd(node,tail);
	}
	
}
function remove(node){
	var prev = node.prev;
	var next = node.next;
	prev.next = next;
	next.prev = prev;
	node.next = node.prev = null;
}
var minWindow = function(s, t) {
	if(s===t)
		return s;
	var map = {};
   for(var i=0; i<t.length;i++){
   		var char = t[i];
   		var node = new Link(char);
   		if(!map[char]) map[char] = node;


   } 
	var head = new Link("");
	var tail = new Link("");
	head.next = tail;
	tail.prev = head;
	var minDiff = Infinity;
	min = -1;
	max = -1;
	
	for(var i=0; i<s.length;i++){
		var char = s[i]
		if(map[char]){
			var node = map[char];
			if(node.pos === -1){
				node.pos = i;
				insert(head,tail,node);
				var diff = tail.prev.pos - head.next.pos;
				continue;
			}
			remove(node);
			node.pos = i;
			insert(head,tail,node);
			var diff = tail.prev.pos - head.next.pos;
			if(diff < minDiff){
				minDiff = diff;
				min = head.next.pos;
				max = tail.prev.pos;
			}
			
		}
	}

	var diff = tail.prev.pos - head.next.pos;
	if(diff < minDiff){
			minDiff = diff;
			min = head.next.pos;
			max = tail.prev.pos;
	}
	if(minDiff === Infinity)
		return "";
	var res = "";
	for(var i=min; i<=max;i++ )	
	{
		res+=s[i];
	}
	return res;
};

console.log(minWindow(
"a",
"aa"
))
