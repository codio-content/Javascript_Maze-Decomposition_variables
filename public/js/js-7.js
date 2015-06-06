
// Variable arithmetic - subtraction

createEmptyMaze(16, 8)
numMonsters = 6
numEnergies = numMonsters - 2
numWalls = numEnergies - 1

addRandomMonsters ( numMonsters )
addRandomEnergies ( numEnergies )
addRandomWalls ( numWalls )
addPlayer()
addGoal()