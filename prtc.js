/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

const transactions = [{
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	},
{
		id: 2,
		timestamp: 165607,
		price: 50,
		category: 'idk',
		itemName: 'pasta',
	}]


function TotalSPendByCategory(transactions) {

let output = []

for ( let index = 0 ; index<transactions.length; index++){
let output1 = []
const eliment = transactions[index];
const catagoty = eliment.category;
const spent = eliment.price;

output1['category'] = catagoty
output1['spent'] = spent
output.push(output1)
}
return output
  
}


console.log(TotalSPendByCategory(transactions))
