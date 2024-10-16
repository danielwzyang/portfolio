---
title: apcsa solutions
date: september 2024
desc: solutions website using HTML, JS, TailwindCSS, Python, and highlight.js
link: https://danielwzyang.github.io/apcsa-solutions/
github: https://github.com/danielwzyang/apcsa-solutions
posted: 10.15.24
---
I'm currently taking APCSA as of writing this, and my teacher assigns a lot of codingbat problems to practice Java. I already know Java, so I decided to try to help my friends by sharing all the solutions as well as explanations to their logic. After building the website, I contacted my teacher to ask her if it was okay for me to share it if I released the solutions after their due dates. Unfortunately, I wasn't allowed to and the website is no longer being updated, but it helped me practice my basic web building skills. 
<br><br>
The website is built with HTML and styled with TailwindCSS. I stored all the solutions in a folder of .txt files, and I wrote a script called build.py which converts those files into .html files using a template. The solution is written in the .txt file and is styled using highlight.js. 
<br><br>
The .txt files also store the problem link and its description at the top. The link is stored between tildes and the description is stored between pound signs, so the script uses regex to find them. It then puts it into the template file, which stores a basic skeleton with brackets like [title] and [code] that are replaced with data.  The script also updates the solutions.json file which stores an array of the problem names. I use this list in the homepage to display links to all of the problems, and I implemented a basic search bar as well.