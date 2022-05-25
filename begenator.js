// ==UserScript==
// @name         Beğenatör
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Okulunuzun içeriklerini beğenin!
// @author       Akif9748
// @match        https://*.meb.k12.tr/icerikler/*
// @grant        none
// @source       https://github.com/Akif9748/Beğenatör
// ==/UserScript==

const begen = $(".begen")[0];

if (begen) {
    console.log("[Beğenatör] A planı devrede!");
    setInterval(begen.onclick, 1500);

} else {
    console.log("[Beğenatör] B planı devrede!")

    const arr = window.location.pathname.split("_")
    const id = arr[arr.length - 1].split(".")[0];
    setInterval(() => cwRating(id, 1, 'like_count' + id), 1500);
}

