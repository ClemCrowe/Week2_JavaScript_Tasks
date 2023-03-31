// ...While Loops...
//      A while loop loops through a block of code as long as the condition specified evaluates to true. 
//      For example, I used a while loop in loop-task3.js as shown bellow.
let counter = 0;

while(counter<10) {
    console.log(counter)
    counter++
}
//      The counter runs up to 9, because the counter variable is run through the code, displaying the value then
//      adding a value each time until it hits the tenth value, which is 9, causing the while
//      statment to become false and stopping the code from looping.

//      Pros: It will repeat as many times as necesarry to achive the goal. Unlike for loops, they are uselful when the
//      number of times needed to loop is unknown.
//      Cons: The loop will never exit if the condition in the while statement is always True. This can mean the loop 
//      could run indefinitely. 



// ...For Loops...
//      A for loop loops through a block of code until the counter reaches a specified number.
//      For example, in loop-task2.js, I used a for loop as seen bellow.
for(let i = 0; i < 6; i++) {
    let rdmNo = Math.floor(Math.random()*50);
    console.log(rdmNo);
    }
//      The code was used to generate a series of random numbers between 0-50, but run through 6 times in the console.log.
//      "I" was given a value of zero, which increased by 1 each time a new number was logged until "I" became greater than 6,
//      and because it was a for loop, it had reached the specified number, and the loop stopped.

//      Pros: It's a very flexible type of loop. It can be run backwards, on only a specific element or series elements in
//      an array. It is also alot faster than other loops.
//      cons: For loops can sometimes make code harder to read and understand, especially if they are nested or contain 
//      complex conditions.




// ...Do...While Loops...
//      Do...While loops always loop through a block of code once even if the condition fails; then the condition is evaluated.
//      If the condition is true, the statement is repeated as long as the specified condition is true.
//      An example of a Do...while loop can be seen bellow.
let text = "";
let i = 0;
do {
  text += i + "<br>";
  i++;
}
while (i < 5);
//      This code is also used to generate a series of numbers from 0-4. Again, I is given a value of 0 and icreases by one
//      through each pass of the loop, until it reaches the 5th value, which is 4, where it stops because the
//      condition is no longer true.

//      Pros: It guarantees that the loop will run at least once even if the condition fails.
//      Cons: Much like regular while loops, The loop will never exit if the condition in the while statement is always True.
//      This can mean the loop could run indefinitely and crash the website.
