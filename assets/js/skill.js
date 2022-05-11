let _backendSkills = backendSkills;
let _frontSkills = frontSkills;
let _mobileSkills = mobileSkills;


(function(){
    _backendSkills.forEach(item => {
        let resume = drawSkillElement(item.image, item.title)
        document.getElementById("backend-skills").appendChild(resume);
    });

    _frontSkills.forEach(item => {
        let resume = drawSkillElement(item.image, item.title)
        document.getElementById("frontend-skills").appendChild(resume);
    });

    _mobileSkills.forEach(item => {
        let resume = drawSkillElement(item.image, item.title)
        document.getElementById("mobile-skills").appendChild(resume);
    });

})();


function drawSkillElement(imageName, title){
    let divElement = document.createElement("div");
    divElement.className += `skil-content`;

    let imgElement = document.createElement("img");
    imgElement.src = `./assets/img/skills/${imageName}`;
    divElement.appendChild(imgElement);

    let titleElement = document.createElement("h6");
    titleElement.innerHTML = title;
    divElement.appendChild(titleElement);

    return divElement;
}