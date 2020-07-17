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

// type buttons element 
var typeButtons = document.querySelector('#typeButtons')

// projects element
var projectsDiv = document.querySelector('.projectsContainer')

// add projects array to projects element and set types
for (i = 0; i < projects.length; i++) {

    // create div element
    var aContainer = document.createElement('a');
    aContainer.classList.add('projectDiv');
    aContainer.classList.add('col-md-6');
    aContainer.classList.add('col-lg-4');
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

    // create a element
    var p = document.createElement('p');
    p.innerHTML = projects[i].name;
    p.setAttribute('data-id', i)

    // add img and a to div
    aContainer.appendChild(img);
    aContainer.appendChild(p);

    // append div to projects element
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

// add certificates array to certificates element
// get element
var certDiv = document.querySelector('.certificates');

for (i = 0; i < certificates.length; i++) {

    // create a element 
    var curA = document.createElement('a')
    curA.classList.add('certDiv');
    curA.classList.add('col-md-6');
    curA.classList.add('col-lg-4');
    curA.classList.add('col-xl-3');
    curA.classList.add('certDiv');
    curA.setAttribute('data-id', i);

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

    curA.hidden = true;
}

// show products by clicked tipe
function changeActive(value) {

    // get current active button
    var curActive = document.querySelector('.active');
    curActive.classList.remove('active');

    // set current active
    document.querySelector('button[value="' + value + '"]').classList.add('active')

    // if cert clicked
    if (value == 'cert') {

        // hide projects
        // hide all not relevant
        var links = document.querySelectorAll('.projectDiv');
        for (let i = 0; i < links.length; i++) {
            // show all 
            links[i].hidden = true;
        }

        // show certificates
        var certElements = document.querySelectorAll('.certificates a')
        for (let i = 0; i < certElements.length; i++) {
            certElements[i].hidden = false;
        }
    }
    else {
        // hide all not relevant
        var links = document.querySelectorAll('.projectDiv ');

        // hide certificates
        var certElements = document.querySelectorAll('.certificates a')
        for (let i = 0; i < certElements.length; i++) {
            certElements[i].hidden = true;
        }

        for (let i = 0; i < links.length; i++) {
            // show all 
            links[i].hidden = false;

            if (value != 'All') {
                // hide if not relevant
                if (links[i].getAttribute('data-type') != value) links[i].hidden = true;
            }
        }
    }



}