const finalPosition = function(moves){
  let pos = [0 , 0];
  for(let i in moves){
    switch (moves[i]){
      case 'north':
        pos[1]++;
        break;
      case 'south':
        pos[1]--;
        break;
      case 'east':
        pos[0]++;
        break;
      case 'west':
        pos[0]--;
        break;
      default:
        break;
    }
  }
  return pos;
}

const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

console.log(finalPosition(moves));
