|||challenge
This time we want you to do the following

1. Create variables for the maze width and maze height and assign them values of 10 and 8.
1. Create an empty maze with these 2 variables.
1. Create a variable for the number of monsters.
1. Create the monsters using this variable as the argument.
1. Create another single variable and assign it a value for the number of energies and walls you want to create.
1. Now create the energies and walls using this one variable.
1. Add a player.

Test it all out and press the button below once you have it working.

{Check it!!|custom}(js-5)

|||


|||guidance
## Solution

```javascript
width = 10
height = 8
createEmptyMaze(width, height)

numMonsters = 2
addRandomMonsters(numMonsters)

numOthers = 3
addRandomEnergies(numOthers)
addRandomWalls(numOthers)
addPlayer()
```

|||