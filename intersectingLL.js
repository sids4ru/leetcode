//Find intersection of linked lists, the list may contain loop, in this case throw error
// Asked in BP online assessment 

var Node = function (val) {
    this.val = val;
    this.next = null;
    this.loop = false;
}
let map = {};
const readInput = (line) => {
    line = line.replace(/ /g, '');
    if (line.search("->") > 0) {
        makeLink(line);
    }
    else {
        checkResults(line)
    }
}
const checkResults = (line) => {
    line = line.split(",");
    let tMap = {}
    let success = false;
    for (let i = 0; i < line.length; i++) {
        let curr = line[i];
        if (traverse(curr, tMap)) {
            success = true;
        }
    }
    console.log(success ? "True" : "False");
}
let error = false;
const traverse = (val, tMap) => {
    let l = map[val];
    let success = false;
    while (l) {
        if (!tMap[l.val]) {
            tMap[l.val] = true;
            l = l.next;
            if (l && l.val === val) {
                error = true
                break;
            }
        }
        else {
            if (!success)
                success = true;
            else
                break;
        }
    }
    return success;
}
const makeLink = (line) => {

    line = line.split("->")
    let a = new Node(line[0]);
    let b = new Node(line[1]);
    if (!map[line[0]])
        map[line[0]] = a
    else
        a = map[line[0]]
    if (!map[line[1]])
        map[line[1]] = b
    else
        b = map[line[1]];
    a.next = b;
}
let processLines = (lines) => {
    for (let i = 0; i < lines.length; i++) {
        readInput(lines[i]);
    }
}
// Sample : 
let lines = ["a -> b", "r -> s", "b -> c", "x -> c", "q -> r", "y -> x", "w -> z", "a, q, w", "a, c, r", "y, z, a, r", "a, w"]
lines = ["X -> Y", "Y -> X", "A -> B", "B -> C", "X, A"]
alert(processLines(lines));
