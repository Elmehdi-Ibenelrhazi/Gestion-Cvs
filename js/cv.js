function getHeader(cv) {
    //div.header
    const header = document.createElement('div');
    header.className = 'header';

    //img
    const img  = document.createElement('img');
    img.src= cv.profile.photo;
    img.className = 'profile-picture';

    //div.section
    const section = document.createElement('div');
    section.className = 'section';

    //span
    const nameSpanFirst = document.createElement('span');
    nameSpanFirst.innerText= cv.profile.firstName;
    const nameSpanSecond = document.createElement('span');
    nameSpanSecond.innerText= cv.profile.lastName;
    

    section.appendChild(nameSpanSecond);
    section.appendChild(nameSpanFirst);
   

    header.appendChild(img);
    header.appendChild(section);
    return header;
}

function getContact(cv) {
    const contact = document.createElement('div');
    contact.className = 'contact';

   
    const header = document.createElement('div');
    header.className = 'header';
    header.innerText = 'Contact';

    const headerline = document.createElement('div');
    headerline.className = 'header-line';

    const info = document.createElement('div');
    info.className = 'info';

    // Email section
    const email = document.createElement('div');
    email.className = 'email';

    const emailSpan = document.createElement('div');
    emailSpan.className = 'spanStyle';
    emailSpan.innerText = 'Email: ';

    const infoEmail = document.createElement('div');
    infoEmail.className = 'infoComplement';
    infoEmail.innerText = cv.profile.email;

    email.appendChild(emailSpan);
    email.appendChild(infoEmail);

    // Phone section
    const tel = document.createElement('div');
    tel.className = 'tel';

    const telSpan = document.createElement('div');
    telSpan.className = 'spanStyle';
    telSpan.innerText = 'Telephone : ';

    const infoTel = document.createElement('div');
    infoTel.className = 'infoComplement';
    infoTel.innerText = cv.profile.phone;

    tel.appendChild(telSpan);
    tel.appendChild(infoTel);

    // Address section
    const address = document.createElement('div');
    address.className = 'adresse';

    const addressSpan = document.createElement('div');
    addressSpan.className = 'spanStyle';
    addressSpan.innerText = 'Adresse: ';

    const infoAddress = document.createElement('div');
    infoAddress.className = 'infoComplement';
    infoAddress.innerText = cv.profile.address;

    address.appendChild(addressSpan);
    address.appendChild(infoAddress);

    // Links section
    const linksDiv = document.createElement('div');
    linksDiv.className = 'spanStyle';
    linksDiv.innerText = 'Liens: ';

    let links = cv.profile.links;
    links.forEach(link => {
        let linkElement = document.createElement('span');
        linkElement.href = link;
        linkElement.onclick = () => {window.location.href = link} 
        const tempLink = link.replace("https://www.",'');
        
        linkElement.textContent = tempLink.split('/')[0];
        linkElement.style.display = 'block';
        linkElement.style.cursor = 'pointer'
        linksDiv.appendChild(linkElement);
    });

    
    info.appendChild(email);
    info.appendChild(tel);
    info.appendChild(address);
    info.appendChild(linksDiv);

    contact.appendChild(header);
    contact.appendChild(headerline);
    contact.appendChild(info);


    return contact;
}



function getProfileSection(cv) {
    const profileSection = document.createElement('div');
    profileSection.className = 'profile-section';

    const profileDescription = document.createElement('div');
    profileDescription.className = 'profile-description';

    const description = document.createElement('div');
    description.innerText = 'Résumé professionnel:';
    profileDescription.appendChild(description);

    const span = document.createElement('span');
    span.innerText = cv.profile.professionalSummary;
    profileDescription.appendChild(span);

    profileSection.appendChild(profileDescription);
    return profileSection;
}

