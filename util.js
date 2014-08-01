

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