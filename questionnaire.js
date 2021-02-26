const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
/*const progressText = document.querySelector('#progressText');*/
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {}
let acceptingAnswers = setRequestHeader
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions = [
  {
  question: 'which of the following is the major inhibitory neurotransmitter in the brainstem and spinal cord?',
  choice1: 'Glycine',/*correct*/
  choice2: 'Aspartate',
  choice3: 'Dopamine',
  choice4: 'Enkephalin',
  answer: Glycine
  },

  {
  question: 'Cocaine addiction is related to which brain area',
  choice1: 'Nucleus Accumbens',/*correct*/
  choice2: 'Ventral Tegmental Area',
  choice3: 'Frontal Cortex',
  choice4: 'Ventral Pallidum',
  answer: Nucleus Accumbens
  },

  {
  question: 'Which neurotransmitter pathway projects through the prefrontal cortex?',
  choice1: 'The acetylcholine pathway',
  choice2: 'The dopamine pathway',/*correct*/
  choice3: 'The norepinephrine pathway',
  choice4: 'Ventral Pallidum',
  answer: The dopamine pathway
  },

{
  question: 'Which of the following is the main inhibitory neurotransmitter in the adult brain?',
  choice1: 'Glycine',
  choice2: 'GABA',/*correct*/
  choice3: 'Serotonin',
  choice4: 'Acetylcholine',
  answer: GABA
},

{
  question: 'Which of the following drugs do not affect the nucleus accumbens?',
  choice1: 'Amphetamines',
  choice2: 'Cocaine',
  choice3: 'Cannabis',
  choice4: 'Nicotine', /*correct*/
  answer: Nicotine
},

{
  question: ' Which of the following is a role of norepinephrine?',
  choice1: 'Emotional processing',
  choice2: 'Psychosis', /*correct*/
  choice3: 'Movement',
  choice4: 'Pain',
  answer: Psychosis
},
]

const SCORE_points = 100
const MAX_QUESTIONS = 4

startGame = () => {
  questionCounter = 0
  score = 0
  availableQuestions = [...questions]
  getNewQuestion()
  }

getNewQuestion = () => {
  if(availableQuestions.length === 0 || questionCounter > MAX_QUESTION) {
    localStorage.setItem('mostRecentScore', score)

    return window.location.assign(/'end.html')
  }

  questionsCounter++
  progressText.innerText = 'Question ${questionCounter} of ${MAX_QUESTIONS}'
  /*progressBarFull.style.width = ${(questionCounter/MAX_QUESTIONS) * 100}%*/

  const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
  currentQuestion = availableQuestions[questionIndex]
  question.innerText = currentQuestion.question

  choice.forEach(choice => {
    const number = choice.dataset['number']
    choice.innerText = currentQuestion['choice' + number]
  })

  availableQuestions.splice(questionsIndex, 1)

  acceptingAnswers = true
}
  choices.forEach(choice +> {
    choice.addEventListener('click', e => {
      if(!acceptingAnswers) return

      acceptingAnswers = false
      const selectedChoice = e.target
      const selectedAnswer = selectedChoice.dataset['number']

      let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' :
      'incorrect'

      if(classToApply === 'correct') {
        incrementScore(Score_POINTS)
      }

      selectedChoice.parentElement.classList.add(classToApply)

      setTimeout(() => {
        selectedChoice.parentElement.classList.remove(classToApply)
        getNewQuestion()
      }, 1000)
    })
  })

  incrementScore = num => {
    score +=num
    scoreText.innerText = score
  }

startQuestionnaire()
