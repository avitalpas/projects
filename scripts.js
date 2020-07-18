// ***********************************************
//                  ARRAYS
// ***********************************************

// projects array
var projects = [
    {
        name: 'Sudoku',
        background: 'img/sudoku.png',
        url: 'https://avitalpas.github.io/Sudoku',
        type: 'JavaScript'
    }, {
        name: 'Smart House',
        background: 'img/smartHouse.png',
        url: 'https://avitalpas.github.io/smarthouse',
        type: 'React'
    }, {
        name: 'Fibonacci',
        background: 'img/Fibonacci.png',
        url: 'https://avitalpas.github.io/Fibonacci/',
        type: 'JavaScript'
    }, {
        name: 'Lazy block',
        background: 'img/LazyBlock.png',
        url: 'https://avitalpas.github.io/LazyBlock/',
        type: 'CSS'
    }, {
        name: 'Booking',
        background: 'img/booking.png',
        url: 'https://avitalpas.github.io/booking',
        type: 'CSS'
    }, {
        name: 'JavaScript practice',
        background: 'img/JavaScriptPractice.png',
        url: 'https://avitalpas.github.io/JavaScriptPractice',
        type: 'CSS'
    }, {
        name: 'User Management',
        background: 'img/UserManagement.png',
        url: 'https://avitalpas.github.io/UserManagement',
        type: 'CSS'
    }, {
        name: 'NDSN',
        background: 'img/NDSN.png',
        url: 'https://ndsn.net/',
        type: 'WordPress'
    }, {
        name: 'NDSN remote support',
        background: 'img/NDSN remote support.png',
        url: 'https://4455.co.il',
        type: 'JavaScript'
    },{
        name: "Dani'z Music Studio",
        background: 'img/danizstudio.png',
        url: 'https://www.danizstudio.co.il/',
        type: 'Site123'
    }, {
        name: "Natalya's Studio",
        background: "img/Natalya'sStudio.png",
        url: 'https://plando.co.il/dashboard',
        type: 'External'
    },
]

// certificates array
var certificates = [
    {
        name: 'DBA Master',
        file: 'cert/DBA Master.pdf',
        img: 'cert/DBA Master.png'
    },{
        name: 'API Documentation with JSON and XML',
        file: 'cert/API Documentation with JSON and XML.pdf',
        img: 'cert/API Documentation with JSON and XML.png'
    },{
        name: 'HTML',
        file: 'cert/HTML.pdf',
        img: 'cert/HTML.png'
    },{
        name: 'Java',
        file: 'cert/Java.pdf',
        img: 'cert/Java.png'
    },{
        name: 'JavaScript Essential Training',
        file: 'cert/JavaScript Essential Training.pdf',
        img: 'cert/JavaScript Essential Training.png'
    },{
        name: 'SQL',
        file: 'cert/SQL.pdf',
        img: 'cert/SQL.png'
    }
]

// ***********************************************
//                  Global elements
// ***********************************************

// type buttons element 
var typeButtons = document.querySelector('#typeButtons');

// projects element
var projectsDiv = document.querySelector('.projectsContainer');

// certificates element
var certDiv = document.querySelector('.certificates');



// ***************************************************************************
//          Inizialize projects, certificates and type buttons
// ***************************************************************************

// project elements and type buttons
for (i = 0; i < projects.length; i++) {

    // create a project element
    var aContainer = document.createElement('a');
    aContainer.classList.add('projectDiv');
    aContainer.classList.add('col-md-6');
    aContainer.classList.add('col-lg-4');
    aContainer.classList.add('fade-in-fwd');
    aContainer.classList.add('col-xl-3');
    aContainer.setAttribute('data-id', i);
    aContainer.setAttribute('data-type', projects[i].type);
    aContainer.setAttribute('href', projects[i].url);
    aContainer.setAttribute('target', '_blank');

    // create img element
    var img = document.createElement('img')
    img.setAttribute('src', projects[i].background)
    img.classList.add('projectImg')
    img.classList.add('img-fluid')

    // create p element
    var p = document.createElement('p');
    p.innerHTML = projects[i].name;
    p.setAttribute('data-id', i)

    // append childs to projects
    aContainer.appendChild(img);
    aContainer.appendChild(p);
    projectsDiv.appendChild(aContainer);

    // check if type button exists
    var checkButton = document.querySelector('button[value="' + projects[i].type + '"]');
    if (checkButton == null) {

        // create button
        var button = document.createElement('button');
        button.innerHTML = projects[i].type;
        button.setAttribute('value', projects[i].type);
        button.setAttribute('onclick', 'changeActive("' + projects[i].type + '")');

        // append child to type buttons
        typeButtons.appendChild(button);
    }
}

