// add sword to li elements 
const swordSVG = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="24.80000000pt" height="14.20000000pt" viewBox="0 0 1280.000000 720.000000"
 preserveAspectRatio="xMidYMid meet">
<metadata>
Created by potrace 1.15, written by Peter Selinger 2001-2017
</metadata>
<g transform="translate(00.000000,720.000000) scale(0.100000,-0.100000)"
stroke="none">
<path d="M4110 5071 c-294 -119 -436 -228 -457 -350 -4 -25 -7 -230 -6 -454 2
-380 1 -408 -15 -402 -9 4 -48 16 -87 26 -160 41 -215 44 -815 41 -719 -4
-1088 13 -1475 69 -270 38 -384 75 -468 148 -67 58 -111 75 -193 74 -104 -1
-204 -59 -264 -153 -130 -202 -159 -698 -59 -998 62 -188 174 -282 335 -282
77 0 114 14 174 67 87 77 198 114 456 152 386 56 724 73 1459 70 676 -2 728 1
937 68 15 4 16 -29 15 -419 -2 -500 -4 -492 93 -582 45 -41 99 -74 217 -133
87 -43 182 -86 212 -96 172 -55 197 16 78 226 -114 202 -160 347 -187 587 -16
144 -27 371 -18 376 4 3 299 0 655 -5 2030 -31 2627 -35 3953 -23 903 8 1433
17 1665 28 l340 16 450 79 c248 44 491 88 540 99 234 50 777 180 796 190 18
10 19 14 7 26 -7 8 -198 57 -423 109 -346 80 -483 106 -885 170 -417 66 -517
78 -815 100 -312 24 -424 27 -1370 36 -1039 11 -2548 7 -3645 -10 -327 -5
-748 -11 -934 -13 l-339 -3 2 75 c3 130 22 331 41 441 25 147 71 276 142 404
34 61 70 127 80 147 21 42 24 108 6 126 -23 23 -100 13 -198 -27z"/>
</g>
</svg>`

// find all li elements, then append the swordSVG code to the beginning of their innerText as a document fragment: 

const lis = Array.from(reactionsList.getElementsByTagName('li')); 

lis.forEach(ele => {
    // create the fragment to be appended, and add the current inner text to it 
    let existingText = ele.innerText; 
    let frag = document.createRange().createContextualFragment(swordSVG + existingText); 
    // remove current inner text 
    ele.innerText = "";
    // append frag 
    ele.appendChild(frag);
})