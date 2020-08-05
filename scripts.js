// ***********************************************
//                  ARRAYS
// ***********************************************

// projects array
var projects = [
    {
        name: 'NDSN',
        favicon: 'img/favicons/NDSN.png',
        background: 'img/NDSN.png',
        url: 'https://ndsn.net/',
        color: '#3F3F3F',
        type: 'WordPress'
    }, {
        name: 'NDSN remote support',
        favicon: 'img/favicons/NDSN.png',
        background: 'img/NDSN remote support.png',
        color: '#3F3F3F',
        url: 'https://4455.co.il',
        type: 'JavaScript'
    },{
        name: "Dani'z Music Studio",
        favicon: 'img/favicons/DanizMusic.ico',
        background: 'img/danizstudio.png',
        color: '#37729B',
        url: 'https://www.danizstudio.co.il/',
        type: 'Site123'
    }, {
        name: 'Fibonacci',
        favicon: 'img/favicons/Fibonnaci.png',
        background: 'img/Fibonacci.png',
        color: 'black',
        url: 'https://avitalpas.github.io/FibonacciCheck/',
        type: 'JavaScript'
    },{
        name: 'Goldfish Kids',
        favicon: 'img/favicons/GoldfishKids.png',
        background: 'img/GoldfishKids.png',
        color: '#F54B00',
        url: 'https://1977866.site123.me/',
        type: 'Site123'
    },{
        name: 'Sudoku',
        favicon: 'img/favicons/Sudoku.ico',
        background: 'img/sudoku.png',
        color: '#040404',
        url: 'https://avitalpas.github.io/Sudoku',
        type: 'JavaScript'
    }, {
        name: 'Smart House',
        color: '#A12A99',
        favicon: 'img/favicons/SmartHouse.png',
        background: 'img/smartHouse.png',
        url: 'https://avitalpas.github.io/smarthouse',
        type: 'React'
    }, {
        name: 'Lazy block',
        favicon: 'img/favicons/LazySquare.png',
        color: '#E13F1C',
        background: 'img/LazyBlock.png',
        url: 'https://avitalpas.github.io/LazyBlock/',
        type: 'CSS'
    }, {
        name: 'Booking',
        favicon: 'img/favicons/Booking.png',
        color: '#243C69',
        background: 'img/booking.png',
        url: 'https://avitalpas.github.io/booking',
        type: 'CSS'
    }, {
        name: 'JavaScript practice',
        favicon: 'img/favicons/JavaScript.png',
        color: '#83CD29',
        background: 'img/JavaScriptPractice.png',
        url: 'https://avitalpas.github.io/JavaScriptPractice',
        type: 'CSS'
    }, {
        name: 'User Management',
        favicon: 'img/favicons/Users Management.png',
        color: 'black',
        background: 'img/UserManagement.png',
        url: 'https://avitalpas.github.io/UserManagement',
        type: 'CSS'
    },{
        name: "Natalya's Studio",
        favicon: 'img/favicons/NatalysStudio.png',
        color: 'black',
        background: "img/Natalya'sStudio.png",
        url: 'https://plando.co.il/dashboard',
        type: 'External'
    }
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

// links
var links = [
    {
        name: 'Google Fonts',
        url: 'https://fonts.google.com',
        type: 'style'
    },{
        name: 'Color from image',
        url: 'https://image-color.com/',
        type: 'style'
    },{
        name: 'Button hovers with icon animation',
        url: 'https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_buttons_animate1',
        type: 'css hovers'
    },{
        name: 'Images hover effects',
        url: 'https://tympanus.net/Development/HoverEffectIdeas/',
        type: 'css hovers'
    },{
        name: 'Buttons CSS hover effects',
        url: 'https://freefrontend.com/css-button-hover-effects',
        type: 'css hovers'
    },{
        name: 'Elements animations 1',
        url: 'https://animista.net/play/basic',
        type: 'animations'
    },{
        name: 'Elements animations 2',
        url: 'https://www.theappguruz.com/tag-tools/web/CSSAnimations/',
        type: 'animations'
    },{
        name: 'Scroll animations',
        url: 'http://michalsnik.github.io/aos/',
        type: 'animations'
    },{
        name: 'Background gradients',
        url: 'https://cssgradient.io/',
        type: 'style'
    },{
        name: 'hr styles',
        url: 'https://css-tricks.com/examples/hrs',
        type: 'style'
    },{
        name: 'Text to one line',
        url: 'https://tools.knowledgewalls.com/online-multiline-to-single-line-converter',
        type: 'essentials'
    },{
        name: 'Buttons JS hover effects 1',
        url: 'https://codepen.io/kjbrum/pen/wBBLXx',
        type: 'JS hovers'
    },{
        name: 'Buttons JS hover effects 2',
        url: 'https://codepen.io/davidicus/pen/emgQKJ',
        type: 'JS hovers'
    }
]

// ***********************************************
//                  Global elements
// ***********************************************

// type buttons element 
var typeButtons = document.querySelector('#typeButtons');

// projects element
var projectsDiv = document.querySelector('.projectsContainer');

// links element
var linksContainter = document.querySelector('.linksContainter');

// certificates element
var certDiv = document.querySelector('.certificates');


// ***************************************************************************
//          Inizialize projects, links, certificates and type buttons
// ***************************************************************************

// project elements and type buttons
for (i = 0; i < projects.length; i++) {

    // create a project element    
    var aContainer = document.createElement('a');
    aContainer.classList.add('projectDiv');
    aContainer.setAttribute('data-id', i);
    aContainer.setAttribute('data-type', projects[i].type);
    aContainer.setAttribute('href', projects[i].url);
    aContainer.setAttribute('target', '_blank');

    aContainer.classList.add('col-md-6');
    aContainer.classList.add('col-lg-4');
    aContainer.classList.add('fade-in-fwd');
    aContainer.classList.add('col-xl-3');

    // header
    var header = document.createElement('div');
    header.classList.add('projectHeader');

    var icon = document.createElement('img');
    icon.src = projects[i].favicon;

    var p = document.createElement('p');
    p.innerHTML = projects[i].name;
    p.style.color = projects[i].color;

    header.appendChild(icon);
    header.appendChild(p);

    // background
    var img = document.createElement('img');
    img.src = projects[i].background;
    img.classList.add('projectImg');


    // append childs to projects
    aContainer.appendChild(header)
    aContainer.appendChild(img)
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

// links
for (i = 0; i < links.length; i++) {
    
    // get current type category containter
    var categoryContainter = document.getElementById(links[i].type);

    // if categoryContainter create element and create the link
    if( categoryContainter == null ){

        // create categories
        var category = document.createElement('div');
        category.classList.add('linkCategory');
        category.id = links[i].type;

        // create type header
        var header = document.createElement('h4');
        header.innerHTML = links[i].type;
        
        // create new link
        var a = document.createElement('a');
        a.innerHTML = links[i].name;
        a.href = links[i].url;
        a.hidden = true;
        a.target = '_blank';

        // append childs
        category.appendChild(header);
        category.appendChild(a);
        linksContainter.appendChild(category);
    }
    else{
        // create new link
        var a = document.createElement('a');
        a.innerHTML = links[i].name;
        a.href = links[i].url;
        a.hidden = true;
        a.target = '_blank';

        // append childs
        categoryContainter.appendChild(a);
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

// ------------ variables ------------

// all projects
var projectDivs = document.querySelectorAll('.projectDiv');

// all projects
var linksElements = document.querySelectorAll('.linksContainter a')

// all certificates
var certElements = document.querySelectorAll('.certificates a')

// ------------ menu ------------

// change active tab by menu click
function changeActive(value) {

    setActive(value);

    // if cert clicked
    if (value == 'cert') {
        hideAllProjects();
        hideLinks();
        showAllCertificates()
    }
    else if( value == 'links' ){
        hideAllProjects();
        showLinks();
    }
    // if all clicked
    else if( value == 'All') {
        hideLinks();
        hideAllCertificates();
        showAllProjects();
    }
    // if specific type clicked
    else{
        hideLinks();
        hideAllCertificates();
        hideAllProjects();
        showProjectByValue(value);
    }
}

// set active tab
function setActive(value){
    // remove current active button
    var curActive = document.querySelector('.active');
    curActive.classList.remove('active');

    // set new active
    document.querySelector('button[value="' + value + '"]').classList.add('active')
}

// ------------ projects ------------

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

// ------------ links ------------

// show all links
function showLinks(){
    for (i = 0; i < linksElements.length; i++) {
        linksElements[i].hidden = false;
    }
}

// hide all links
function hideLinks(){
    for (i = 0; i < linksElements.length; i++) {
        linksElements[i].hidden = true;
    }
}

// ------------ certificates ------------

// show all certificates
function showAllCertificates(){
    for (let i = 0; i < certElements.length; i++) {
        certElements[i].hidden = false;
        certElements[i].classList.remove('fade-out-bck')
        certElements[i].classList.add('fade-in-fwd')
    }
}

// hide all certificates
function hideAllCertificates(){
    for (let i = 0; i < certElements.length; i++) {
        certElements[i].hidden = true;
        certElements[i].classList.add('fade-out-bck')
        certElements[i].classList.remove('fade-in-fwd')
    }
}

// show sertificate preview
function showCertPreview(id){
    var preview = document.querySelector('.certPreview');
    var previewImg = document.querySelector('.certPreview img');
    previewImg.setAttribute('src', certificates[id].img)
    preview.hidden = false;
}

// hide certificates preview
function hideCertPreview(){
    var preview = document.querySelector('.certPreview');
    preview.hidden = true;
}