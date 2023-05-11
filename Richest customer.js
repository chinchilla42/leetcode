/**
 * @param {number[][]} accounts
 * @return {number}

 You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.

A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.

 

Example 1:

Input: accounts = [[1,2,3],[3,2,1]]
Output: 6
Explanation:
1st customer has wealth = 1 + 2 + 3 = 6
2nd customer has wealth = 3 + 2 + 1 = 6
Both customers are considered the richest with a wealth of 6 each, so return 6.

Example 2:

Input: accounts = [[1,5],[7,3],[3,5]]
Output: 10
Explanation: 
1st customer has wealth = 6
2nd customer has wealth = 10 
3rd customer has wealth = 8
The 2nd customer is the richest with a wealth of 10.

Example 3:

Input: accounts = [[2,8,7],[7,1,3],[1,9,5]]
Output: 17

 

Constraints:

    m == accounts.length
    n == accounts[i].length
    1 <= m, n <= 50
    1 <= accounts[i][j] <= 100


 */

/* const sum = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};

var maximumWealth = function(accounts) 
{
    let wealthy_customer = 0;    
    for (let balance of accounts) 
    {
         const curr_wealth = sum(balance);
        wealthy_customer = Math.max(wealthy_customer, curr_wealth);    
    }
    return wealthy_customer;
}*/

//var maximumWealth = ac => ac.reduce((a, b) => Math.max(a, b.reduce((a, b) => a + b)), 0)

var maximumWealth = function(accounts) {
    let richestCustomer = 0; //creating a local variable to store a max wealth 

    for(let i = 0; i < accounts.length; i++) {
        let wealth = 0; //created a variable to store the sum of wealth in current account

        for(let j = 0; j < accounts[i].length; j++) {
            wealth += accounts[i][j]; // calculating and storing the wealth of a current account in richest account
        }

        richestCustomer = Math.max( richestCustomer, wealth); 
        // checking whether the current account is bigger than richestCustomer account, 
        //if yes then update the richestCustomer account, else continuing.
    }
        return richestCustomer;
};