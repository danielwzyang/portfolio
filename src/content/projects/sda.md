---
title: stuy donated apparel
date: october 2024
desc: website for my own club using NextJS, TailwindCSS, Framer Motion, Firestore, Cloudinary, and shadcn/ui
github: https://github.com/danielwzyang/sda
link: https://sda.clothing/
posted: 10.16.24
---
I founded a club called Stuyvesant Donated Apparel with my friends in the middle of sophomore year. Our main goal was to design clothes and sell them to use the profits for charity. To advertise our first drop, I took pictures of our models wearing our clothing, and I wanted to make a website to host those pictures. 
<br><br>
At first, I built the site in a builder called Webflow, but I decided to remake it using NextJS and Vercel so I had more flexibility. We also wanted to buy a cool domain, and I could do that with Vercel and Cloudflare Registar.
<br><br>
The website is built using NextJS and styled with TailwindCSS. I also had a lot of animations in my original Webflow site, and I recreated them using Framer Motion. I also used some components from shadcn/ui, like the Slider and the Sheet. As for the clothes themselves, the data is stored on Firestore and the images are stored on Cloudinary. I used dynamic routing for the individual clothing pages and they grab data from the database to render the info and photos. 