
import { renderCV } from './cv.js';
import { cvs } from './data.js';

export function displayAllCVs() {
    const cvContainer = document.getElementById('cv-container');
    cvContainer.innerHTML = '';
    cvs.forEach(cv => {
        cvContainer.appendChild(renderCV(cv));
    });
}
