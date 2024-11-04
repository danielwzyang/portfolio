---
title: minionese
date: october 2024
desc: an interpreted language from scratch written in Java, including the lexer and the parser.
github: https://github.com/danielwzyang/minionese
posted: 11.3.24
---
I've loved minions ever since I saw the first Despicable Me movie, and their speech was my favorite part about them. Their language is a mix of gibberish and a bunch of different languages, making it sound alien yet familiar. I decided to create my own programming language based on this language.
<br><br>
In order to do this, I decided to use Java since I didn't have many Java projects and it seemed like a good way for me to get better at it. I decided to make an interpreter instead of a compiler. There are three steps to my interpreter: lexing, parsing, and evaluating.
<br><br>
The lexer works using Regular Expressions, and I have a set of matching groups that match for different tokens like numbers, identifiers, and operations. Based on what gets matched, the lexer creates a new token and stores it with its corresponding type. There are also certain keywords that have their own special token types, and I handle this in the lexer as well. For example, the "la" keyword is the keyword to define variables.
<br><br>
The parser then goes through the list of tokens and converts them into statements and expressions to create an Abstract Syntax Tree. There are a ton of different statements like return statements and declarations, as well as expressions like binary expressions and call expressions. Based on the type and order of tokens, the parser determines what type of statement / expression needs to be created. The expression parsing follows an order of precedence where some expressions are evaluated before others. For example, multiplication is evaluated before addition.
<br><br>
For evaluation, every statement and expression has its own evaluate function. This evaluate function takes in an environment, which is an object that stores the variables in that scope. An environment can have parent environments if its a nested scope, and it can access variables from an ancestor environment. The evaluate function evaluates the statements and expressions using the environment provided and returns an object that stores the runtime value. These runtime values can have operations, for example number values have a list of possible operations. These runtime values are what allows the language to work.
<br><br>
I also implemented some cool features like user defined methods, conditionals, loops, arrays, objects, and maps. All the documentation is on the github repo!