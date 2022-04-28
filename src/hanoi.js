function calculateTurn(disksNumber) {
    function oneTurn(n) {
        return (n - 1) * 2 + 1;
    }   
    let count = 3;
    for (let i = 0; i < disksNumber - 2; i++) {
        count = count * 2 + 1;
    }
    return count;
}
console.log(calculateTurn(4));
console.log(calculateTurn(9) * 3600 / 4308);
function calculateHanoi(disksNumber, turnsSpeed) {
    // throw new NotImplementedError('Not implemented');
    function calculateTurn(disksNumber) {   
      let count = 3;
      for (let i = 0; i < disksNumber - 2; i++) {
          count = count * 2 + 1;
      }
      return count;
    }
    const turnsPerSecond = 3600 / turnsSpeed;
    return { turns: calculateTurn(disksNumber), turnsSpeed: Math.floor(calculateTurn(disksNumber) * turnsPerSecond)}
}
  console.log(calculateHanoi(9, 4308))