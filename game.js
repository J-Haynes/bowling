// Score 64 (simple game):
// const frames = [
//   [2, 0],
//   [4, 2],
//   [6, 0],
//   [2, 4],
//   [1, 5],
//   [7, 0],
//   [5, 2],
//   [7, 0],
//   [2, 6],
//   [8, 1],
// ]

// Score 119 (with spares, strikes and a double strike):
// const frames = [
//   [1, 2],
//   [6, 4],
//   [5, 4],
//   [10, 0],
//   [7, 2],
//   [10, 0],
//   [10, 0],
//   [5, 2],
//   [7, 0],
//   [4, 4],
// ]

// Score 71 (with spares):
// const frames = [
//   [6, 1],
//   [4, 0],
//   [6, 4],
//   [2, 7],
//   [3, 5],
//   [5, 0],
//   [5, 5],
//   [0, 0],
//   [1, 6],
//   [7, 2],
// ]

// Score 300 (perfect game):
const frames = [
  [10, 0],
  [10, 0],
  [10, 0],
  [10, 0],
  [10, 0],
  [10, 0],
  [10, 0],
  [10, 0],
  [10, 0],
  [10, 10, 10],
]

let score = 0

function scoreGame(frames) {
  let firstBall = 0
  let secondBall = 1
  for (let i = 0; i < frames.length - 2; i++) {
    score += frames[i][firstBall] + frames[i][secondBall]
    // strikes and double strikes
    if (frames[i][firstBall] === 10) {
      score += frames[i + 1][firstBall]
      if (frames[i + 1][firstBall] === 10) {
        score += frames[i + 2][firstBall]
      } else {
        score += frames[i + 1][secondBall]
      }
    }
    // spares
    else if (
      frames[i][firstBall] + frames[i][secondBall] === 10 &&
      frames[i][firstBall] != 10
    ) {
      score += frames[i + 1][firstBall]
    }
  }
  // scoring frames 9 & 10
  score += frames[8][firstBall] + frames[8][secondBall]
  if (frames[8][firstBall] === 10) {
    score += frames[9][firstBall] + frames[9][secondBall]
  } else if (
    frames[8][firstBall] + frames[8][secondBall] === 10 &&
    frames[8][firstBall] != 10
  ) {
    score += frames[9][firstBall]
  }

  score += frames[9][firstBall] + frames[9][secondBall]

  if (frames[9].length === 3) {
    score += frames[9][2]
  }
}

scoreGame(frames)
console.log(score)
