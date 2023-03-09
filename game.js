// Score 64 (simple game):
const frames = [
  [2, 0],
  [4, 2],
  [6, 0],
  [2, 4],
  [1, 5],
  [7, 0],
  [5, 2],
  [7, 0],
  [2, 6],
  [8, 1],
]

// Score 119 (with spares, strikes and a double strike):
// const frames = [ // [1, 2], [6, 4], [5, 4], [10, 0], [7, 2], [10, 0], [10, 0], [5, 2], [7, 0], [4, 4] // ]

// Score 300 (perfect game):
// const frames = [ // [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 10, 10] // ]

let score = 0

function scoreGame(frames) {
  let firstBall = 0
  let secondBall = 1
  for (let i = 0; i < frames.length; i++) {
    score += frames[i][firstBall] + frames[i][secondBall]
  }
}

scoreGame(frames)
console.log(score)
