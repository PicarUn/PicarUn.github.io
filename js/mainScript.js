const container = document.querySelector('.container');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');

registerLink.addEventListener('click', ()=> {
    container.classList.add('active');
});
loginLink.addEventListener('click', ()=> {
    container.classList.remove('active');
});

const btnPopup = document.querySelector('.btnLogin-popup');

btnPopup.addEventListener('click', ()=>{
    container.classList.add('active-popup');
})

const closeIcon = document.querySelector('.close-icon');
closeIcon.addEventListener('click', ()=> {
    container.classList.remove('active-popup');
});

//Assessment 
document.addEventListener('DOMContentLoaded', () => {
    const quizContainer = document.getElementById('quiz-container');
    const questionElement = document.getElementById('question');
    const optionsContainer = document.getElementById('options-container');
    const feedbackElement = document.getElementById('feedback');
    const nextButton = document.getElementById('nextButton');
    const resultElement = document.getElementById('result');

    const quizData = [
      {
        question: 'I enjoy working with numbers and data.',
        options: ['Strongly Disagree', 'Disagree', 'Either Agree or Disagree', 'Agree', 'Strongly Agree'],
        strandScores: { 'ABM': [1, 2], 'GAS': [2, 4], 'HUMSS': [2, 5], 'STEM': [1, 3], 'MAWD': [3, 5], 'Culinary': [4], 'TOPPER': [3] }
      },
      {
        question: 'I enjoy studying literature, philosophy, and the arts.',
        options: ['Strongly Disagree', 'Disagree', 'Either Agree or Disagree', 'Agree', 'Strongly Agree'],
        strandScores: { 'ABM': [2], 'GAS': [1, 4], 'HUMSS': [1, 5], 'STEM': [2], 'MAWD': [2, 4], 'Culinary': [], 'TOPPER': [] }
      },
      {
        question: 'I enjoy solving complex problems and puzzles.',
        options: ['Strongly Disagree', 'Disagree', 'Either Agree or Disagree', 'Agree', 'Strongly Agree'],
        strandScores: { 'ABM': [1, 3], 'GAS': [3], 'HUMSS': [3, 5], 'STEM': [1], 'MAWD': [3, 5], 'Culinary': [], 'TOPPER': [3] }
      },
      {
        question: 'I enjoy working on creative projects and expressing myself through art.',
        options: ['Strongly Disagree', 'Disagree', 'Either Agree or Disagree', 'Agree', 'Strongly Agree'],
        strandScores: { 'ABM': [], 'GAS': [4], 'HUMSS': [4, 5], 'STEM': [], 'MAWD': [4], 'Culinary': [4], 'TOPPER': [] }
      },
      {
        question: 'I enjoy helping others and making a positive impact in the community.',
        options: ['Strongly Disagree', 'Disagree', 'Either Agree or Disagree', 'Agree', 'Strongly Agree'],
        strandScores: { 'ABM': [], 'GAS': [], 'HUMSS': [5], 'STEM': [], 'MAWD': [5], 'Culinary': [], 'TOPPER': [] }
      },
      {
        question: 'I find joy in exploring scientific principles and conducting experiments.',
        options: ['Strongly Disagree', 'Disagree', 'Either Agree or Disagree', 'Agree', 'Strongly Agree'],
        strandScores: { 'ABM': [], 'GAS': [], 'HUMSS': [], 'STEM': [1, 4], 'MAWD': [1, 2], 'Culinary': [], 'TOPPER': [] }
      },
      {
        question: 'I am interested in understanding how businesses operate and making strategic decisions.',
        options: ['Strongly Disagree', 'Disagree', 'Either Agree or Disagree', 'Agree', 'Strongly Agree'],
        strandScores: { 'ABM': [4, 5], 'GAS': [], 'HUMSS': [], 'STEM': [], 'MAWD': [4, 5], 'Culinary': [], 'TOPPER': [4] }
      },
      {
        question: 'I enjoy programming and developing software applications.',
        options: ['Strongly Disagree', 'Disagree', 'Either Agree or Disagree', 'Agree', 'Strongly Agree'],
        strandScores: { 'ABM': [], 'GAS': [], 'HUMSS': [], 'STEM': [4, 5], 'MAWD': [1, 4], 'Culinary': [], 'TOPPER': [1] }
      },
      {
        question: 'I have a passion for environmental issues and sustainability.',
        options: ['Strongly Disagree', 'Disagree', 'Either Agree or Disagree', 'Agree', 'Strongly Agree'],
        strandScores: { 'ABM': [], 'GAS': [], 'HUMSS': [4], 'STEM': [5], 'MAWD': [], 'Culinary': [], 'TOPPER': [] }
      },
      {
        question: 'I enjoy working with technology and staying updated on the latest advancements.',
        options: ['Strongly Disagree', 'Disagree', 'Either Agree or Disagree', 'Agree', 'Strongly Agree'],
        strandScores: { 'ABM': [], 'GAS': [], 'HUMSS': [], 'STEM': [4, 5], 'MAWD': [], 'Culinary': [], 'TOPPER': [] }
      },
      {
        question: 'I like exploring different cultures and learning about historical events.',
        options: ['Strongly Disagree', 'Disagree', 'Either Agree or Disagree', 'Agree', 'Strongly Agree'],
        strandScores: { 'ABM': [3], 'GAS': [5], 'HUMSS': [1, 2], 'STEM': [], 'MAWD': [], 'Culinary': [], 'TOPPER': [] }
      },
      {
        question: 'I enjoy conducting research and analyzing data to draw meaningful conclusions.',
        options: ['Strongly Disagree', 'Disagree', 'Either Agree or Disagree', 'Agree', 'Strongly Agree'],
        strandScores: { 'ABM': [4], 'GAS': [], 'HUMSS': [1, 2, 3], 'STEM': [4], 'MAWD': [1, 4], 'Culinary': [], 'TOPPER': [4] }
      },
      {
        question: 'I have a talent for and enjoy expressing myself through writing or public speaking.',
        options: ['Strongly Disagree', 'Disagree', 'Either Agree or Disagree', 'Agree', 'Strongly Agree'],
        strandScores: { 'ABM': [4], 'GAS': [4], 'HUMSS': [4, 5], 'STEM': [], 'MAWD': [], 'Culinary': [], 'TOPPER': [4, 5] }
      },
      {
        question: 'I am fascinated by the world of finance and investment.',
        options: ['Strongly Disagree', 'Disagree', 'Either Agree or Disagree', 'Agree', 'Strongly Agree'],
        strandScores: { 'ABM': [4, 5], 'GAS': [], 'HUMSS': [], 'STEM': [], 'MAWD': [4, 5], 'Culinary': [], 'TOPPER': [] }
      },
      {
        question: 'I enjoy hands-on activities and working with tools or machinery.',
        options: ['Strongly Disagree', 'Disagree', 'Either Agree or Disagree', 'Agree', 'Strongly Agree'],
        strandScores: { 'ABM': [], 'GAS': [], 'HUMSS': [], 'STEM': [4, 5], 'MAWD': [4, 5], 'Culinary': [], 'TOPPER': [] }
      },
      {
        question: 'I am passionate about promoting health and well-being.',
        options: ['Strongly Disagree', 'Disagree', 'Either Agree or Disagree', 'Agree', 'Strongly Agree'],
        strandScores: { 'ABM': [], 'GAS': [], 'HUMSS': [], 'STEM': [], 'MAWD': [5], 'Culinary': [4], 'TOPPER': [] }
      },
      {
        question: 'I enjoy planning and organizing events or projects.',
        options: ['Strongly Disagree', 'Disagree', 'Either Agree or Disagree', 'Agree', 'Strongly Agree'],
        strandScores: { 'ABM': [4], 'GAS': [], 'HUMSS': [4], 'STEM': [], 'MAWD': [], 'Culinary': [4], 'TOPPER': [] }
      },
      {
        question: 'I am fascinated by the human mind and behavior.',
        options: ['Strongly Disagree', 'Disagree', 'Either Agree or Disagree', 'Agree', 'Strongly Agree'],
        strandScores: { 'ABM': [3], 'GAS': [4, 5], 'HUMSS': [1, 2, 3], 'STEM': [], 'MAWD': [], 'Culinary': [], 'TOPPER': [] }
      },
      {
        question: 'I enjoy working with animals and have a strong connection with nature.',
        options: ['Strongly Disagree', 'Disagree', 'Either Agree or Disagree', 'Agree', 'Strongly Agree'],
        strandScores: { 'ABM': [], 'GAS': [], 'HUMSS': [], 'STEM': [], 'MAWD': [], 'Culinary': [4, 5], 'TOPPER': [] }
      },
      {
        question: 'I am interested in the world of fashion and design.',
        options: ['Strongly Disagree', 'Disagree', 'Either Agree or Disagree', 'Agree', 'Strongly Agree'],
        strandScores: { 'ABM': [4], 'GAS': [], 'HUMSS': [4], 'STEM': [], 'MAWD': [], 'Culinary': [4], 'TOPPER': [] }
      },
    ];

    let currentQuestionIndex = 0;
    let scores = {
      ABM: 0,
      GAS: 0,
      HUMSS: 0,
      STEM: 0,
      MAWD: 0,
      Culinary: 0,
      TOPPER: 0
    };

    function displayQuestion() {
      const currentQuestion = quizData[currentQuestionIndex];
      questionElement.textContent = currentQuestion.question;

      optionsContainer.innerHTML = '';
      currentQuestion.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        optionElement.textContent = option;
        optionElement.addEventListener('click', () => checkAnswer(index));
        optionsContainer.appendChild(optionElement);
      });

      feedbackElement.textContent = '';
      nextButton.disabled = true;
    }

    // ...

