# Find the number

Build a function "exists" that find out if a number exists in a given list of numbers

steps:

1. create a new branch
2. ask Felipe @gelipundio to give you access to the repository as collaborator
3. install node modules npm install
4. create a file called solution.js
5. export a function called "exists"
6. code your solution inside "exosts" function
7. test your solution with the command `npm run test`
8. once your solution is working fine, push your branch (do not create Pull Request)

Constraints:
1. the list is not in order

Example: you are going to get an input like:
```
  [34, 23, 5, 342, 3, 12, 45], 3
```

When you run your solution with the input:
```
  find([34, 23, 5, 342, 3, 12, 45], 3)
```

Your solution must to return a boolean value, example:
```
  find([34, 23, 5, 342, 3, 12, 45], 3) // true
```
```
  find([34, 23, 5, 342, 3, 12, 45], 10) // false
```

Hints:
1. do you know the importance to sort data?
2. do you know bubble sort?
3. do you know binary search?
