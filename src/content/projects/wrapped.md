---
title: spotify wrapped predictor
date: august 2024
desc: Python script to parse Spotify listening history to predict Spotify Wrapped
link: https://github.com/danielwzyang/wrapped-predictor
posted: 10.16.24
---
Spotify has been my sole streaming app for years now, and I love their yearly Wrapped feature, where they release some cool data to the users. It shows the total minutes listened, top artists, top songs, etc. There's websites online that do this for you, but they usually have a paywall to access certain features, and their data relies on the API which can only fetch online listening. I don't have the funds to pay for those services, and I also mostly listen offline, so the predictions were different from my actual Wrapped. 
<br><br>
My solution to this was to make it myself, since Spotify's privacy contract allows users to request their data. Users can request the last year of listening history and it contains a record of thew songs they listened to, including the ones that were played offline. 
<br><br>
The data is given in .json files that store long lists of songs in the form of objects. I used Python to go through these .json files - given that they're in the same folder - and it analyzes the top artists, top songs, and total minutes listened. There are some variables at the top of the script that a user can change to tweak their output, which comes out in the terminal. The only external library that needs to be installed is NumPy, and rest uses vanilla Python.