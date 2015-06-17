Just to really drive variable arithmetic home, we are now going to use the addition approach with variables but this time we are going to do the arithmetic in the function call itself.

## Explanation
Take a look at the code on the left and see what is happening.

1. We are creating a variable called `numMonsters`.
1. `addRandomMonster()` is called passing in `numMonsters` as the argument.
1. `addRandomEnergies()` is called next and interestingly we are now passing in `numMonsters * 2` (=6 energies) as the argument.
1. `addWalls()` is called and we are passing in `numMonsters - 1` (=2 walls) as the argument.

## Play
Play around with this and use all 4 operators to see what happens.

If your values get too large to display in the maze, not everything will get displayed.

- `+` addition
- `-` subtraction
- `*` multiplication
- `/` division (we've not covered that but give it a go anyway)

