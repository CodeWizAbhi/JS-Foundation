let str = prompt("Enter a String: ");
function isPalindrome(str) {
    str = str.toLowerCase(); 
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return false;
        }
    }
    return true;
}
console.log(isPalindrome(str));
