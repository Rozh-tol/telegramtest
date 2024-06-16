const startGameBtn = document.querySelector('.mainscreen__btn');
const mainScreen = document.querySelector('.mainscreen');
const gameScreen = document.querySelector('.game');
const chooseBtns = document.querySelectorAll('.game-choose__item');
const chooseItems = document.querySelector('.game-choose');
const aiItem = document.querySelector('.game-default');
const gameResult = document.querySelector('.game__title');
const playAgain = document.querySelector('.game__again');
const backBtn = document.querySelector('.game__back');

// choose btns
const rockBtn = document.querySelector('.choose__item_rock');
const paperBtn = document.querySelector('.choose__item_paper');
const scissorsBtn = document.querySelector('.choose__item_scissors');

// player btns
const playerRockBtn = document.querySelector('.game-player__rock');
const playerPaperBtn = document.querySelector('.game-player__paper');
const playerScissorsBtn = document.querySelector('.game-player__scissors');

// ai btns
const aiRockBtn = document.querySelector('.game-ai__rock');
const aiPaperBtn = document.querySelector('.game-ai__paper');
const aiScissorsBtn = document.querySelector('.game-ai__scissors');

function rps(choice) {
  let arr = ['rock', 'paper', 'scissors'];
  let rock = arr[0]
  let paper = arr[1]
  let scissors = arr[2]
  let result = Math.floor(Math.random() * arr.length);
  if (arr[result] === 'rock' && choice === 'scissors') {
    gameResult.textContent = `ТЫ ПРОИГРАЛ :(`
    gameResult.classList.remove('hidden')
    playAgain.classList.remove('hidden');
   /*  console.log(`Вы проиграли, компьютер вырал ${arr[result]}`) */
    return aiRockBtn.classList.remove('swiped-up')
  }
  if (arr[result] === 'rock' && choice === 'paper') {
    gameResult.textContent = `ТЫ ПОБЕДИЛ!`
    gameResult.classList.remove('hidden');
    playAgain.classList.remove('hidden');
    /* console.log(`Вы выйграли, компьютер выбрал ${arr[result]}`) */
    return aiRockBtn.classList.remove('swiped-up')
  }
  if (arr[result] === 'paper' && choice === 'scissors') {
    gameResult.textContent = `ТЫ ПОБЕДИЛ!`
    gameResult.classList.remove('hidden');
    playAgain.classList.remove('hidden');
  /*   console.log(`Вы выйграли, компьютер выбрал ${arr[result]}`) */
    return aiPaperBtn.classList.remove('swiped-up')
  }
  if (arr[result] === 'paper' && choice === 'rock') {
    gameResult.textContent = `ТЫ ПРОИГРАЛ :(`
    gameResult.classList.remove('hidden');
    playAgain.classList.remove('hidden');
  /*   console.log(`Вы проиграли, компьютер вырал ${arr[result]}`) */
    return aiPaperBtn.classList.remove('swiped-up')
  }
    if (arr[result] === 'scissors' && choice === 'paper') {
      gameResult.textContent = `ТЫ ПРОИГРАЛ :(`
      gameResult.classList.remove('hidden');
      playAgain.classList.remove('hidden');
/*     console.log(`Вы проиграли, компьютер вырал ${arr[result]}`) */
    return aiScissorsBtn.classList.remove('swiped-up')
  }
  if (arr[result] === 'scissors' && choice === 'rock') {
    gameResult.textContent = `ТЫ ПОБЕДИЛ!`
    gameResult.classList.remove('hidden');
    playAgain.classList.remove('hidden');
/*     console.log(`Вы выйграли, компьютер выбрал ${arr[result]}`) */
    return aiScissorsBtn.classList.remove('swiped-up')
  }
  if (arr[result] === 'scissors' && choice === 'scissors') {
    gameResult.textContent = `НИЧЬЯ`
    gameResult.classList.remove('hidden');
    playAgain.classList.remove('hidden');
/*     console.log(`Ничья!`) */
    return aiScissorsBtn.classList.remove('swiped-up')
  }
  if (arr[result] === 'rock' && choice === 'rock') {
    gameResult.textContent = `НИЧЬЯ`
    gameResult.classList.remove('hidden');
    playAgain.classList.remove('hidden');
  /*   console.log(`Ничья!`) */
    return aiRockBtn.classList.remove('swiped-up')
  }
  if (arr[result] === 'paper' && choice === 'paper') {
  /*   console.log(`Ничья!`) */
  gameResult.textContent = `НИЧЬЯ`
  gameResult.classList.remove('hidden');
  playAgain.classList.remove('hidden');
    return aiPaperBtn.classList.remove('swiped-up')
  }
}

