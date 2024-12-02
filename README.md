02/12/24 update

After trying and trying to get the image to load properly, I found that if I add the optimized attribute to the Image component from NextJs it solves the problem for all the images but one.

This one image, I can't for the life of me understand why it isn't loading correctly. I've tripled checked for typos on the index.js page. The src url is passed as a prop from an array of objects. All of the other objects in the array are shown and displayed fine.
Things I've tried
Renaming the image
Retyping the object
Changing the height and width on the image component.
Setting optimized to false and true
Changing the position on within the array

I just can't work out why, if it's part of an array then the whole array must be at fault or somewhere within the naming of the filepath. But this isn't the case.....Unless I'm being really dumb and missing something staring at my face.

##Fourth Commit update!

This was commit was an attempt to fix the problems of images not loading on the deployed website correctly.
After some research, I found that I need to add the unoptimized prop to the Image element from Next.js

This is my Portfolio website!

This website uses: React, NextJs, TailWind, and Framer-motion.

This site will be hosted for free on Vercel with the link here

To get started!

Download the files from this repo onto your system

Then

npm i

to download the packages

Then
npm run dev

to get the website loaded onto your localhost 3000

This project was made with the help of the Youtuber

Code and Create
https://www.youtube.com/@codeandcreate

A very useful and easy to follow walkthrough on how to make this portfolio website can be found there
