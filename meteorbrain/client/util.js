

var _base64Alphabet = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-";
function base10_to_base64(num) {
    var base = _base64Alphabet.length;
    var str = "", r;
    while (num) {
        r = num % base
        num -= r;
        num /= base;
        str = _base64Alphabet.charAt(r) + str;
    }
    return str;
}

function base64_to_base10(str) {
    var base = _base64Alphabet.length;
    var num = 0, r;
    while (str.length) {
        r = _base64Alphabet.indexOf(str.charAt(0));
        str = str.substr(1);
        num *= base;
        num += r;
    }
    return num;
}

// http://stackoverflow.com/questions/4833651/javascript-array-sort-and-unique
function sort_unique(arr) {
    arr = arr.sort(function (a, b) { return a*1 - b*1; });
    var ret = [arr[0]];
    for (var i = 1; i < arr.length; i++) { // start loop at 1 as element 0 can never be a duplicate
        if (arr[i-1] !== arr[i]) {
            ret.push(arr[i]);
        }
    }
    return ret;
}
