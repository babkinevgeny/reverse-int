module.exports = function reverse (n) {
    const arr = n.toString().split('');

    if ( n < 0) {
        arr.shift();
    }

    const reversedNumber = +arr.reverse().join('');

    return reversedNumber;
}
