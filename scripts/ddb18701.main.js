"use strict";function validateEmail(a){var b=/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;return b.test(a)}function validateForm(){var a=validateEmail(document.getElementById("email").value);return document.getElementsByTagName("form")[0].className=document.getElementsByTagName("body")[0].className.replace(" err",""),a||(document.getElementsByTagName("form")[0].className+=" err"),a}function videoElement(){$("video")[0].play(),$(".video-bg").fadeOut()}$(document).ready(function(){var a=document.getElementById("bgVideo");a&&(a.readyState>=a.HAVE_FUTURE_DATA?videoElement():a.addEventListener("canplay",videoElement,!1)),$(".form").on("submit",validateForm)});