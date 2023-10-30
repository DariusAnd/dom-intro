const hi = 'Labas rytas, Lietuva!'
console.log(hi);

const titleDOM = document.getElementById('title');
console.log(titleDOM);

titleDOM.innerText = hi;

console.log(titleDOM.classList);
//titleDOM.classList.add('red')

for (let i = 0; i < titleDOM.classList.length; i++) {
    const c = titleDOM.classList[i];
    titleDOM.classList.remove(c);
}

// const saectionTitle = 'About us' - elementari reiksme
// const sectionTitleDOM = HTML'inis elementas

const sectionTitle = 'About you'
// const sectionTitleDOM = document.querySelector('.section-title');
// const sectionTitleDOM = document.querySelector('h2');
// const sectionTitleDOM = document.querySelector('h2.section-title');
// const sectionTitleDOM = document.getelement - daug variantu;
const sectionTitleDOM = document.querySelector('h2.section-title > span');

// sectionTitleDOM.innerText = sectionTitle; //dingsta gaublys
sectionTitleDOM.textContent = sectionTitle; // norint issaugoti gaubli, reikia 'About us', kuri yra keiciama, patalpinti tarp <spa></span>
