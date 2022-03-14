const menuBar = document.querySelector("#menu-bar");
const closeBar = document.querySelector('#close-bar');

//For Menu Bar Navigation
const navBar = document.querySelector('.nav-bar');

//For Search Bar
const searchBtn = document.querySelector('#search-btn');
const searchBar = document.querySelector('.searchBar');

//For Search Filter
const SearchFilter = document.querySelector('#search-btn-real');


menuBar.addEventListener('click', swapToCloseBar);
closeBar.addEventListener('click', swapToMenuBar);
searchBtn.addEventListener('click', showSearchBar);
SearchFilter.addEventListener('click', searchInDocument);


function swapToCloseBar(){
    menuBar.parentNode.replaceChild(closeBar, menuBar);
    navBar.classList.add('active');
    closeBar.classList.add('active');
    
    
}

function swapToMenuBar(e){
    closeBar.parentNode.replaceChild(menuBar, closeBar)
    navBar.classList.remove('active');
}

function showSearchBar(){
    searchBar.classList.add('active');
    searchBtn.classList.add('inactive');
}

function searchInDocument(){
    searchBtn.classList.remove('inactive');
    searchBar.classList.remove('active');
}