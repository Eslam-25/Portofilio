var _portfolios = portfolios;

(function () {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
    let project = _portfolios.find(r => r.id == +params.projectId);

    
    let myCarouselIndicators = document.getElementById("my-carousel-indicators");
    let firstIndecator = prepareCarouselIndecatorElement(0, true);

    let myCarouselImages = document.getElementById("my-carousel-images");
    let firstImage = prepareCarouselImages(project.images[0], true);
    myCarouselImages.appendChild(firstImage);

    myCarouselIndicators.appendChild(firstIndecator);
    for (let index = 1; index < project.images.length; index++) {
        let indecator = prepareCarouselIndecatorElement(index);
        myCarouselIndicators.appendChild(indecator);

        let imageItem = prepareCarouselImages(project.images[index]);
        myCarouselImages.appendChild(imageItem);
    }
    
    document.getElementById("project-name").innerText = project.name;
    document.getElementById("project-category").innerText = project.type;
    document.getElementById("project-date").innerText = project.date;
    document.getElementById("project-technologies").innerText = project.technologies;
    document.getElementById("project-summary").innerText = project.summary;

    if(project.publicLink){
        document.getElementById("project-url").innerText = project.publicLink;
        document.getElementById("project-url").setAttribute('href', project.publicLink);
    }else{
        document.getElementById("project-url-li").style.display = "none";
    }
})();

function prepareCarouselIndecatorElement(index, first = false) {
    let liCarouselElement = document.createElement("li");
    if(first) liCarouselElement.className += "active";

    liCarouselElement.setAttribute("data-target", "#myCarousel");
    liCarouselElement.setAttribute("data-slide-to", index);

    return liCarouselElement;
}

function prepareCarouselImages(imageName, first = false) {
    let imageItem = document.createElement("div");
    if(first)
        imageItem.className += "item active";
    else
        imageItem.className += "item";

    let image = document.createElement("img");
    image.src = `./assets/img/portfolio/${imageName}`;
    imageItem.appendChild(image);

    return imageItem;
}