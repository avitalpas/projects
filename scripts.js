// projects array
var projects=[
    {
        name: 'Sudoku',
        background: 'img/sudoku.png',
        url: 'https://avitalpas.github.io/Sudoku',
        type:'JavaScript'
    },{
        name: 'Smart House',
        background: 'img/smartHouse.png',
        url: 'https://avitalpas.github.io/smarthouse',
        type:'React'
    },{
        name: 'Fibonacci',
        background: 'img/Fibonacci.png',
        url: 'https://avitalpas.github.io/Fibonacci/',
        type:'JavaScript'
    },{
        name: 'Booking',
        background: 'img/booking.png',
        url: 'https://avitalpas.github.io/booking',
        type:'CSS'
    }   
]

// type buttons element 
var typeButtons = document.querySelector('#typeButtons')

// projects element
var projectsDiv = document.querySelector('.projectsContainer')

// add projects array to projects element 
for( i = 0; i < projects.length; i++){

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
    if( checkButton == null ) {

        // create button
        var button = document.createElement('button');
        button.innerHTML = projects[i].type;
        button.setAttribute('value', projects[i].type);
        button.setAttribute('onclick',' changeActive("' + projects[i].type + '")');

        // append child to type buttons
        typeButtons.appendChild(button);
    }
}

// show products by clicked tipe
function changeActive(value){

    // get current active button
    var curActive = document.querySelector('.active');
    curActive.classList.remove('active');

    // set current active
    document.querySelector('button[value="' + value + '"]').classList.add('active')

    // hide all not relevant
    var links = document.querySelectorAll('.projectDiv ');

    for( let i = 0; i < links.length; i++ ){

        // show all 
        links[i].hidden = false;

        if( value != 'All'){
            // hide if not relevant
            if( links[i].getAttribute('data-type') != value ) links[i].hidden = true;
        }
    }

}