// certificate elements
for (i = 0; i < certificates.length; i++) {

    // create a element 
    var curA = document.createElement('a')
    curA.classList.add('certDiv');
    curA.classList.add('col-md-6');
    curA.classList.add('col-lg-4');
    curA.classList.add('col-xl-3');
    curA.classList.add('certDiv');
    curA.setAttribute('data-id', i);
    curA.setAttribute('onclick', 'showCertPreview('+ i +')')

    // create img element
    var curImg = document.createElement('img')
    curImg.setAttribute('src', certificates[i].img)

    // create header element
    var curP = document.createElement('p')
    curP.innerHTML = certificates[i].name;

    // append child
    curA.appendChild(curImg)
    curA.appendChild(curP)
    certDiv.appendChild(curA)

    // hide at beggining
    curA.hidden = true;
}

// ***********************************************
//                  Show / hide functions
// ***********************************************

// all projects
var projectDivs = document.querySelectorAll('.projectDiv');

// all certificates
var certElements = document.querySelectorAll('.certificates a')

// change by menu click
function changeActive(value) {

    setActive(value);

    // if cert clicked
    if (value == 'cert') {
        hideAllProjects();
        showAllCertificates()
    }
    // if all clicked
    else if( value == 'All') {

        hideAllCertificates();
        showAllProjects();
    }
    // if specific type clicked
    else{
        hideAllCertificates();
        hideAllProjects();
        showProjectByValue(value);
    }
}

function showCertPreview(id){
    var preview = document.querySelector('.certPreview');
    var previewImg = document.querySelector('.certPreview img');
    previewImg.setAttribute('src', certificates[id].img)
    preview.hidden = false;
}

function hideCertPreview(){
    var preview = document.querySelector('.certPreview');
    preview.hidden = true;
}

function setActive(value){
    // remove current active button
    var curActive = document.querySelector('.active');
    curActive.classList.remove('active');

    // set new active
    document.querySelector('button[value="' + value + '"]').classList.add('active')
}

function hideAllProjects(){

    console.log('hiding all projects')
    for (let i = 0; i < projectDivs.length; i++) {
        console.log('project: ' + i)
        projectDivs[i].classList.remove('fade-in-fwd');
        projectDivs[i].classList.add('fade-out-bck');
        projectDivs[i].hidden = true;
    }

}

function showAllProjects(){

    console.log('showing all projects')
    for (let i = 0; i < projectDivs.length; i++) {
        console.log('project: ' + i)
        projectDivs[i].hidden = false;
        projectDivs[i].classList.remove('fade-out-bck');
        projectDivs[i].classList.add('fade-in-fwd');
    }

}

function showProjectByValue(value){
    hideAllProjects();

    for (let i = 0; i < projectDivs.length; i++) {
        if( projectDivs[i].getAttribute('data-type') == value ){
            console.log('project: ' + i)
            projectDivs[i].hidden = false;
            projectDivs[i].classList.remove('fade-out-bck');
            projectDivs[i].classList.add('fade-in-fwd');
        }
    }
}

function showAllCertificates(){
    for (let i = 0; i < certElements.length; i++) {
        certElements[i].hidden = false;
        certElements[i].classList.remove('fade-out-bck')
        certElements[i].classList.add('fade-in-fwd')
    }
}

function hideAllCertificates(){
    for (let i = 0; i < certElements.length; i++) {
        certElements[i].hidden = true;
        certElements[i].classList.add('fade-out-bck')
        certElements[i].classList.remove('fade-in-fwd')
    }
}