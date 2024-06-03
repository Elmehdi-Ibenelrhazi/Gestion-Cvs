import { renderCV } from './cv.js';
import { cvs } from './data.js';

let currentIndex = 0;

export function displayCV(index) {
    const cvContainer = document.getElementById('cv-container');
    cvContainer.innerHTML = '';
    cvContainer.appendChild(renderCV(cvs[index]));
}

export function showNextCV() {
    if (currentIndex < cvs.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0; 
    }
    displayCV(currentIndex);
}

export function showPreviousCV() {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = cvs.length - 1; 
    }
    displayCV(currentIndex);
}

export function showFirstCV() {
    currentIndex = 0;
    displayCV(currentIndex);
}

export function showLastCV() {
    currentIndex = cvs.length - 1;
    displayCV(currentIndex);
}
