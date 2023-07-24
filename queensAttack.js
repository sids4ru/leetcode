//Hackerrank Qweens attach problem solution 
// https://www.hackerrank.com/challenges/queens-attack-2/problem?isFullScreen=true
//You will be given a square chess board with one queen and a number of obstacles placed on it. Determine how many squares the queen can attack.

//A queen is standing on an  chessboard. The chess board's rows are numbered from  to , going from bottom to top. Its columns are numbered from  to , going from left to right. Each square is referenced by a tuple, , describing the row, , and column, , where the square is located.

//The queen is standing at position . In a single move, she can attack any square in any of the eight directions (left, right, up, down, and the four diagonals). In the diagram below, the green circles denote all the cells the queen can attack from :


function queensAttack(n, k, r_q, c_q, obstacles) {
    let map = {};
    for (let i = 0; i < obstacles.length; i++) {
        let curr = obstacles[i]
        let string = "" + (curr[0] - 1) + "," + (curr[1] - 1);
        map[string] = true;
    }
    return traverse(n, r_q, c_q, map);
}
const dirs = [[0, 1], [0, -1], [-1, 0], [1, 0], [-1, -1], [1, 1], [-1, 1], [1, -1]]
const traverse = (n, r_q, c_q, map) => {
    let count = 0;
    for (let i = 0; i < dirs.length; i++) {
        const dir = dirs[i];
        let row = r_q - 1;
        let col = c_q - 1;
        while (true) {
            row += dir[0];
            col += dir[1];
            if (row < 0 || row >= n || col < 0 || col >= n)
                break;
            let string = "" + row + "," + col;
            if (map[string])
                break;
            count++;
        }
    }
    return count;
}
// 100000 0
// 4187 5068
alert(queensAttack(100000, 3, 4187, 5068, [[5, 5], [4, 2], [2, 3]]))
