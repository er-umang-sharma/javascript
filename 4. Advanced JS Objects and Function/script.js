/**
 * Challenge 7:
 * 
 * Build a fun quiz game in the console.
 * 1. Build a function constructor called Question to describe a question. A question should include:
 *      a. Question itself.
 *      b. The answers from which the player can choose the correct one from.
 *      c. Correct answer
 * 
 * 2. Create a couple of questions using the constructor
 * 
 * 3. Store them all in an array.
 * 
 * 4. Select one random question and log it to the console, together with the possible answers (each question should have a number) (Hint: Write a method for the Question objects for the task)
 * 
 * 5. Use the prompt function to ask the user for the correct answer. The user should input the number of the correct answer, such as dislpayed in task 4.
 * 
 * 6. Check if the answer is correct and print to the console whether the answer is correct or not.(Hint: write another method for this).
 * 
 * 7. Suppose this code would be a plugin for other programmers to use in their code. So, make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do that exactly)
 */

 (function (){
    var Question = function(question, answer1, answer2, correctAns) {
        this.question = question;
        this.answer1 = answer1;
        this.answer2 = answer2;
        this.correctAns = correctAns;
    };
    
    var questions = [new Question('Who is the president of India?', 'Pratibha Patil', 'Ram Nath Kovind', 2),
                    new Question('What is the current year?', 2020, 2021, 2),
                    new Question('How are you doing?', 'Fine', 'Not Fine', 1),
                    new Question('Where does sun rise from?', 'east', 'west', 1),
                    new Question('Where does the sun set?', 'east', 'west', 2)];
    
    while (true) {
        var random = Math.floor(Math.random() * 5);
        var questionAsked = questions[random];
        console.log(random);
        console.log(questionAsked);
        console.log('Question: ' + questionAsked.question);
        console.log('Answer: \nOption 1: '+ questionAsked.answer1 + '\nOption 2: ' + questionAsked.answer2);
        var response = prompt('Enter your choice for the question found in the console.');
        if (response == questionAsked.correctAns) {
            console.log('Correct Response!');
        } else if (response === 'exit') {
            console.log('Exit Response!');
            break;
        } else {
            console.log('Wrong Response!');
        }
    }
    
    })();