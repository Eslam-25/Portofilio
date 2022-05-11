let _webPortfolios = portfolios;

function drawProtofolios(numberOfPortofolios) {
    if (numberOfPortofolios) {
        _webPortfolios = _webPortfolios.slice(0, numberOfPortofolios);
    }

    _webPortfolios.forEach(item => {
        let portofilio = preparePortfolioProject(item.id, item.type, item.imageName, item.name, item.date, item.publicLink);
        document.getElementById("portofilos").appendChild(portofilio);
    });
}

function preparePortfolioProject(projectId, type, imageName, name, date, publicLink) {
    let divElement = document.createElement("div");
    divElement.className += ` col-lg-4 col-md-6 portfolio-item filter-${type}`;

    let portfolioElement = document.createElement("div");
    portfolioElement.className += " portfolio-wrap";
    divElement.appendChild(portfolioElement);

    let imgElement = document.createElement("img");
    imgElement.className += " img-fluid";
    imgElement.src = `assets/img/portfolio/${imageName}`;
    portfolioElement.appendChild(imgElement);

    let portfolioNameElement = document.createElement("div");
    portfolioNameElement.className += " portfolio-name";

    let nameElement = document.createElement("h4");
    nameElement.textContent = name;
    portfolioNameElement.appendChild(nameElement);
    portfolioElement.appendChild(portfolioNameElement);

    let portfolioDateElement = document.createElement("div");
    portfolioDateElement.className += " portfolio-date";

    let dateElement = document.createElement("h6");
    dateElement.textContent = date;
    portfolioDateElement.appendChild(dateElement);
    portfolioElement.appendChild(portfolioDateElement);

    let portfolioLinksElement = document.createElement("div");
    portfolioLinksElement.className += " portfolio-links";

    let linkIconElement = document.createElement("i");
    linkIconElement.className += "bx bx-link";

    // let linkElement = document.createElement("a");
    // linkElement.href = publicLink;
    // linkElement.target = "_blank";
    // linkElement.title = "Project URL";
    // linkElement.appendChild(linkIconElement);
    // portfolioLinksElement.appendChild(linkElement);

    let zoomIconElement = document.createElement("i");
    zoomIconElement.className += "bx bx-zoom-in";

    let zoomLinkElement = document.createElement("a");
    zoomLinkElement.href = `portfolio-details.html?projectId=${projectId}`;
    zoomLinkElement.setAttribute("data-gallery", "portfolioGallery");
    zoomLinkElement.className += "portfolio-lightbox";
    zoomLinkElement.title = "Project Detail";
    zoomLinkElement.appendChild(zoomIconElement);
    portfolioLinksElement.appendChild(zoomLinkElement);

    portfolioElement.appendChild(portfolioLinksElement);
    return divElement;
}
