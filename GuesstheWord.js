/**
 * https://leetcode.com/problems/guess-the-word/
 * 
 * 843. Guess the Word
Hard

785

802

Add to List

Share
This is an interactive problem.

You are given an array of unique strings wordlist where wordlist[i] is 6 letters long, and one word in this list is chosen as secret.

You may call Master.guess(word) to guess a word. The guessed word should have type string and must be from the original list with 6 lowercase letters.

This function returns an integer type, representing the number of exact matches (value and position) of your guess to the secret word. Also, if your guess is not in the given wordlist, it will return -1 instead.

For each test case, you have exactly 10 guesses to guess the word. At the end of any number of calls, if you have made 10 or fewer calls to Master.guess and at least one of these guesses was secret, then you pass the test case.

 

Example 1:

Input: secret = "acckzz", wordlist = ["acckzz","ccbazz","eiowzz","abcczz"], numguesses = 10
Output: You guessed the secret word correctly.
Explanation:
master.guess("aaaaaa") returns -1, because "aaaaaa" is not in wordlist.
master.guess("acckzz") returns 6, because "acckzz" is secret and has all 6 matches.
master.guess("ccbazz") returns 3, because "ccbazz" has 3 matches.
master.guess("eiowzz") returns 2, because "eiowzz" has 2 matches.
master.guess("abcczz") returns 4, because "abcczz" has 4 matches.
We made 5 calls to master.guess and one of them was the secret, so we pass the test case.
Example 2:

Input: secret = "hamada", wordlist = ["hamada","khaled"], numguesses = 10
Output: You guessed the secret word correctly.
 

Constraints:

1 <= wordlist.length <= 100
wordlist[i].length == 6
wordlist[i] consist of lowercase English letters.
All the strings of wordlist are unique.
secret exists in wordlist.
numguesses == 10
 * 
 * 
 */
/**
 * // This is the master's API interface.
 * // You should not implement it, or speculate about its implementation
 * function Master() {
 *
 *     @param {string[]} wordlist
 *     @param {Master} master
 *     @return {integer}
 *     this.guess = function(word) {
 *         ...
 *     };
 * };
 */
/**
 * @param {string[]} wordlist
 * @param {Master} master
 * @return {void}
 */
 var H;
 var findSecretWord = function(wordlist, master) {
    var N = wordlist.length;
    H = new Array(N)    //NxN Heuristic array
    //initialize 
    for(var i=0; i<N;i++){
        var cols = new Array(N);
        H[i] = cols;
    }
    //create Heuristic matrix
    for (var i = 0; i < N; ++i)
        for (var j = i; j < N; ++j) {
            var match = 0;
            for (var k = 0; k < 6; ++k)
                if (wordlist[i][k] === wordlist[j][k])
                    match++;
            H[i][j] = H[j][i] = match;
        }

    var possible = [];
    var path = [];
    for (var i = 0; i < N; ++i) 
        possible.push(i);

    while (possible.length > 0) {
        var guess = solve(possible, path);
        var matches = master.guess(wordlist[guess]);
        if (matches === wordlist[0].length)
            return;
        var possible2 = [];
        for (var j in possible)
            if (H[guess][j] === matches) possible2.push(j);
        possible = possible2;
        path.push(guess);
    }

}

function solve(possible, path) {
    if (possible.length <= 2) 
        return possible[0];
    
    ansgrp = possible;
    var ansguess = -1;

    for (var guess = 0; guess < H.length; ++guess) {
        if (!path.find(element => element === guess)) {
                var groups = new Array(7);
            for (var i = 0; i < 7; ++i) 
                groups[i] = [];
            for (var j in possible)
                if (j != guess) {
                groups[H[guess][j]].push(j);
            }

            var maxgroup = groups[0];
            for (var i = 0; i < 7; ++i)
                if (groups[i].length > maxgroup.length)
                    maxgroup = groups[i];

            if (maxgroup.length < ansgrp.length) {
                ansgrp = maxgroup;
                ansguess = guess;
            }
        }
    }

    return ansguess;
}