
|||challenge
On the left hand side, we have some code but the maze is not initialising properly.

Your job is to fix the code on the left so the maze displays correctly. You must use variables and not insert values into the function call arguments.

{Check it!!|custom}(js-3)
|||

|||guidance
## Solution
The problem here is that the command `createEmptyMaze(width, height)` is using a variable called `width` but it has not been defined. We defined `mazeWidth` instead.

- You either have to change `mazeWidth = 10` to `width = 10`
- Or change `createEmptyMaze(width, height)` to `createEmptyMaze(mazeWidth, height)`