function getGridContainer(cv) {
    const gridContainer = document.createElement('div');
    gridContainer.className = 'grid-container';

    const rightSection = document.createElement('div');
    rightSection.className = 'right-section';
    
    //section education 
    const sectionEducation = document.createElement('div');
    sectionEducation.className = 'section';

    const sectionTitleEducation = document.createElement('div');
    sectionTitleEducation.className = 'section-title';
    sectionTitleEducation.innerText = 'Education';

    const contentEducation = document.createElement('div');
    contentEducation.className = 'content';

    cv.education.forEach(edu => {
        const rightContent = document.createElement('div');
        rightContent.className = 'right-content';

        const infoTitle = document.createElement('div');
        const spanTitle = document.createElement('span');
        spanTitle.innerText = edu.diploma;
        infoTitle.appendChild(spanTitle);
        infoTitle.innerHTML += ` - ${edu.organisation} (${edu.year})`;

        rightContent.appendChild(infoTitle);
        contentEducation.appendChild(rightContent);
    });

    sectionEducation.appendChild(sectionTitleEducation);
    sectionEducation.appendChild(contentEducation);
    rightSection.appendChild(sectionEducation);

   // Section Expériences
const sectionExperience = document.createElement('div');
sectionExperience.className = 'section';

const sectionTitleExperience = document.createElement('div');
sectionTitleExperience.className = 'section-title';
sectionTitleExperience.innerText = 'Expériences';

const contentExperience = document.createElement('div');
contentExperience.className = 'content';

cv.experiences.forEach(experience => {
    const rightContent = document.createElement('div');
    rightContent.className = 'right-content';

    const infoTitle = document.createElement('div');
    const spanTitle = document.createElement('span');
    spanTitle.innerText = experience.title;
    infoTitle.appendChild(spanTitle);
    infoTitle.innerHTML += ` - ${experience.organisation} (${experience.year})`;
    
    rightContent.appendChild(infoTitle);

    const infoDetails = document.createElement('div');
    infoDetails.innerHTML = `Type: ${experience.type}<br>`;
    if (experience.technologies && experience.technologies.length > 0) {
        infoDetails.innerHTML += `Technologies: ${experience.technologies.join(', ')}<br>`;
    }
    if (experience.duration) {
        infoDetails.innerHTML += `Durée: ${experience.duration}`;
    }

    rightContent.appendChild(infoDetails);
    contentExperience.appendChild(rightContent);
});

sectionExperience.appendChild(sectionTitleExperience);
sectionExperience.appendChild(contentExperience);
rightSection.appendChild(sectionExperience);



   
    // Section Compétences Techniques
    const sectionSkills = document.createElement('div');
    sectionSkills.className = 'section';

    const sectionTitleSkills = document.createElement('div');
    sectionTitleSkills.className = 'section-title';
    sectionTitleSkills.innerText = 'Compétences Techniques';

    const contentSkills = document.createElement('div');
    contentSkills.className = 'content';

    cv.technologySkills.forEach(skill => {
        const rightContent = document.createElement('div');
        rightContent.className = 'right-content';

        const skillCategory = document.createElement('div');
        skillCategory.className = 'tech-category';

        const skillTitle = document.createElement('div');
        const spanSkill = document.createElement('span');
        spanSkill.innerText = skill.skill;
        skillTitle.appendChild(spanSkill);

        const skillItems = document.createElement('div');
        skillItems.className = 'items';

        skill.details.forEach(detail => {
            const spanDetail = document.createElement('span');
            spanDetail.innerText = detail;
            skillItems.appendChild(spanDetail);
        });

        skillCategory.appendChild(skillTitle);
        skillCategory.appendChild(skillItems);
        rightContent.appendChild(skillCategory);
        contentSkills.appendChild(rightContent);
    });

    sectionSkills.appendChild(sectionTitleSkills);
    sectionSkills.appendChild(contentSkills);
    rightSection.appendChild(sectionSkills);

    // Section Compétences Personnelles
    const leftSection = document.createElement('div');
    leftSection.className = 'left-section';

    const sectionPersonalSkills = document.createElement('div');
    sectionPersonalSkills.className = 'section';

    const sectionTitlePersonalSkills = document.createElement('div');
    sectionTitlePersonalSkills.className = 'section-title';
    sectionTitlePersonalSkills.innerText = 'Compétences Personnelles';

    const contentPersonalSkills = document.createElement('div');
    contentPersonalSkills.className = 'left-content';

    const personalSkillsItems = document.createElement('div');
    personalSkillsItems.className = 'items';

    cv.softSkills.forEach(skill => {
        const spanSkill = document.createElement('span');
        spanSkill.innerText = skill;
        personalSkillsItems.appendChild(spanSkill);
    });

    contentPersonalSkills.appendChild(personalSkillsItems);
    sectionPersonalSkills.appendChild(sectionTitlePersonalSkills);
    sectionPersonalSkills.appendChild(contentPersonalSkills);
    leftSection.appendChild(sectionPersonalSkills);

     // Section Langues
     const sectionLanguages = document.createElement('div');
     sectionLanguages.className = 'section languages';
 
     const sectionTitleLanguages = document.createElement('div');
     sectionTitleLanguages.className = 'section-title';
     sectionTitleLanguages.innerText = 'Langues';
 
     const contentLanguages = document.createElement('div');
     contentLanguages.className = 'left-content';
 
     cv.languages.forEach(language => {
         const languageItem = document.createElement('div');
         languageItem.className = 'language-item';
 
         const spanLanguage = document.createElement('div');
         spanLanguage.className = 'language-name';
         spanLanguage.innerText = `Language: ${language.language}`;
 
         const spanLevel = document.createElement('div');
         spanLevel.className = 'language-level';
         spanLevel.innerText = `Level: ${language.level}`;
 
         languageItem.appendChild(spanLanguage);
         languageItem.appendChild(spanLevel);
 
         if (language.certification) {
             const spanCertification = document.createElement('div');
             spanCertification.className = 'language-level';
             spanCertification.innerText = `Certification: ${language.certification}`;
             languageItem.appendChild(spanCertification);
         }
 
         if (language.experience) {
             const spanExperience = document.createElement('div');
             spanExperience.className = 'language-experience';
             spanExperience.innerText = `Experience: ${language.experience}`;
             languageItem.appendChild(spanExperience);
         }
 
         contentLanguages.appendChild(languageItem);
     });
 
     sectionLanguages.appendChild(sectionTitleLanguages);
     sectionLanguages.appendChild(contentLanguages);
     leftSection.appendChild(sectionLanguages);

     
    // Section Intérêts
    const sectionInterests = document.createElement('div');
    sectionInterests.className = 'section';

    const sectionTitleInterests = document.createElement('div');
    sectionTitleInterests.className = 'section-title';
    sectionTitleInterests.innerText = 'Intérêts';

    const contentInterests = document.createElement('div');
    contentInterests.className = 'left-content';

    const interestsItems = document.createElement('div');
    interestsItems.className = 'items';

    cv.interests.forEach(interest => {
        const interestItem = document.createElement('div');
        interestItem.className = 'interest-item';

        const interestSpan = document.createElement('span');
        interestSpan.innerText = interest;
        interestItem.appendChild(interestSpan);
        interestsItems.appendChild(interestItem);
    });

    contentInterests.appendChild(interestsItems);
    sectionInterests.appendChild(sectionTitleInterests);
    sectionInterests.appendChild(contentInterests);
    leftSection.appendChild(sectionInterests);

    
    gridContainer.appendChild(rightSection);
    gridContainer.appendChild(leftSection);
    return gridContainer;
}
export function renderCV(cv) {
    const container = document.createElement('div');
    container.className = 'cv';
    

    console.log("creation de div cv");
    container.appendChild(getHeader(cv));
    container.appendChild(getContact(cv));
    container.appendChild(getProfileSection(cv));
    container.appendChild(getGridContainer(cv));

    return container;
}
