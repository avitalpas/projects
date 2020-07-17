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
}
