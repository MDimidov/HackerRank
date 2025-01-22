/* 
You will be provided with a block of text, spanning not more than hundred lines. Your task is to find the unique e-mail addresses present in the text. You could use Regular Expressions to simplify your task. And remember that the "@" sign can be used for a variety of purposes! Requirements are simplified versus real world. There can be a number of strings separated by dots before and after the "@" symbol. Strings will be made up of characters in the ranges a-z, A-Z, 0-9, _ (underscore).

Input Format

The first line contains an integer N (N<=100), which is the number of lines present in the text fragment which follows.
From the second line, begins the text fragment (of N lines) in which you need to search for e-mail addresses.

Output Format

All the unique e-mail addresses detected by you, in one line, in lexicographical order, with a semi-colon as the delimiter.
*/

function processData(input) {
  //Enter your code here

  const pattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/g;
  let matches = input.match(pattern);

  matches.sort();
  let result = [...new Set(matches)];
  console.log(result.join(";"));
}

let input =
  " product@hackerrank.com hackers@hackerrank.com interviewstreet@hackerrank.com product@hackerrank.com";
processData(input);
