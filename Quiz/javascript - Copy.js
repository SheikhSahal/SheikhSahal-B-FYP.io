// JavaScript Document
$(document).ready(function(){
    "use strict";
    
    var questions = [{
      question: "What is defined in physics as 'a nuclear reaction in which nuclei combine to form more massive nuclei'?",
      choices: ['fission', 'fusion', 'farking', 'fracking', 'freaking'],
      correctAnswer: 1
    }, {
      question: "What is the capital of Australia?",
      choices: ["Melbourne", "Sydney", "Canberra", "Queensland", "Christchurch"],
      correctAnswer: 2
    }, {
      question: "Who is the prime minister of the U.K.?",
      choices: ['Tony Blair', 'David Cameron', 'Nicolas Sarkozy', 'Gordon Brown', 'Sir John Major'],
      correctAnswer: 1
    }, {
      question: "What is the first perfect number?",
      choices: [38, 6, 0, 256, 28],
      correctAnswer: 1
    }, {
      question: "What colors are on the flag of Norway?",
      choices: ["red and blue", "red and white", "red, white, and silver", "red, white, and blue", "blue and gold"],
      correctAnswer: 3
    }, {
      question: "When did the Soviet Union collapse?",
      choices: ["14 February 1989", "1 January 1988", "31 October 1993", "26 April 1986", "26 December 1991"],
      correctAnswer: 4
    }, {
      question: "What is the currency of Switzerland?",
      choices: ["franc", "Euro", "rupee", "won", "dollar"],
      correctAnswer: 0
    }, {
      question: "What is the square root of 256?",
      choices: [24, 25, 30, 26, 22],
      correctAnswer: 0
    }, {
      question: "What are the three main types of rocks?",
      choices: ['igneous, volcanic, quartz', 'sedimentary, igneous, metamorphic', 'feldspar, metamorphic, sedimentary', 'gargantuan, feldspar, quartz', 'None of the above'],
      correctAnswer: 1
    }, {
      question: "What movie did Leonardo DiCaprio win a BAFTA Film Award for?",
      choices: ['Inception', "What's Eating Gilbert Grape", 'The Revenant', 'The Wolf of Wall Street', 'He never got one.'],
      correctAnswer: 2
    }
    ];
    
    var questionCounter = 0; //Tracks question number
    var selections = []; //Array containing user choices
    var quiz = $('.content'); //Quiz div object
    
    // Display initial question
    displayNext();
    
    // Click handler for the 'next' button
    $('#next').on('click', function (e) {
      e.preventDefault();
      
      // Suspend click listener during fade animation
      if(quiz.is(':animated')) {        
        return false;
      }
      choose();
      
      // If no user selection, progress is stopped
      if (isNaN(selections[questionCounter])) {
        $('#warning').text('Please make a selection!');
      } else {
        questionCounter++;
        displayNext();
        $('#warning').text('');
      }
    });
    
    // Click handler for the 'prev' button
    $('#prev').on('click', function (e) {
      e.preventDefault();
      
      if(quiz.is(':animated')) {
        return false;
      }
      choose();
      questionCounter--;
      displayNext();
    });
    
    // Click handler for the 'Start Over' button
    $('#start').on('click', function (e) {
      e.preventDefault();
      
      if(quiz.is(':animated')) {
        return false;
      }
      questionCounter = 0;
      selections = [];
      displayNext();
      $('#start').hide();
    });
    
    // Creates and returns the div that contains the questions and 
    // the answer selections
    function createQuestionElement(index) {
      var qElement = $('<div>', {
        id: 'question'
      });
      
      var header = $('<h2>Question ' + (index + 1) + ':</h2>');
      qElement.append(header);
      
      var question = $('<p>').append(questions[index].question);
      qElement.append(question);
      
      var radioButtons = createRadios(index);
      qElement.append(radioButtons);
      // this is new
      var warningText = $('<p id="warning">');
      qElement.append(warningText);
      
      return qElement;
  
    }
    
    // Creates a list of the answer choices as radio inputs
    function createRadios(index) {
      var radioList = $('<ul>');
      var item;
      var input = '';
      for (var i = 0; i < questions[index].choices.length; i++) {
        item = $('<li>');
        input = '<input type="radio" name="answer" value=' + i + ' />';
        input += questions[index].choices[i];
        item.append(input);
        radioList.append(item);
      }
      return radioList;
    }
    
    // Reads the user selection and pushes the value to an array
    function choose() {
      selections[questionCounter] = +$('input[name="answer"]:checked').val();
    }
    
    // Displays next requested element
    function displayNext() {
      quiz.fadeOut(function() {
        $('#question').remove();
        
        if(questionCounter < questions.length){
          var nextQuestion = createQuestionElement(questionCounter);
          quiz.append(nextQuestion).fadeIn();
          if (!(isNaN(selections[questionCounter]))) {
            $('input[value='+selections[questionCounter]+']').prop('checked', true);
          }
          
          // Controls display of 'prev' button
          if(questionCounter === 1){
            $('#prev').show();
          } else if(questionCounter === 0){
            
            $('#prev').hide();
            $('#next').show();
          }
         }else {
          var scoreElem = displayScore();
          quiz.append(scoreElem).fadeIn();
          $('#next').hide();
          $('#prev').hide();
          $('#start').show();
        }
      });
    }
    
    // Computes score and returns a paragraph element to be displayed
    function displayScore() {
      var score = $('<h3>',{id: 'question'});
      
      var numCorrect = 0;
      for (var i = 0; i < selections.length; i++) {
        if (selections[i] === questions[i].correctAnswer) {
          numCorrect++;
        }
      }
      // Calculate score and display relevant message
      var percentage = numCorrect / questions.length;
      if (percentage >= 0.9){
          score.append('Incredible! You got ' + numCorrect + ' out of ' +
                   questions.length + ' questions right!');
      }
      
      else if (percentage >= 0.7){
          score.append('Good job! You got ' + numCorrect + ' out of ' +
                   questions.length + ' questions right!');
      }
      
      else if (percentage >= 0.5){
          score.append('You got ' + numCorrect + ' out of ' +
                   questions.length + ' questions right.');
      }
      
      else {
          score.append('You only got ' + numCorrect + ' out of ' +
                   questions.length + ' right. Want to try again?');
      }
      return score;
    }
  });