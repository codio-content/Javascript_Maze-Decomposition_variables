
{Check It!|assessment}(test-1003964149)

|||guidance
## Solution
The problem here is that the command `createEmptyMaze(width, height)` is using a variable called `width` but it has not been defined. We defined `mazeWidth` instead.

- You either have to change `mazeWidth = 10` to `width = 10`
- Or change `createEmptyMaze(width, height)` to `createEmptyMaze(mazeWidth, height)`
