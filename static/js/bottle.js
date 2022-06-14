function colorFill(element) {
    let elementBox = element.getBoundingClientRect();
    let distanceFromTop = +1250;

    if(elementBox.top - window.innerHeight < distanceFromTop) {
        return true;
    } else {
        return false;
    }
}

function blobFill(element) {
    let elementBox = element.getBoundingClientRect();
    let distanceFromTop = -1250;

    if(elementBox.top - window.innerHeight < distanceFromTop) {
        return true;
    } else {
        return false;
    }
}

function scanDocument() {
    let pinkFill = document.querySelectorAll('.smoke');
    let pinkBlob = document.querySelectorAll('.blob-smoke');
    let brownFill = document.querySelectorAll('.no-pink')
    let brownBlob = document.querySelectorAll('.blob-pink');

    pinkFill.forEach(function(pink) {
        if(colorFill(pink)) {
            pink.classList.remove('smoke');
        };
    });

    pinkBlob.forEach(function(fillPink) {
        if(blobFill(fillPink)) {
            fillPink.classList.remove('blob-smoke')
        };
    });

    brownFill.forEach(function(brown) {
        if(colorFill(brown)) {
            brown.classList.remove('no-pink')
        };
    });

    brownBlob.forEach(function(fillBrown) {
        if(blobFill(fillBrown)) {
            fillBrown.classList.remove('blob-pink')
        };
    });
}

document.addEventListener("scroll", _.throttle(scanDocument, 500));