const openGame = () => {
  gameScreen.classList.remove('hidden');
  aiItem.classList.remove('swiped-up');
  chooseItems.classList.remove('swiped-down');
  backBtn.classList.remove('hidden');
}

const closeGame = () => {
  if (!gameScreen.classList.contains('hidden')) {
    gameScreen.classList.add('hidden')
  }
  if (!aiItem.classList.contains('swiped-up')) {
    aiItem.classList.add('swiped-up')
  }
  if (!chooseItems.classList.contains('swiped-down')) {
    chooseItems.classList.add('swiped-down')
  }
  if (!playerRockBtn.classList.contains('swiped-down')) {
    playerRockBtn.classList.add('swiped-down')
  }
  if (!playerPaperBtn.classList.contains('swiped-down')) {
    playerPaperBtn.classList.add('swiped-down')
  }
  if (!playerScissorsBtn.classList.contains('swiped-down')) {
    playerScissorsBtn.classList.add('swiped-down')
  }
  if (!aiScissorsBtn.classList.contains('swiped-up')) {
    aiScissorsBtn.classList.add('swiped-up')
  }
  if (!aiRockBtn.classList.contains('swiped-up')) {
    aiRockBtn.classList.add('swiped-up')
  }
  if (!aiPaperBtn.classList.contains('swiped-up')) {
    aiPaperBtn.classList.add('swiped-up')
  }
  if (!gameResult.classList.contains('hidden')) {
    gameResult.classList.add('hidden')
  }
  if (!playAgain.classList.contains('hidden')) {
    playAgain.classList.add('hidden')
  }
  if (!backBtn.classList.contains('hidden')) {
    backBtn.classList.add('hidden')
  }
}

startGameBtn.addEventListener('click', openGame)
backBtn.addEventListener('click', closeGame)

playAgain.addEventListener('click', () => {
  if (!gameScreen.classList.contains('hidden')) {
    gameScreen.classList.add('hidden')
  }
  if (!aiItem.classList.contains('swiped-up')) {
    aiItem.classList.add('swiped-up')
  }
  if (!chooseItems.classList.contains('swiped-down')) {
    chooseItems.classList.add('swiped-down')
  }
  if (!playerRockBtn.classList.contains('swiped-down')) {
    playerRockBtn.classList.add('swiped-down')
  }
  if (!playerPaperBtn.classList.contains('swiped-down')) {
    playerPaperBtn.classList.add('swiped-down')
  }
  if (!playerScissorsBtn.classList.contains('swiped-down')) {
    playerScissorsBtn.classList.add('swiped-down')
  }
  if (!gameResult.classList.contains('hidden')) {
    gameResult.classList.add('hidden')
  }
  gameScreen.classList.remove('hidden');
  chooseItems.classList.remove('swiped-down');
  playAgain.classList.add('hidden')
}, 1000)

mainScreen.addEventListener('click', closeGame, 1000)

for (let i = 0; i < chooseBtns.length; i++) {
  chooseBtns[i].addEventListener('click', (e) => {
    aiItem.classList.add('swiped-up');
    aiScissorsBtn.classList.add('swiped-up');
    aiRockBtn.classList.add('swiped-up');
    aiPaperBtn.classList.add('swiped-up');
    chooseItems.classList.add('swiped-down');
  })
}

scissorsBtn.addEventListener('click', () => {
  /* console.log(rps('scissors')) */
  rps('scissors')
  playerScissorsBtn.classList.remove('swiped-down')
})

rockBtn.addEventListener('click', () => {
  rps('rock')
  /* console.log(rps('rock')) */
  playerRockBtn.classList.remove('swiped-down')
})

paperBtn.addEventListener('click', () => {
  rps('paper')
  /* console.log(rps('paper')) */
  playerPaperBtn.classList.remove('swiped-down')
})
