var nextData = [
  [0, 2, 0, 0],
  [0, 2, 2, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
];
var gameData = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 2, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 2, 0, 0],
  [0, 0, 0, 0, 0, 2, 2, 2, 0, 0],
  [0, 0, 0, 1, 1, 1, 1, 1, 0, 0],
]
var nextDivs = [];
var gameDivs = [];
var initGame = () => {
  for(var i = 0; i < gameData.length; i++){
    var gameDiv = [];
    for(var j = 0; j < gameData[0].length; j++){
      var node = document.createElement('div');
      node.className = 'none';
      node.style.top = (i * 20) + 'px'; 
      node.style.left = (j * 20) + 'px';
      document.getElementById('game').appendChild(node);
      gameDiv.push(node); 
    };
    gameDivs.push(gameDiv);
  }
}
var initNext = () => {
  for(var i = 0; i < nextData.length; i++){
    var nextDiv = [];
    for(var j = 0; j < nextData[0].length; j++){
      var node = document.createElement('div');
      node.className = 'none';
      node.style.top = (i * 20) + 'px'; 
      node.style.left = (j * 20) + 'px';
      document.getElementById('game').appendChild(node);
      nextDiv.push(node); 
    };
    nextDivs.push(nextDiv);
  }
}
var refreshGame = () => {
  for(var i = 0; i < gameData.length; i++){
    for(var j = 0; j< gameData[0].length; j++){
      if(gameData[i][j] === 0){
        gameDivs[i][j].className = 'none';
      }else if(gameData[i][j] === 1){
        gameDivs[i][j].className = 'done';
      }else if(gameData[i][j] === 2){
        gameDivs[i][j].className = 'current';
      }
    }
  }
}
var refreshNext = () => {
  for(var i = 0; i < nextData.length; i++){
    for(var j = 0; j< nextData[0].length; j++){
      if(nextData[i][j] === 0){
        nextDivs[i][j].className = 'none';
      }else if(nextData[i][j] === 1){
        nextDivs[i][j].className = 'done';
      }else if(nextData[i][j] === 2){
        nextDivs[i][j].className = 'current';
      }
    }
  }
}
initGame();
initNext();
refreshGame();
refreshNext();