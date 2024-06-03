// createCV.js

import { cvs } from './data.js';
import { displayCV } from './displayCv.js';

export function getCVForm() {
    return `
        <form id="cv-form">
            <label for="firstName">Prénom:</label>
            <input type="text" id="firstName" name="firstName" required><br>
            <label for="lastName">Nom:</label>
            <input type="text" id="lastName" name="lastName" required><br>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required><span id="email-error" class="error-message"></span><br>
            <label for="phone">Téléphone:</label>
            <input type="tel" id="phone" name="phone" pattern="[0-9]{10}" required><span id="phone-error" class="error-message"></span><br>
            <label for="address">Adresse:</label>
            <input type="text" id="address" name="address" required><br>
            <label for="links">Liens (séparés par des virgules):</label>
            <input type="text" id="links" name="links"><br>
            <label for="professionalSummary">Résumé Professionnel:</label>
            <textarea id="professionalSummary" name="professionalSummary"></textarea><br>
            <label for="education">Éducation:</label>
            <textarea id="education" name="education"></textarea><br>
            <label for="experience">Expérience:</label>
            <textarea id="experience" name="experience"></textarea><br>
            <label for="technologySkills">Compétences Techniques (séparées par des virgules):</label>
            <input type="text" id="technologySkills" name="technologySkills"><br>
            <label for="softSkills">Compétences Personnelles (séparées par des virgules):</label>
            <input type="text" id="softSkills" name="softSkills"><br>
            <label for="languages">Langues (séparées par des virgules):</label>
            <input type="text" id="languages" name="languages"><br>
            <label for="interests">Intérêts:</label>
            <textarea id="interests" name="interests"></textarea><br>
            <button type="button" id="submit-btn">Soumettre</button>
        </form>
    `;
}

export function getFormData() {
    const form = document.getElementById('cv-form');
    const formData = new FormData(form);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;

    const firstName = formData.get('firstName').trim();
    const lastName = formData.get('lastName').trim();
    const email = formData.get('email').trim();
    const phone = formData.get('phone').trim();
    const address = formData.get('address').trim();
    const links = formData.get('links').split(',').map(link => link.trim());
    const professionalSummary = formData.get('professionalSummary').trim();
    const education = formData.get('education').split('\n').map(item => item.trim());
    const experience = formData.get('experience').split('\n').map(item => item.trim());
    
    const technologySkills = formData.get('technologySkills').split(',').map(skill => skill.trim());
    const softSkills = formData.get('softSkills').split(',').map(skill => skill.trim());
    const languages = formData.get('languages').split(',').map(language => language.trim());
    const interests = formData.get('interests').split('\n').map(item => item.trim());

    let isValid = true;

    if (!emailRegex.test(email)) {
        document.getElementById('email-error').textContent = 'Veuillez saisir une adresse e-mail valide.';
        isValid = false;
    } else {
        document.getElementById('email-error').textContent = '';
    }

    if (!phoneRegex.test(phone)) {
        document.getElementById('phone-error').textContent = 'Veuillez saisir un numéro de téléphone valide (10 chiffres).';
        isValid = false;
    } else {
        document.getElementById('phone-error').textContent = '';
    }

    if (!isValid) {
        return null;
    }

    const newCV = {
        profile: {
            firstName,
            lastName,
            email,
            phone,
            address,
            professionalSummary,
            links
        },
        education: education.map(item => ({ diploma: item, organisation: '', year: '' })),
        experiences: experience.map(item => ({ type: '', organisation: '', title: item, technologies: [], year: '', duration: '' })),
        technologySkills: technologySkills.map(skill => ({ skill, details: [] })),
        softSkills,
        interests,
        languages: languages.map(language => ({ language, level: '', certification: '', experience: '' }))
    };

    return newCV;
}

export function addNewCV(newCV) {
    cvs.push(newCV);
    console.log('New CV added:', newCV);
    console.log('Updated cvs:', cvs);
}

export function displayNewCV(index) {
    displayCV(index);
}
