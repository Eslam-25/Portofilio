// read data from data/resume-data.js
let _educationResumes = educationResumes;
let _workingResumes = workingResumes;
let _freelanceResumes = freelanceResumes;

function drawResumes(numberOfResumes){
    if(numberOfResumes){
        _educationResumes = educationResumes.slice(0, numberOfResumes);
        _freelanceResumes = _freelanceResumes.slice(0, numberOfResumes);
        _workingResumes = workingResumes.slice(0, numberOfResumes);
    }

    _educationResumes.forEach(item => {
        let resume = prepareResumeElement(item.title, item.date, item.place, item.information)
        document.getElementById("eduction-resumes").appendChild(resume);
    });

    _freelanceResumes.forEach(item => {
        let resume = prepareResumeElement(item.title, item.date, item.place, item.information)
        document.getElementById("freelance-resumes").appendChild(resume);
    });

    _workingResumes.forEach(item => {
        let resume = prepareResumeElement(item.title, item.date, item.place, item.information)
        document.getElementById("working-resumes").appendChild(resume);
    });
}

function prepareResumeElement(title, date, place, information){
    let divElement = document.createElement("div");
    divElement.className += " resume-item";

    let titleElement = document.createElement("h4");
    titleElement.textContent = title;
    divElement.appendChild(titleElement);

    let dateElement = document.createElement("h5");
    dateElement.textContent = date;
    divElement.appendChild(dateElement);

    if(place){
        let placeElement = document.createElement("p");
        let placeEMElement = document.createElement("em");
        placeEMElement.textContent = place;
        placeElement.appendChild(placeEMElement);
        divElement.appendChild(placeElement);
    }

    if(information){
        let infoElement = document.createElement("p");
        infoElement.textContent = information;
        divElement.appendChild(infoElement);
    }

    return divElement;
}