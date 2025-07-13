//*

Coding Exercise: Decoding a Secret Message
In this exercise, you will write code to solve a problem. Your code must 
be in Python (preferred), JavaScript, TypeScript, Java, Kotlin, C#, C++, 
Go, Rust, Swift or Ruby—solutions in other languages will not be accepted! 
You can write your code using any IDE you want.

Problem
You are given a published Google Doc like this one that contains a list of 
Unicode characters and their positions in a 2D grid. Your task is to write 
a function that takes in the URL for such a Google Doc as an argument, 
retrieves and parses the data in the document, and prints the grid of 
characters. When printed in a fixed-width font, the characters in the grid 
will form a graphic showing a sequence of uppercase letters, which is the 
secret message.

The document specifies the Unicode characters in the grid, along with the 
x- and y-coordinates of each character.

The minimum possible value of these coordinates is 0. There is no maximum 
possible value, so the grid can be arbitrarily large.

Any positions in the grid that do not have a specified character should be 
filled with a space character.

You can assume the document will always have the same format as the 
example document linked above.

For example, the simplified example document linked above draws out the 
letter 'F':

*//

// Example usage
decodeGrid('https://docs.google.com/document/d/e/2PACX-1vTER-wL5E8YC9pxDx43gk8eIds59GtUUk4nJo_ZWagbnrH0NFvMXIw6VWFLpf5tWTZIT9P9oLIoFJ6A/pub');

//example doc
https://docs.google.com/document/d/e/2PACX-1vTER-wL5E8YC9pxDx43gk8eIds59GtUUk4nJo_ZWagbnrH0NFvMXIw6VWFLpf5tWTZIT9P9oLIoFJ6A/pub
