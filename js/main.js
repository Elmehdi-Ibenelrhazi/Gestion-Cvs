import { displayCV, showNextCV, showPreviousCV, showFirstCV, showLastCV } from './displayCv.js';
import { displayAllCVs } from './displayAllCVs.js';
import { searchCVByName } from './searchCV.js';
import { getCVForm, getFormData, addNewCV, displayNewCV } from './createCV.js';
import { cvs } from './data.js';

document.addEventListener('DOMContentLoaded', function() {
    const cvContainer = document.getElementById('cv-container');
    const nextBtn = document.getElementById('next-btn');
    const prevBtn = document.getElementById('prev-btn');
    const firstBtn = document.getElementById('first-btn');
    const lastBtn = document.getElementById('last-btn');
    const toggleBtn = document.getElementById('toggle-btn');
    const createBtn = document.getElementById('create-btn');
    const searchBtn = document.getElementById('search-btn');
    const searchInput = document.getElementById('search-input');
    const searchTechInput = document.getElementById('search-tech-input');
    const cvFormContainer = document.getElementById('cv-form-container');

    let showingAll = false;

    function toggleView() {
        if (showingAll) {
            toggleBtn.innerText = 'Afficher tous les CV';
            displayCV(0);
            nextBtn.style.display = 'block';
            prevBtn.style.display = 'block';
            firstBtn.style.display = 'block';
            lastBtn.style.display = 'block';
            cvFormContainer.style.display = 'none';
        } else {
            toggleBtn.innerText = 'Afficher un par un';
            displayAllCVs();
            nextBtn.style.display = 'none';
            prevBtn.style.display = 'none';
            firstBtn.style.display = 'none';
            lastBtn.style.display = 'none';
            cvFormContainer.style.display = 'none';
        }
        showingAll = !showingAll;
    }

    toggleBtn.addEventListener('click', toggleView);
    nextBtn.addEventListener('click', showNextCV);
    prevBtn.addEventListener('click', showPreviousCV);
    firstBtn.addEventListener('click', showFirstCV);
    lastBtn.addEventListener('click', showLastCV);

    searchBtn.addEventListener('click', function() {
        const searchTerm = searchInput.value.trim();
        if (searchTerm !== '') {
            searchCVByName(searchTerm);
        } else {
            console.log('Veuillez saisir un terme de recherche.');
        }
    });

    createBtn.addEventListener('click', function() {
        cvFormContainer.innerHTML = getCVForm();
        cvFormContainer.classList.remove('hidden');
    });

    cvFormContainer.addEventListener('click', function(event) {
        if (event.target && event.target.id === 'submit-btn') {
            const formData = getFormData();
            if (formData) {
                addNewCV(formData);
                displayNewCV(cvs.length - 1);
                cvFormContainer.classList.add('hidden');
            }
        }
    });

   // displayCV(0); // Afficher le premier CV au chargement
});