function checkAnswer(optionIndex) {
  const currentQuestion = quizData[currentQuestionIndex];
  const selectedValue = currentQuestion.options[optionIndex];

  // Update scores
  scores.ABM += currentQuestion.strandScores.ABM.includes(optionIndex + 1) ? 1 : 0;
  scores.GAS += currentQuestion.strandScores.GAS.includes(optionIndex + 1) ? 1 : 0;
  scores.HUMSS += currentQuestion.strandScores.HUMSS.includes(optionIndex + 1) ? 1 : 0;
  scores.STEM += currentQuestion.strandScores.STEM.includes(optionIndex + 1) ? 1 : 0;
  scores.MAWD += currentQuestion.strandScores.MAWD.includes(optionIndex + 1) ? 1 : 0;
  scores.Culinary += currentQuestion.strandScores.Culinary.includes(optionIndex + 1) ? 1 : 0;
  scores.TOPPER += currentQuestion.strandScores.TOPPER.includes(optionIndex + 1) ? 1 : 0;

  // Provide personalized feedback based on the question and selected option
  let feedbackMessage = '';

  switch (currentQuestionIndex) {
    case 0:
      switch (selectedValue) {
        case 'Strongly Disagree':
          feedbackMessage = 'Numbers can be tricky! Keep exploring.';
          break;
        case 'Disagree':
          feedbackMessage = 'Not a fan of numbers? No worries!';
          break;
        case 'Either Agree or Disagree':
          feedbackMessage = 'Balancing the equation, I see!';
          break;
        case 'Agree':
          feedbackMessage = 'You enjoy numbers! Math is fun.';
          break;
        case 'Strongly Agree':
          feedbackMessage = 'Math wizard! Numbers bow down to you.';
          break;
      }
      break;
    case 1:
      switch (selectedValue) {
        case 'Strongly Disagree':
          feedbackMessage = 'Literature and arts might not be your cup of tea, and that\'s okay!';
          break;
        case 'Disagree':
          feedbackMessage = 'Not a big fan of literature? No worries!';
          break;
        case 'Either Agree or Disagree':
          feedbackMessage = 'You have a balanced view of literature and arts.';
          break;
        case 'Agree':
          feedbackMessage = 'You appreciate literature and arts. A true intellectual!';
          break;
        case 'Strongly Agree':
          feedbackMessage = 'Literature and arts are your passion! Wonderful!';
          break;
      }
      break;
    case 2:
      switch (selectedValue) {
        case 'Strongly Disagree':
          feedbackMessage = 'Solving complex problems might not be your thing, and that\'s okay!';
          break;
        case 'Disagree':
          feedbackMessage = 'Not a big fan of complex problems? No worries!';
          break;
        case 'Either Agree or Disagree':
          feedbackMessage = 'Balancing complexity and simplicity!';
          break;
        case 'Agree':
          feedbackMessage = 'You enjoy solving complex problems and puzzles. A true problem solver!';
          break;
        case 'Strongly Agree':
          feedbackMessage = 'Master of complexity! You tackle problems head-on.';
          break;
      }
      break;
    case 3:
      switch (selectedValue) {
        case 'Strongly Disagree':
          feedbackMessage = 'Expressing through art might not be your forte, and that\'s okay!';
          break;
        case 'Disagree':
          feedbackMessage = 'Artistic expression not your preference? No worries!';
          break;
        case 'Either Agree or Disagree':
          feedbackMessage = 'Finding the balance between creativity and structure!';
          break;
        case 'Agree':
          feedbackMessage = 'You enjoy working on creative projects and expressing yourself through art. A true artist!';
          break;
        case 'Strongly Agree':
          feedbackMessage = 'Artistic soul! Your creativity knows no bounds.';
          break;
      }
      break;
    case 4:
      switch (selectedValue) {
        case 'Strongly Disagree':
          feedbackMessage = 'Helping others might not be your top priority, and that\'s okay!';
          break;
        case 'Disagree':
          feedbackMessage = 'Not a big fan of community impact? No worries!';
          break;
        case 'Either Agree or Disagree':
          feedbackMessage = 'Balancing personal and community goals!';
          break;
        case 'Agree':
          feedbackMessage = 'You find joy in helping others and making a positive impact in the community. A true altruist!';
          break;
        case 'Strongly Agree':
          feedbackMessage = 'Community champion! Your impact is boundless.';
          break;
      }
      break;
    case 5:
      switch (selectedValue) {
        case 'Strongly Disagree':
          feedbackMessage = 'Scientific principles might not be your cup of tea, and that\'s okay!';
          break;
        case 'Disagree':
          feedbackMessage = 'Not a big fan of science? No worries!';
          break;
        case 'Either Agree or Disagree':
          feedbackMessage = 'Balancing curiosity and practicality!';
          break;
        case 'Agree':
          feedbackMessage = 'You are interested in exploring scientific principles and conducting experiments. A budding scientist!';
          break;
        case 'Strongly Agree':
          feedbackMessage = 'Science enthusiast! You see the world through a scientific lens.';
          break;
      }
      break;
    case 6:
      switch (selectedValue) {
        case 'Strongly Disagree':
          feedbackMessage = 'Strategic business decisions might not be your thing, and that\'s okay!';
          break;
        case 'Disagree':
          feedbackMessage = 'Not a big fan of business strategy? No worries!';
          break;
        case 'Either Agree or Disagree':
          feedbackMessage = 'Balancing creativity and strategy in business!';
          break;
        case 'Agree':
          feedbackMessage = 'You are interested in understanding how businesses operate and making strategic decisions. A future business leader!';
          break;
        case 'Strongly Agree':
          feedbackMessage = 'Business mogul in the making! Your strategic mind is unmatched.';
          break;
      }
      break;
    case 7:
      switch (selectedValue) {
        case 'Strongly Disagree':
          feedbackMessage = 'Programming might not be your forte, and that\'s okay!';
          break;
        case 'Disagree':
          feedbackMessage = 'Not a big fan of coding? No worries!';
          break;
        case 'Either Agree or Disagree':
          feedbackMessage = 'Balancing creativity and technical skills in programming!';
          break;
        case 'Agree':
          feedbackMessage = 'You enjoy programming and developing software applications. A coding virtuoso!';
          break;
        case 'Strongly Agree':
          feedbackMessage = 'Coding maestro! Your programs speak volumes.';
          break;
      }
      break;
    case 8:
      switch (selectedValue) {
        case 'Strongly Disagree':
          feedbackMessage = 'Environmental issues might not be your top concern, and that\'s okay!';
          break;
        case 'Disagree':
          feedbackMessage = 'Not a big fan of environmental awareness? No worries!';
          break;
        case 'Either Agree or Disagree':
          feedbackMessage = 'Balancing personal and environmental priorities!';
          break;
        case 'Agree':
          feedbackMessage = 'You have a passion for environmental issues and sustainability. A guardian of the planet!';
          break;
        case 'Strongly Agree':
          feedbackMessage = 'Eco-warrior! Your commitment to the environment is commendable.';
          break;
      }
      break;
    case 9:
      switch (selectedValue) {
        case 'Strongly Disagree':
          feedbackMessage = 'Staying updated on technology might not be your priority, and that\'s okay!';
          break;
        case 'Disagree':
          feedbackMessage = 'Not a big fan of keeping up with technology trends? No worries!';
          break;
        case 'Either Agree or Disagree':
          feedbackMessage = 'Balancing tradition and technology in your interests!';
          break;
        case 'Agree':
          feedbackMessage = 'You enjoy working with technology and staying updated on the latest advancements. A tech enthusiast!';
          break;
        case 'Strongly Agree':
          feedbackMessage = 'Tech guru! Your knowledge of the latest tech is impressive.';
          break;
      }
      break;
    case 10:
      switch (selectedValue) {
        case 'Strongly Disagree':
          feedbackMessage = 'Exploring different cultures might not be your top interest, and that\'s okay!';
          break;
        case 'Disagree':
          feedbackMessage = 'Not a big fan of cultural exploration? No worries!';
          break;
        case 'Either Agree or Disagree':
          feedbackMessage = 'Balancing familiarity and cultural diversity!';
          break;
        case 'Agree':
          feedbackMessage = 'You like exploring different cultures and learning about historical events. A cultural enthusiast!';
          break;
        case 'Strongly Agree':
          feedbackMessage = 'Cultural connoisseur! Your appreciation for diversity is inspiring.';
          break;
      }
      break;
    case 11:
      switch (selectedValue) {
        case 'Strongly Disagree':
          feedbackMessage = 'Conducting research might not be your top interest, and that\'s okay!';
          break;
        case 'Disagree':
          feedbackMessage = 'Not a big fan of research and data analysis? No worries!';
          break;
        case 'Either Agree or Disagree':
          feedbackMessage = 'Balancing intuition and evidence in your decision-making!';
          break;
        case 'Agree':
          feedbackMessage = 'You enjoy conducting research and analyzing data to draw meaningful conclusions. A research enthusiast!';
          break;
        case 'Strongly Agree':
          feedbackMessage = 'Research guru! Your analytical skills are commendable.';
          break;
      }
      break;
    case 12:
      switch (selectedValue) {
        case 'Strongly Disagree':
          feedbackMessage = 'Expressing yourself through writing or public speaking might not be your top strength, and that\'s okay!';
          break;
        case 'Disagree':
          feedbackMessage = 'Not a big fan of writing or public speaking? No worries!';
          break;
        case 'Either Agree or Disagree':
          feedbackMessage = 'Balancing verbal and written communication skills!';
          break;
        case 'Agree':
          feedbackMessage = 'You have a talent for and enjoy expressing yourself through writing or public speaking. A persuasive communicator!';
          break;
        case 'Strongly Agree':
          feedbackMessage = 'Orator extraordinaire! Your words have power.';
          break;
      }
      break;
    case 13:
      switch (selectedValue) {
        case 'Strongly Disagree':
          feedbackMessage = 'Finance and investment might not be your top fascination, and that\'s okay!';
          break;
        case 'Disagree':
          feedbackMessage = 'Not a big fan of financial matters? No worries!';
          break;
        case 'Either Agree or Disagree':
          feedbackMessage = 'Balancing financial responsibility and freedom!';
          break;
        case 'Agree':
          feedbackMessage = 'You are fascinated by the world of finance and investment. A financial maestro!';
          break;
        case 'Strongly Agree':
          feedbackMessage = 'Financial wizard! Your understanding of finance is impressive.';
          break;
      }
      break;
    case 14:
      switch (selectedValue) {
        case 'Strongly Disagree':
          feedbackMessage = 'Hands-on activities might not be your top choice, and that\'s okay!';
          break;
        case 'Disagree':
          feedbackMessage = 'Not a big fan of working with tools or machinery? No worries!';
          break;
        case 'Either Agree or Disagree':
          feedbackMessage = 'Balancing practicality and innovation in your projects!';
          break;
        case 'Agree':
          feedbackMessage = 'You enjoy hands-on activities and working with tools or machinery. A hands-on expert!';
          break;
          case 'Strongly Agree':
          feedbackMessage = 'Craftsman extraordinaire! Your skills with tools are commendable.';
          break;
          }
          break;
          case 15:
          switch (selectedValue) {
          case 'Strongly Disagree':
          feedbackMessage = 'Promoting health and well-being might not be your top passion, and that\'s okay!';
          break;
          case 'Disagree':
          feedbackMessage = 'Not a big fan of health advocacy? No worries!';
          break;
          case 'Either Agree or Disagree':
          feedbackMessage = 'Balancing personal and community health priorities!';
          break;
          case 'Agree':
          feedbackMessage = 'You are passionate about promoting health and well-being. A health advocate!';
          break;
          case 'Strongly Agree':
          feedbackMessage = 'Health champion! Your commitment to well-being is inspiring.';
          break;
          }
          break;
          case 16:
          switch (selectedValue) {
          case 'Strongly Disagree':
          feedbackMessage = 'Planning and organizing might not be your top interest, and that\'s okay!';
          break;
          case 'Disagree':
          feedbackMessage = 'Not a big fan of event planning? No worries!';
          break;
          case 'Either Agree or Disagree':
          feedbackMessage = 'Balancing creativity and organization in your projects!';
          break;
          case 'Agree':
          feedbackMessage = 'You enjoy planning and organizing events or projects. An event maestro!';
          break;
          case 'Strongly Agree':
          feedbackMessage = 'Master organizer! Your events are seamless and memorable.';
          break;
          }
          break;
          case 17:
          switch (selectedValue) {
          case 'Strongly Disagree':
          feedbackMessage = 'The human mind and behavior might not be your top fascination, and that\'s okay!';
          break;
          case 'Disagree':
          feedbackMessage = 'Not a big fan of psychology? No worries!';
          break;
          case 'Either Agree or Disagree':
          feedbackMessage = 'Balancing empathy and logic in understanding behavior!';
          break;
          case 'Agree':
          feedbackMessage = 'You are fascinated by the human mind and behavior. A psychology enthusiast!';
          break;
          case 'Strongly Agree':
          feedbackMessage = 'Psychology guru! Your insights into human behavior are commendable.';
          break;
          }
          break;
          case 18:
          switch (selectedValue) {
          case 'Strongly Disagree':
          feedbackMessage = 'Working with animals and connecting with nature might not be your top interest, and that\'s okay!';
          break;
          case 'Disagree':
          feedbackMessage = 'Not a big fan of animals and nature? No worries!';
          break;
          case 'Either Agree or Disagree':
          feedbackMessage = 'Balancing urban and natural lifestyles!';
          break;
          case 'Agree':
          feedbackMessage = 'You enjoy working with animals and have a strong connection with nature. A nature enthusiast!';
          break;
          case 'Strongly Agree':
          feedbackMessage = 'Nature lover! Your connection with the environment is heartwarming.';
          break;
          }
          break;
          case 19:
          switch (selectedValue) {
          case 'Strongly Disagree':
          feedbackMessage = 'The world of fashion and design might not be your top fascination, and that\'s okay!';
          break;
          case 'Disagree':
          feedbackMessage = 'Not a big fan of fashion and design? No worries!';
          break;
          case 'Either Agree or Disagree':
          feedbackMessage = 'Balancing style and comfort in your preferences!';
          break;
          case 'Agree':
          feedbackMessage = 'You are interested in the world of fashion and design. A style connoisseur!';
          break;
          case 'Strongly Agree':
          feedbackMessage = 'Fashionista! Your sense of style is unmatched.';
          break;
          }
          break;
          default:
          feedbackMessage = 'You selected: ' + selectedValue;
          }
          
          feedbackElement.textContent = feedbackMessage;
          nextButton.disabled = false;
          }

    function nextQuestion() {
      currentQuestionIndex++;
      if (currentQuestionIndex < quizData.length) {
        displayQuestion();
      } else {
        // Find top 3 strands
        const topStrands = Object.keys(scores).sort((a, b) => scores[b] - scores[a]).slice(0, 3);

        let result = '<h2>Your Top 3 Strands:</h2>';
        topStrands.forEach((strand, index) => {
          result += `<p>${index + 1}. ${strand}: ${scores[strand]} points</p>`;
        });

        document.getElementById('result').innerHTML = result;

        // Disable next button after quiz completion
        nextButton.disabled = true;
      }
    }

    // Initial display
    displayQuestion();

    // Add event listener to the next button
    nextButton.addEventListener('click', nextQuestion);
  });