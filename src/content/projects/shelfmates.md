---
title: shelfmates
date: august 2024
desc: frontend website using NextJS and TailwindCSS + Amazon web scraper using Python and BS4
link: https://shelfmates.netlify.app/shop
posted: 10.16.24
---
I've recently picked up a love for collectible minifigures, and my shelf is littered with them. At around the same time, I decided I wanted to learn React, so I started with NextJS as my first framework. This is the first website I've ever made with NextJS, and it's also the first one I've made with TailwindCSS. development.
<br><br>
The basic idea was to have a mini "shop" that stored a bunch of cute minifigures. I'm saying shop in quotes since the buy functionality was just a link to Amazon, given that I used this project mainly as a way to learn frontend development. I used a library called Next Client Cookies to store the favorites list, and the card flip animation is uses a library called React Card Flip. I made most of the UI myself but I used NextUI for the price slider.
<br><br>
To get the data for the products, I wrote a scraper.py script that would take an Amazon ID and scrape the site using Beautiful Soup 4 and RegEx to grab the name, price, dimensions, and rating. It would also take in image links from the input. All this data would then be added to a products.json file. If the product info was outdated, the updatedb.py script would revisit the Amazon link and update the price and rating of the product. I also had an updatetags.py script that went through all of the products to store the set of tags in a list. That list would then be used to display as filter buttons in the shop.