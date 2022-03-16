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


function swapToCloseBar(e){
    e.preventDefault();
    menuBar.parentNode.replaceChild(closeBar, menuBar);
    navBar.classList.add('active');
    closeBar.classList.add('active');
    
    
}

function swapToMenuBar(e){
    e.preventDefault();
    closeBar.parentNode.replaceChild(menuBar, closeBar)
    navBar.classList.remove('active');
}

function showSearchBar(e){
    e.preventDefault();
    searchBar.classList.add('active');
    searchBtn.classList.add('inactive');
}

function searchInDocument(e){
    e.preventDefault();
    searchBtn.classList.remove('inactive');
    searchBar.classList.remove('active');
}


//FOR COMMENTING
const submitComment = document.querySelector('#submit-comment');
const addComment = document.querySelector('#addComment');
const commentBody = document.querySelector('.comment-body');
const commentAndReply = document.querySelector('.comment-and-reply');
const commentSection = document.querySelector('.comment-section');
//FOR COMMENTING


//FOR COMMENTING
submitComment.addEventListener('click', submitWrittenComment);
//FOR COMMENTING


//FOR COMMENTING
function submitWrittenComment(e){
    e.preventDefault();

    //create NEW comment-section div


            // let div = document.createElement("div")
            // let p = document.createElement("p")
            // div.append(p)


    //create commentBoxforReactions div

    let newCommentBody = document.createElement('div');
    newCommentBody.className='comment-body';

    let newcommentsCommentSectionReal = document.createElement('div');
    newcommentsCommentSectionReal.className ='comments-section-real';

    let newCommentParent = document.createElement('div');
    newCommentParent.className = 'commentBoxforReaction';

    let newcommentAndReply = document.createElement('div');
    newcommentAndReply.className = 'comment-and-reply';

    

    //create comments-section-real div

    

    //create new comment-and-reply
    
    newCommentBody.appendChild(document.createTextNode(addComment.value));
    newcommentsCommentSectionReal.append(newCommentBody);
    newCommentParent.append(newcommentsCommentSectionReal);
    newcommentAndReply.append(newCommentParent);
    
    commentSection.appendChild(newcommentAndReply);


    

    //ADD TEXT NODE

}
//FOR COMMENTING