/**
 * @param {number} n
 * @return {string[]}

 Given an integer n, return a string array answer (1-indexed) where:

    answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
    answer[i] == "Fizz" if i is divisible by 3.
    answer[i] == "Buzz" if i is divisible by 5.
    answer[i] == i (as a string) if none of the above conditions are true.

 */
var fizzBuzz = function(n) {
    let result = [];

    let i = 1;
    while (i <= n)
    {
        let string = ''
        if (i%3 == 0 && i%5 == 0)
            string += "FizzBuzz"
        else if (i%3 == 0)
            string += "Fizz"
        else if (i%5 == 0)
            string += "Buzz"
        else 
            string += i
        i++;
        result.push(string)
    }
    return result
};