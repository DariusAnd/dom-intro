const h1DOM = document.querySelector('h1');

// h1DOM.innerHTML = 'Movies...'; tekstui html naudoti negalima!
h1DOM.innerText = 'Movies...';

const movies = [
    'Pretendent',
    'A Team',
    'Dunkan MacLeod',
    'Matrix',
    'Walker: Texas Ranger',
    'Her name Nikita',
    'Shrek',
    'Mario',
    'Sphera',
];

const ulDOM = document.getElementsByTagName('ul')[0];

let moviesHTML = '';
/*
'
<li>Pav</>
<li>Pav</>
<li>Pav</>
<li>Pav</>
'
*/ 

for(let i = 0; i < movies.length; i++) {
    const movieTitle = movies[i];
    moviesHTML += `<li>${movieTitle}</li>`
}

ulDOM.innerHTML = moviesHTML;
