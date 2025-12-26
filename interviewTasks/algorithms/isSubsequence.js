// A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of
// the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence
// of "abcde" while "aec" is not).
//
//
//
// Example 1:
//
// Input: s = "abc", t = "ahbgdc"
// Output: true
// Example 2:
//
// Input: s = "axc", t = "ahbgdc"
// Output: false
//

function isSubsequence(sub, text) {
    let subP = 0

    for (let textP = 0; subP < sub.length && textP < text.length; textP++) {
        if (sub[subP] === text[textP]) {
            subP++
        }
    }

    return subP === sub.length
}

console.log(
    isSubsequence('abc', "ahbgdc")
)
console.log(
    isSubsequence("axc", "ahbgdc")
)