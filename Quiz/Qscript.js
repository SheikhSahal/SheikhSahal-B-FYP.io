// JavaScript Document
$(document).ready(function () {
  "use strict";

  var questions = [{
    question: "	Q1. I __________ working all afternoon and have just finished the assignment.	", choices: ['A)have been', 'B)had been', 'C)shall be', 'D)am',], correctAnswer: 2
  },
  { question: "	Q2. Rohan __________ the movie before he read the review.	", choices: ['A)watches', 'B)have watched', 'C)had watched', 'D)was watching',], correctAnswer: 3 },
  { question: "	Q3. He __________ in the States but he still does not have a command over the English language.	", choices: ['A)have been living', 'B)has been living', 'C)have lived', 'D)living',], correctAnswer: 2 },
  { question: "	Q4. By the next month, we shall __________ the project.	", choices: ['A)has completed', 'B)completing', 'C)completed', 'D)have completed',], correctAnswer: 4 },
  { question: "	Q5. Every boy and girl __________ in the class today.	", choices: ['A)are present', 'B)is present', 'C)have present', 'D)had present',], correctAnswer: 2 },
  { question: "	Q6. He __________ daily for a year now.	", choices: ['A)exercises', 'B)was exercising', 'C)has been exercising', 'D)have been exercising',], correctAnswer: 3 },
  { question: "	Q7. I __________ this book since morning.	", choices: ['A)haD)been reading', 'B)has been reading', 'C)have had read', 'D)shall be reading',], correctAnswer: 1 },
  { question: "	Q8. Which tense is used to express general truths and facts?	", choices: ['A)Present continuous tense', 'B)Present perfect tense', 'C)Past perfect tense', 'D)Present indefinite tense',], correctAnswer: 4 },
  { question: "	Q9. According to the prevailing rate, two dozen __________ rupees one hundred.	", choices: ['A)costs', 'B)cost', 'C)costing', 'D)costed',], correctAnswer: 2 },
  { question: "	Q10. The Council __________ made its decision.	", choices: ['A)have', 'B)have had', 'C)has', 'D)having',], correctAnswer: 3 },
  { question: "	Q11. What do tenses as the form of a verb help to determine?	", choices: ['A)The time of the action', 'B)The state of the action', 'C)Both (A) and (B)', 'D)The number of action',], correctAnswer: 3 },
  { question: "	Q12. Which tense is used to show the completion of an action by a certain time in the future?	", choices: ['A)Future perfect tense', 'B)Present indefinite tense', 'C)Future perfect continuous tense', 'D)Both (A) anD)(C)',], correctAnswer: 3 },
  { question: "	Q13. Identify the tense used in the following sentence. “When I reached the bookstore, all the copies had already been sold.”	", choices: ['A)Past perfect tense', 'B)Past indefinite tense', 'C)Present perfect tense', 'D)Present indefinite tense',], correctAnswer: 1 },
  { question: "	Q14. The wise leader and politician __________ assassinated.	", choices: ['A)are', 'B)has been', 'C)have been', 'D)have had been',], correctAnswer: 2 },
  { question: "	Q15. Neither of the paintings __________ sold.	", choices: ['A)have been', 'B)were', 'C)are', 'D)was',], correctAnswer: 4 },
  { question: "	Q16. Sita or her brothers __________ to be blamed.	", choices: ['A)is', 'B)has', 'C)are', 'D)was',], correctAnswer: 3 },
  { question: "	Q17. The Chief guest, with his wife, __________.	", choices: ['A)has left', 'B)are leaving', 'C)have left', 'D)left',], correctAnswer: 1 },
  { question: "	Q18. The quality of products __________ over time.	", choices: ['A)are degrading', 'B)has been degrading', 'C)have degrading', 'D)were degraded',], correctAnswer: 2 },
  { question: "	Q19. The news __________ not updated timely.	", choices: ['A)were', 'B)have', 'C)is', 'D)are',], correctAnswer: 3 },
  { question: "	Q20. They __________ into their cars and drove away.	", choices: ['A)has got', 'B)have got', 'C)gets', 'D)got',], correctAnswer: 4 },
  { question: "	Q21. Choose the sentence with the future perfect tense.	", choices: ['A)They shall have arriveD)by then.', 'B)They shall be arriving by then.', 'C)They shall arrive by then.', 'D)They shall have been arriving by then.',], correctAnswer: 1 },
  { question: "	Q22. Identify the tense used in the following sentence. “We are going to reach the destination as scheduled.”	", choices: ['A)Present continuous tense', 'B)Future perfect continuous tense', 'C)Future continuous tense', 'D)Present perfect continuous tense',], correctAnswer: 1 },
  { question: "	Q23. Which tense is used to express an action going at some point in the past?	", choices: ['A)Past indefinite tense', 'B)Past perfect continuous tense', 'C)Past continuous tense', 'D)Past perfect continuous tense',], correctAnswer: 3 },
  { question: "	Q24. Each of the four army soldiers __________ for the mission.	", choices: ['A)were ready', 'B)are ready', 'C)was ready', 'D)have been ready',], correctAnswer: 3 },
  { question: "	Q25. The thief and the eye-witness __________.	", choices: ['A)has escaped', 'B)has been escaping', 'C)was escaping', 'D)have escaped',], correctAnswer: 4 },
  { question: "	Q26. Back in my native place, I __________ a smartphone.	", choices: ['A)diD)not have', 'B)do not have', 'C)did not had', 'D)do not had',], correctAnswer: 1 },
  { question: "	Q27. Choose the correct sentence.	", choices: ['A)When I woke up, he has already eaten breakfast.', 'B)When I woke up, he haD)already eaten breakfast.', 'C)When I had woken up, he had already ate breakfast.', 'D)When I had woken up, he has already ate breakfast.',], correctAnswer: 2 },
  { question: "	Q28. I __________ the medicine as prescribed by the doctor for a week now.	", choices: ['A)takes', 'B)have been taking', 'C)would have taken', 'D)have had been taking',], correctAnswer: 2 },
  { question: "	Q29. You and I __________ the obligations.	", choices: ['A)am fulfilled', 'B)has been fulfilling', 'C)have fulfilled', 'D)has fulfilled',], correctAnswer: 3 },
  { question: "	Q30. Identify the tense used in the sentence. “Her brother will walk her down the aisle.”	", choices: ['A)Future indefinite tense', 'B)Future perfect tense', 'C)Present indefinite tense', 'D)Present perfect tense',], correctAnswer: 1 },
  { question: "	Q31. Choose the past perfect continuous tense form of the sentence. “The children played in the park throughout the evening.”	", choices: ['A)The children playeD)in the park throughout the evening.', 'B)The children have been playing in the park throughout the evening.', 'C)The children had played in the park throughout the evening.', 'D)The children haD)been playing in the park throughout the evening.',], correctAnswer: 4 },
  { question: "	Q32. Identify the tense used in the sentence. “Here comes the soon-to-be bride!”	", choices: ['A)Present continuous tense', 'B)Present indefinite tense', 'C)Future indefinite tense', 'D)Present perfect tense',], correctAnswer: 2 },
  { question: "	Q33. Identify the tense used in the underlined phrase. “The weatherman forecasted that it’s going to rain.”	", choices: ['A)Present indefinite tense', 'B)Future indefinite tense', 'C)Future perfect continuous tense', 'D)Present continuous tense',], correctAnswer: 4 },
  { question: "	Q34. Two-thirds of the food supply __________ for the month.	", choices: ['A)has been used', 'B)were used', 'C)have been using', 'D)has been using',], correctAnswer: 1 },
  { question: "	Q35. The technique of paraphrasing __________.	", choices: ['A)are practised', 'B)has to be practised', 'C)have to be practised', 'D)is practising',], correctAnswer: 2 },
  { question: "	Q36. “Shyam and his brothers” __________ a famous sweet shop in our neighbourhood.	", choices: ['A)are', 'B)have been', 'C)is', 'D)have',], correctAnswer: 3 },
  { question: "	Q37. Which tense is used to express that an action started in the past and is continuing till now?	", choices: ['A)Present perfect tense', 'B)Past perfect continuous tense', 'C)Past continuous tense', 'D)Present perfect continuous tense',], correctAnswer: 4 },
  { question: "	Q38. Identify the tense used in the sentence. “While he was in the military, he still regularly wrote to me.”	", choices: ['A)Past indefinite tense', 'B)Past perfect tense', 'C)Present indefinite', 'D)Past perfect continuous tense',], correctAnswer: 1 },
  { question: "	Q39. Identify the tense used in the underlined phrase. “He is always found reading the newspaper.”	", choices: ['A)Present indefinite tense', 'B)Present perfect continuous tense', 'C)Present continuous tense', 'D)Present perfect tense',], correctAnswer: 3 },
  { question: "	Q40. Fill in the blank with the present perfect tense form of the verb given in the bracket. “James ___________ to visit her grandmother.” (go)	", choices: ['A)have been going', 'B)had gone', 'C)has gone', 'D)has been going',], correctAnswer: 3 },
  { question: "	Q41. Fill in the blank with the future perfect continuous tense form of the verb given in the bracket. “We __________ for an hour now.” (wait)	", choices: ['A)shall have been waiting', 'B)have been waiting', 'C)shall be waiting', 'D)had been waiting',], correctAnswer: 1 },
  { question: "	Q42. Choose the present indefinite tense form of the sentence. “He had been sleeping.”	", choices: ['A)He has been sleeping.', 'B)He had slept.', 'C)He has slept.', 'D)He sleeps.',], correctAnswer: 4 },
  { question: "	Q43. Identify the tense used in the underlined phrase. “He joined the cooking school late but only in a few months had mastered the recipes.”	", choices: ['A)Past indefinite tense', 'B)Past perfect tense', 'C)Present perfect tense', 'D)Present indefinite tense',], correctAnswer: 2 },
  { question: "	Q44. By the time she was fifteen, she __________ a beautiful singer.	", choices: ['A)shall become', 'B)become', 'C)had become', 'D)has becoming',], correctAnswer: 3 },
  { question: "	Q45. Fill in the blank with the present perfect continuous tense form of the verb given in the bracket. “Adam __________ a health regime everyday.” (follow)	", choices: ['A)follows', 'B)have been following', 'C)has been following', 'D)has followed',], correctAnswer: 3 },
  { question: "	Q46. Neither she nor I __________ at home.	", choices: ['A)were', 'B)was', 'C)has been', 'D)be',], correctAnswer: 2 },
  { question: "	Q47. My friends and I __________ stuck there.	", choices: ['A)had been', 'B)was', 'C)has been', 'D)have haD)been',], correctAnswer: 1 },
  { question: "	Q48. Choose the correct sentence.	", choices: ['A)Sam have gone to buy some groceries.', 'B)Sam had going to buy some groceries.', 'C)Sam be going to buy some groceries.', 'D)Sam is going to buy some groceries.',], correctAnswer: 4 },
  { question: "	Q49. Which tense is used to express an action taking place in the future?	", choices: ['A)Future perfect tense', 'B)Future perfect continuous tense', 'C)Future indefinite tense', 'D)Future continuous tense',], correctAnswer: 3 },
  { question: "	Q50. Chris __________ to attend the programme.	", choices: ['A)diD)not wanted', 'B)did not want', 'C)do not wanted', 'D)does not wanted',], correctAnswer: 2 },
  { question: "	Q51. Meera  __________ for the charitable cause.	", choices: ['A)came to contribute', 'B)come to contributed', 'C)came to contributed', 'D)comes to contributed',], correctAnswer: 1 },
  { question: "	Q52. Fill in the blank with the past continuous tense form of the verb given in the bracket. “Monica __________ since last week.” (plan)	", choices: ['A)did plan', 'B)has been planning', 'C)had been planning', 'D)was planning',], correctAnswer: 4 },
  { question: "	Q53. The crowd that __________ due to the quarrel has dispersed now.	", choices: ['A)have gathered', 'B)has been gathered', 'C)had gathered', 'D)has been gathering',], correctAnswer: 3 },
  { question: "	Q54.  Identify the tense used in the sentence. “Nick has purchased a new laptop.”	", choices: ['A)Present perfect tense', 'B)Past indefinite tense', 'C)Past perfect tense', 'D)Present indefinite tense',], correctAnswer: 1 },
  { question: "	Q55. The stars __________ bright at night.	", choices: ['A)shines', 'B)shine', 'C)has shine', 'D)shining',], correctAnswer: 2 },
  { question: "	Q56.  Identify the tense used in the sentence. “When shall our application be approved?”	", choices: ['A)Future perfect tense', 'B)Present indefinite tense', 'C)Past perfect tense', 'D)Future indefinite tense',], correctAnswer: 4 },
  { question: "	Q57. Which tense is used to express an action completed in the immediate past?	", choices: ['A)Past indefinite tense', 'B)Present indefinite tense', 'C)Present perfect tense', 'D)Past perfect tense',], correctAnswer: 4 },
  { question: "	Q58. Choose the past perfect continuous tense form of the sentence. “George travels around the world.”	", choices: ['A)George has been travelling arounD)the world.', 'B)George haD)been travelling around the world.', 'C)George shall have been travelling around the world.', 'D)George was travelling arounD)the world.',], correctAnswer: 2 },
  { question: "	Q59. You should not __________ back with your teacher.	", choices: ['A)talk', 'B)talks', 'C)had talked', 'D)talked',], correctAnswer: 1 },
  { question: "	Q60. Pentagon __________ five sides.	", choices: ['A)have had', 'B)had', 'C)has', 'D)have',], correctAnswer: 3 },
  { question: "	Q61. Identify the tense used in the given sentence. “My father’s shop has been sold out.”	", choices: ['A)Past perfect tense', 'B)Present perfect tense', 'C)Past indefinite tense', 'D)Present indefinite tense',], correctAnswer: 2 },
  { question: "	Q62. Identify the tense used in the given sentence. “I am visiting her now.”	", choices: ['A)Present indefinite tense', 'B)Future perfect continuous tense', 'C)Future perfect tense', 'D)Present continuous tense',], correctAnswer: 4 },
  { question: "	Q63. Fill in the blank with the future perfect tense form of the verb given in the bracket. “Peter __________ had it been possible.” (adjust)	", choices: ['A)would adjust', 'Q63. Fill in the blank with the future perfect tense form of the verB)given in the bracket. “Peter __________ haD)it been possible.” (adjust)', 'C)has adjusted', 'D)had adjusted',], correctAnswer: 2 },
  { question: "	Q64. Choose the future perfect tense form of the given sentence. “He has a lot of experience.”	", choices: ['A)He had a lot of experience.', 'B)would have adjusted', 'C)He will have had A)lot of experience.', 'D)He will be having A)lot of experience.',], correctAnswer: 3 },
  { question: "	Q65. I probably  __________ left.	", choices: ['A)should have', 'B)He will have a lot of experience.', 'C)has', 'D)having',], correctAnswer: 1 },
  { question: "	Q66. Fill in the blank with the present perfect tense form of the verb given in the bracket. “I __________ here for a month now.” (be)	", choices: ['A)had been', 'B)will', 'C)have been', 'D)have haD)been',], correctAnswer: 3 },
  { question: "	Q67. Identify the tense used in the underlined phrase. “By the time I was informed, the registrations had been closed.”	", choices: ['A)Past perfect tense', 'B)would have been', 'C)Past indefinite tense', 'D)Present indefinite tense',], correctAnswer: 1 },
  { question: "	Q68. Choose the correct sentence.	", choices: ['A)Harry inviting me to his farmhouse once.', 'B)Present perfect tense', 'C)Harry had invited me to his farmhouse once.', 'D)Harry has been inviting me to his farmhouse once.',], correctAnswer: 3 },
  { question: "	Q69. Has the itinerary __________ yet?	", choices: ['A)been deciding', 'B)Harry shall invited me to his farmhouse once.', 'C)decided', 'D)be decided',], correctAnswer: 2 },
  { question: "	Q70. It is a tradition that __________ ever since.	", choices: ['A)have been celebrated', 'B)been decided', 'C)has been celebrated', 'D)has been celebrating',], correctAnswer: 3 },
  { question: "	Q71. Jackson and Kate  __________ all this time.	", choices: ['A)have been collaborating', 'B)had been celebrated', 'C)collaborate', 'D)collaborates',], correctAnswer: 1 },
  { question: "	Q72. Identify the tense used in the given sentence. “Welcome to the ceremony.”	", choices: ['A)Present perfect tense', 'B)have to collaborate', 'C)Past indefinite tense', 'D)Past perfect tense',], correctAnswer: 2 },
  { question: "	Q73. Fill in the blank with the past perfect continuous tense form of the verb given in the bracket. “The area __________ from an earthquake.” (recover)	", choices: ['A)is recovering', 'B)Present indefinite tense', 'C)had been recovering', 'D)has recovered',], correctAnswer: 3 },
  { question: "	Q74. Choose the present perfect tense form of the given sentence. “The manager shall be on leave.”	", choices: ['A)The manager is on A)leave.', 'B)has been recovering', 'C)The manager was on leave.', 'D)The manager has been on leave.',], correctAnswer: 4 },
  { question: "	Q75. Mathematics __________ difficult by many students.	", choices: ['A)is found', 'B)The manager had been on leave.', 'C)has been founding', 'D)are found',], correctAnswer: 1 },
  { question: "	Q76. I __________ you my last year’s books.	", choices: ['A)have had lend', 'B)has found', 'C)lends', 'D)lending',], correctAnswer: 2 },
  { question: "	Q77. Identify the tense used in the underlined phrase. “As soon as I was ready to leave, it started to pour.”	", choices: ['A)Present perfect tense', 'B)shall lend', 'C)Past indefinite tense', 'D)Present indefinite tense',], correctAnswer: 3 },
  { question: "	Q78. Identify the tense used in the given sentence. “Someone picked my pocket.”	", choices: ['A)Present indefinite tense', 'B)Past perfect tense', 'C)Past perfect tense', 'D)Present perfect tense',], correctAnswer: 2 },
  { question: "	Q79. Choose the future perfect tense form of the given sentence. “Charlie is the headboy of our school.”	", choices: ['A)Charlie will be the headboy of our school.', 'B)Past indefinite tense', 'C)Charlie have had been the headboy of our school.', 'D)Charlie woulD)have been the headboy of our school.',], correctAnswer: 4 },
  { question: "	Q80. Which tense is used to express a person’s habitual or regular activities?	", choices: ['A)Present perfect tense', 'B)Charlie has been the headboy of our school.', 'C)Present indefinite tense', 'D)Present continuous tense',], correctAnswer: 3 },
  { question: "	Q81. Joey __________ from the vacation just now.	", choices: ['A)has returned', 'B)Present perfect continuous tense', 'C)had been returning', 'D)returns',], correctAnswer: 1 },
  { question: "	Q82. You should not __________ the worst.	", choices: ['A)assumed', 'B)had returned', 'C)assume', 'D)assumes',], correctAnswer: 3 },
  { question: "	Q83. Choose the future indefinite tense form of the given sentence. “The parcel has been delivered.”	", choices: ['A)The parcel had been delivered.', 'B)assuming', 'C)The parcel was delivered.', 'D)The parcel woulD)have been delivered.',], correctAnswer: 2 },
  { question: "	Q84. Fill in the blank with the present perfect continuous tense form of the verb given in the bracket. “Workers __________ day and night.” (work)	", choices: ['A)had been working', 'B)The parcel will be delivered.', 'C)has been working', 'D)are working',], correctAnswer: 2 },
  { question: "	Q85. Fill in the blank with the past perfect tense form of the verb given in the bracket. “Vikram __________ his job.” (do)	", choices: ['A)did', 'B)have been working', 'C)had done', 'D)haD)been doing',], correctAnswer: 3 },
  { question: "	Q86. Choose the correct sentence.	", choices: ['A)I did not accompanied them.', 'B)was doing', 'C)I does not accompany them.', 'D)I do not accompany them.',], correctAnswer: 4 },
  { question: "	Q87. Identify the tense used in the given sentence. “Sasha scolds and asks her to go away.”	", choices: ['A)Past indefinite tense', 'B)I do not accompanied them.', 'C)Present indefinite tense', 'D)Present perfect tense',], correctAnswer: 3 },
  { question: "	Q88. Identify the tense used in the given sentence. “John met the officer in the evening.”	", choices: ['A)Past continuous tense', 'B)Past perfect tense', 'C)Past perfect tense', 'D)Past indefinite tense',], correctAnswer: 3 },
  { question: "	Q89. The whole family __________ for the ceremony.	", choices: ['A)has been invited', 'B)Past perfect continuous tense', 'C)invites', 'D)invited',], correctAnswer: 1 },
  { question: "	Q90. Fill in the blank with the past indefinite tense form of the verb given in the bracket. “After a long day at work, Rachel _________ tired.” (be)	", choices: ['A)is', 'B)have been invited', 'C)had been', 'D)has been',], correctAnswer: 3 },
  { question: "	Q91. Which tense is used to express an action that is taking place at the time of speaking?	", choices: ['A)Present perfect continuous tense', 'B)Present indefinite tense', 'C)Present continuous tense', 'D)Present perfect tense',], correctAnswer: 3 },
  { question: "	Q92. Identify the tense used in the underlined phrase. “She has decided to distribute the duties after everyone completes their work.”	", choices: ['A)Past perfect tense', 'B)Present perfect tense', 'C)Present indefinite tense', 'D)Past indefinite tense',], correctAnswer: 2 },
  { question: "	Q93. Identify the tense used in the given sentence. “Everyone shall be reaching by tomorrow.”	", choices: ['A)Future indefinite tense', 'B)Present continuous tense', 'C)Future perfect continuous tense', 'D)Future continuous tense',], correctAnswer: 4 },
  { question: "	Q94. Joseph __________ by everyone after he won the competition.	", choices: ['A)was congratulated', 'B)congratulate', 'C)shall be congratulated', 'D)have been congratulated',], correctAnswer: 1 },
  { question: "	Q95. Choose the correct sentence.	", choices: ['A)He visit the temple frequently.', 'B)He visits the temple frequently.', 'C)He had visiting the temple frequently.', 'D)He have haD)visiteD)the temple frequently.',], correctAnswer: 2 },
  { question: "	Q96. Fill in the blank with the future perfect tense form of the verb given in the bracket. “Mary __________ seats for us.” (save)	", choices: ['A)ought to save', 'B)should save', 'C)would have saved', 'D)woulD)save',], correctAnswer: 3 },
  { question: "	Q97. Identify the tense used in the underlined phrase. “She speaks less but has strong opinions.”	", choices: ['A)Present indefinite tense', 'B)Present perfect tense', 'C)Past perfect tense', 'D)Past indefinite tense',], correctAnswer: 1 },
  { question: "	Q98. Identify the tense used in the given sentence. “You are always working on your laptop.”	", choices: ['A)Present indefinite tense', 'B)Present perfect tense', 'C)Present continuous tense', 'D)Present perfect continuous tense',], correctAnswer: 3 },
  { question: "	Q99. Jack and John __________ helpful.	", choices: ['A)be', 'B)have been', 'C)was', 'D)had been',], correctAnswer: 4 },
  { question: "	Q100. Which tense is used to express an action that began in the past before some point and continued up to that point?	", choices: ['A)Past indefinite tense', 'B)Past perfect tense', 'C)Past perfect continuous tense', 'D)Past continuous tense',], correctAnswer: 3 },


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
    if (quiz.is(':animated')) {
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

    if (quiz.is(':animated')) {
      return false;
    }
    choose();
    questionCounter--;
    displayNext();
  });

  // Click handler for the 'Start Over' button
  $('#start').on('click', function (e) {
    e.preventDefault();

    if (quiz.is(':animated')) {
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
    quiz.fadeOut(function () {
      $('#question').remove();

      if (questionCounter < questions.length) {
        var nextQuestion = createQuestionElement(questionCounter);
        quiz.append(nextQuestion).fadeIn();
        if (!(isNaN(selections[questionCounter]))) {
          $('input[value=' + selections[questionCounter] + ']').prop('checked', true);
        }

        // Controls display of 'prev' button
        if (questionCounter === 1) {
          $('#prev').show();
        } else if (questionCounter === 0) {

          $('#prev').hide();
          $('#next').show();
        }
      } else {
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
    var score = $('<h3>', { id: 'question' });

    var numCorrect = 0;
    for (var i = 0; i < selections.length; i++) {
      if (selections[i] === questions[i].correctAnswer) {
        numCorrect++;
      }
    }
    // Calculate score and display relevant message
    var percentage = numCorrect / questions.length;
    if (percentage >= 0.9) {
      score.append('Incredible! You got ' + numCorrect + ' out of ' +
        questions.length + ' questions right!');
    }

    else if (percentage >= 0.7) {
      score.append('Good job! You got ' + numCorrect + ' out of ' +
        questions.length + ' questions right!');
    }

    else if (percentage >= 0.5) {
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