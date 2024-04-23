document.addEventListener("DOMContentLoaded", function () {
    var intro = introJs();
    intro.setOptions({
        steps: [
            {
                title: 'Introjs',
                element: document.querySelector('.profile-info'),
                intro: "Over View."
            },
            {
                element: document.querySelector('.social-links'),
                intro: "social media links."
            },
            {
                element: document.querySelector('.other-links'),
                intro: "other links."
            },
            {
                element: document.querySelector('.footer'),
                intro: "somethings else."
            }


        ],
        showStepNumbers: false,
        showProgress: false,
        exitOnOverlayClick: true,
        dontShowAgain: false,
        disableInteraction: true,
        tooltipClass: "customTooltip"
    });

    intro.start();
});
