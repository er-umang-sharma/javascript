/**
 * Coding Challenge 1:
 * 
 * Mark and John are trying to comapare their BMI (Body Mass Index), which is calculated using the formula: 
 * BMI = mass/height^2
 * mass in kg, height in m
 * 
 * 1. Store Mark's and John's mass and height in variables.
 * 2. Calculate both their BMIs.
 * 3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
 * 4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John? true")
 */

var massMark, heightMark, bmiMark, massJohn, heightJohn, bmiJohn;
var isMarkGreater;

massMark = prompt("Mark's mass:");
heightMark = prompt("Mark's height:");
massJohn = prompt("John's mass:");
heightJohn = prompt("John's height:");

bmiMark = massMark / (heightMark * heightMark);
bmiJohn = massJohn / (heightJohn * heightJohn);

console.log(bmiMark, bmiJohn);

isMarkGreater = bmiMark > bmiJohn;

console.log("Is Mark's BMI higher than John? " + isMarkGreater);

/**
 * Coding Challenge 2
 * 
 * John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 80, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.
 * 
 * 1. Calculate the average score for each team.
 * 2. Decide which team wins in average (highest score above), and pring the winner to the console. Also include the average score in the ouput.
 * 3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score).
 * 
 * 4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console.
 * 
 * 5. Like before, change the scores to generate different winners, keeping in mind there might be draws.
 * 
 */

var johnScore1, johnScore2, johnScore3, mikeScore1, mikeScore2, mikeScore3, maryScore1, maryScore2, maryScore3;

johnScore1 = 80;
johnScore2 = 120;
johnScore3 = 103;

mikeScore1 = 116;
mikeScore2 = 94;
mikeScore3 = 103;

var averageJohn = (johnScore1 + johnScore2 + johnScore3) / 3;
var averageMike = (mikeScore1 + mikeScore2 + mikeScore3) / 3;

if (averageJohn > averageMike) {
    console.log("John's team won the game.");
} else if (averageJohn < averageMike) {
    console.log("Mike's team won the game.");
} else {
    console.log("Both John's team and Mike's team had the same score.");
}

maryScore1 = 97;
maryScore2 = 134;
maryScore3 = 105;

var averageMary = (maryScore1 + maryScore2 + maryScore3) / 3;
if ( averageJohn > averageMike && averageJohn > averageMary ) {
    console.log("John's team won the game.");
} else if ( averageMike > averageJohn && averageMike > averageMary) {
    console.log("Mike's team won the game.");
} else if ( averageMary > averageJohn && averageMary > averageMike ) {
    console.log("Mary's team won the game.");
} else {
    console.log("There has been a draw.");
}

/**
 * Coding Challenge 3
 * 
 * John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.
 * 
 * To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill when
 * the bill is less than $50, 15% when the bill is between $50 and $200 and 10% if the bill is more than $200.
 * 
 * In the end, John would like to have 2 arrays:
 * 1. Containing all three tips(one for each bill)
 * 2. Containing all three final amounts (bill + tip).
 * 
 */

var tipArray = [];
var totalArray = [];
function calulateTip(bill) {
    if (bill < 50) {
        tip = 20;
    } else if (bill < 200) {
        tip = 15;
    } else {
        tip = 10;
    }

    tip = (bill * tip)/100;
    tipArray.push(tip);
    totalArray.push(bill + tip);
}

calulateTip(124);
calulateTip(48);
calulateTip(268);

console.log('Tip Array: ' + tipArray);
console.log('Total Array: ' + totalArray);


/**
 * Coding Challenge 4: (Same challenge as the first one, but implement it using objects and methods)
 * 
 * Mark and John are trying to comapare their BMI (Body Mass Index), which is calculated using the formula: 
 * BMI = mass/height^2
 * mass in kg, height in m
 * 
 * 1. Store Mark's and John's mass and height in variables.
 * 2. Calculate both their BMIs.
 * 3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
 * 4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John? true")
 * 
 * i. For each of them, create an object with properties for their full name, mass and height
 * ii. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
 * iii. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.
 */

var john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function() {
        this.BMI = this.mass / this.height * this.height;
        return this.BMI;
    }
}

var mark = {
    fullName: 'Mark Smith',
    mass: 78,
    height: 1.69,
    calcBMI: function() {
        this.BMI = this.mass / this.height * this.height;
        return this.BMI;
    }
}

if (john.calcBMI() > mark.calcBMI()) {
    console.log(john.fullName + ' has a higher bmi.');
} else if (mark.BMI > john.BMI) {
    console.log(mark.fullName + ' has a higher bmi.');
} else {
    console.log('They both have the same BMIs.');
}