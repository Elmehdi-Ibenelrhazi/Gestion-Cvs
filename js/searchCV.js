import { renderCV } from "./cv.js";
import { cvs } from "./data.js";

function searchCVByName(name) {
    const container = document.getElementById('cv-container');
    container.innerHTML = ''; // Efface le contenu précédent

    let found = false; // Variable pour vérifier si un CV correspondant a été trouvé

    name = name.toLowerCase();
    // Parcours de tous les CV
    cvs.forEach(cv => {
        // Vérifie si le nom recherché correspond au prénom ou au nom de famille d'un CV
        let firstName = cv.profile.firstName.toLowerCase();
        let lastName = cv.profile.lastName.toLowerCase();
        
        if (firstName.includes(name) || lastName.includes(name)) {
            container.appendChild(renderCV(cv));
            found = true;
        }
    });

    if (!found) {
        const noResultsMessage = document.createElement('div');
        noResultsMessage.innerText = 'Aucun CV trouvé pour ce nom.';
        container.appendChild(noResultsMessage);
    }
}

export { searchCVByName };

function searchCVByTechnology(technology) {
    const container = document.getElementById('cv-container');
    container.innerHTML = ''; // Efface le contenu précédent

    let found = false; // Variable pour vérifier si un CV correspondant a été trouvé

    technology = technology.toLowerCase();
    cvs.forEach(cv => {
        cv.technologySkills.forEach(techSkill => {
            if (techSkill.skill.toLowerCase().includes(technology) || techSkill.details.some(detail => detail.toLowerCase().includes(technology))) {
                container.appendChild(renderCV(cv));
                found = true;
            }
        });
    });

    if (!found) {
        const noResultsMessage = document.createElement('div');
        noResultsMessage.innerText = 'Aucun CV trouvé pour cette technologie.';
        container.appendChild(noResultsMessage);
    }
}

export { searchCVByTechnology };
