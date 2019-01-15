let userName = '';
userName = 'Jane';
userName ? console.log(`Hello ${userName}`): console.log('Hello!');

let userQuestion = 'Should I leave my current job?';

console.log(`Your question was: ${userQuestion}`)

let randomNumber = Math.floor(Math.random() * 8);

//console.log(randomNumber);
let eightBall = '';

switch (randomNumber)
  {
    case 0:
      eightBall = 'It is certain';
      break;

    case 1:
      eightBall = 'It is decidedly so';
      break;

    case 2:
      eightBall = 'Reply hazy try again';
      break;

    case 3:
      eightBall = 'Do not count on it';
      break;

    case 4:
      eightBall = 'My sources say no';
      break;

    case 5:
      eightBall = 'Outlook not so good';
      break;

    case 6:
      eightBall = 'Signs point to yes';
      break;

    case 7:
      eightBall = 'Cannot predict now';
      break;
  }

console.log(eightBall);
