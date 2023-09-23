/*More Guests: You just found a bigger dinner table, so now more space is 
available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your 
program informing people that you found a bigger dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array. • Use append() to add one new guest 
to the end of your list. • Print a new set of invitation messages, one for each person in your list.
 */

let guestList: Array<string> = [
    "Zia khan",
    "Jhanzaib Tayab",
    "Sarmad",
];

//exercise 16 solve
// step 1 informing people that you found a bigger dinner table.
for (let guest of guestList) {
    console.log(`Hello, ${guest}, we found a bigger dinner table`)
}

// step 2 Add a new guest to the beginning of Array.
let newGuestAtBeginning: string = "Qasim Sheikh"

guestList.unshift(newGuestAtBeginning)

//console.log(guestList)

//  Add one new guest to the middle of your array.

let newGuestInMiddle: string = "Zohaib Nazir"

let middleIndex: number = Math.floor(guestList.length/2)
guestList.splice(middleIndex, 0, newGuestInMiddle)

//console.log(guestList)

// use append() add one new guest to the end of your list.

let newGuestAtEnd: string = "Sohaib Ali"
guestList.push(newGuestAtEnd)

//console.log(guestList)

//final step  Print a new set of invitation messages, one for each person in your list.

console.log("New set of invitation messages:")
for(let guest of guestList){
    console.log(`Dear ${guest}, you are invited to dinner`)
}

