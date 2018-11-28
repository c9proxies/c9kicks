(function () {

    // Helpers
    var qs = document.querySelector.bind(document);
    var qsa = document.querySelectorAll.bind(document);

    // Cache DOM elements
    var icons = qsa('#radar-icons path');
    var radius = qs('#radar-radius');
    var gradient = qs('#radar-gradient');
    var hand = qs('#radar-hand');

    TweenMax.set(icons, {
        transformOrigin: 'center',
        opacity: 0,
        scale: .5 });


    TweenMax.set(radius, {
        transformOrigin: 'center',
        scale: .1,
        opacity: 0 });


    new TimelineMax({
        repeat: -1,
        repeatDelay: 1 }).

    to(radius, .5, {
        opacity: .1 }).

    to(radius, 2, {
        scale: 3.7 },
    '-=.5').
    to(radius, .5, {
        opacity: 0 },
    '-=.5');

    TweenMax.to(hand, 3, {
        transformOrigin: 'center bottom',
        rotation: 360,
        ease: Power0.easeOut,
        repeat: -1 });


    TweenMax.to(gradient, 3, {
        transformOrigin: 'center',
        rotation: 360,
        ease: Power0.easeOut,
        repeat: -1 });


    icons = [].map.call(icons, function (i) {return i;}).reverse();

    [].forEach.call(icons, function (icon, index) {
        new TimelineMax({
            repeat: -1,
            delay: 1.75,
            repeatDelay: 1.75 }).

        to(icon, .5, {
            opacity: .8 }).

        to(icon, 1.25, {
            scale: 1.25 },
        '-=.5').
        to(icon, .5, {
            opacity: 0 },
        '-=.5');
    });

})();