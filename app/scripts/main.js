/* global validateForm:true */
'use strict';

function validateEmail(email) {
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email);
}

function validateForm() {
    var valid = validateEmail(document.getElementById('email').value);
    document.getElementsByTagName('form')[0].className = document.getElementsByTagName('body')[0].className.replace(' err', '');
    if (!valid) {
        document.getElementsByTagName('form')[0].className += ' err';
    }

    return valid;
}

function videoElement() {
    if (document.documentElement.clientWidth > 480) {
        $('video')[0].play();
        $('.video-bg').fadeOut();
    }
}

$(document).ready(function () {
    var video = document.getElementById('bgVideo');
    if (video) {
        if (video.readyState >= video.HAVE_FUTURE_DATA) {
            videoElement();
        } else {
            video.addEventListener('canplay', videoElement, false);
        }
    }

    $('.form').on('submit', validateForm);

    $('.email').on('change', function () {
        if(this.value !== '' && !$(this).hasClass('withText') ) {
            $(this).addClass('withText');
        }
        if (this.value === '') {
            $(this).removeClass('withText');
        }

    });
});
