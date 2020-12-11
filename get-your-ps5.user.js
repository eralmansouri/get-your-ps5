// ==UserScript==
// @name         get-your-ps5
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Try to get into PS5 Direct Queue ASAP
// @author       eralmansouri
// @match        https://direct.playstation.com/*
// @require      https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js
// ==/UserScript==

$(function() {
    'use strict';
    let oldUrl = window.location.pathname;
    if (/softblock/.test(oldUrl)) {
        // We are being redirected to captcha. Try again
        setTimeout(function(){
            window.location.href="https://direct.playstation.com/en-us/consoles/console/playstation5-console.3005816"
        }, 2000);
    }
    else if (/https:\/\/direct.playstation.com\/en-us\/consoles\/console\/playstation5-console\.3005816/.test(window.location.href)) {
        // We are still on the store page
        setTimeout(function(){
            location.reload()
        }, 2000);
    }
    else {
        // On queue page?!
        // Play loud typing sounds so if you're sharing your screen or something for work, it just sounds like work
        var typeWriter = new Audio("https://www.freesound.org/data/previews/256/256458_4772965-lq.mp3");
        typeWriter.play() 
    }
});