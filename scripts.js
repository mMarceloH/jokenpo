const result = document.querySelector('.result')
const humanScore = document.querySelector('#human-score')
const machineScore = document.querySelector('#machine-score')
const round = document.querySelector('#round')

let humanScoreNumber = 0
let machineScoreNumber = 0
let roundNumber = 0

const playHuman = (humanChoice) => {

    playTheGame(humanChoice, playMachine())
    roundNumber ++
    round.innerHTML = roundNumber 
}

const playMachine = () => {
    const choices = ['rock', 'paper', 'scissor']
    const randonNumber = Math.floor(Math.random() * 3)

    return choices[randonNumber]
}

const playTheGame = (human, machine) => {

    console.log('H ' + human + 'M' + machine)

    if (human === machine) {
        result.innerHTML = "deu empate!"
    } else if (
        human === 'paper' && machine === 'rock' ||
        human === 'rock' && machine == 'scissor' ||
        human === 'scissor' && machine === 'paper') {

        humanScoreNumber ++
        humanScore.innerHTML = humanScoreNumber
        result.innerHTML = "você venceu Gon nessa rodada!"

    } else {
        machineScoreNumber ++
        machineScore.innerHTML = machineScoreNumber
        result.innerHTML = "Gon venceu essa rodada!"
    }
}