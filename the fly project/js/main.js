var width = $(window).width() - 10;
var height = $(window).height() - 10;

var currentX = width / 2;
var currentY = height / 2;

var delta = 50;
var flyAnimationDuration = 270;
var flyDownAnimation = 700;

function moveX() {
    currentX += getRandom() * getSign();
    return currentX % width;
}

function moveY() {
    currentY += getRandom() * getSign();
    return currentY % height;
}

function getRandom() {
    return Math.random() * delta;
}

function getSign() {
    return Math.random() < 0.5 ? -1 : 1;
}
