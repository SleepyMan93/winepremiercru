function isVisible(element) {
    let elementBox = element.getBoundingClientRect();
    let distanceFromTop = -100;

    if(elementBox.top - window.innerHeight < distanceFromTop) {
        return true;
    } else {
        return false;
    }
}

function isMoveable(element) {
    let elementBox = element.getBoundingClientRect();
    let distanceFromTop = 0;

    if(elementBox.top - window.innerHeight < distanceFromTop) {
        return true;
    } else {
        return false;
    }
}

function scanDocument() {
    let sectionList = document.querySelectorAll('.hidden');
    let panelLeft = document.querySelectorAll('.left');
    let panelRight = document.querySelectorAll('.right');

    sectionList.forEach(function(section) {
        if(isVisible(section)) {
            section.classList.remove('hidden');
        };
    });

    panelLeft.forEach(function(move) {
        if(isMoveable(move)) {
            move.classList.remove('left');
        };
    });

    panelRight.forEach(function(move) {
        if(isMoveable(move)) {
            move.classList.remove('right');
        };
    });
}

document.addEventListener("scroll", _.throttle(scanDocument, 500));