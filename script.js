// try {

handleJSON;


function handleJSON(e){

    e.preventDefault();
    
fetch('https://jsonplaceholder.typicode.com/posts')
.then ((response) => response.json())
    .then((data) =>  console.log(JSON.parse(((data)[1].title))))
   
.catch((error) => console.error(error));

const topic = document.querySelector('.topic');


const something = JSON.Parse(json);
console.log(something);

}



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

const addPostBar = document.querySelector('#addPost-bar');
const editSection = document.querySelector('.editSection');

    addPostBar.addEventListener('click', showEditTab);

        function showEditTab(){
            editSection.classList.add('active');
        }



const closeEditSection = document.querySelector('#close-editSection');

    closeEditSection.addEventListener('click', removeEditTab);

        function removeEditTab(){
            editSection.classList.remove('active');
        }



// WRITE NEW POST

const inputImage = document.querySelector('#inputImage');
const inputText = document.querySelector('#inputText');

const blogPage = document.querySelector('.blog-page');
const formatPOST = document.querySelector('.formatPOST');

const submitNewPostBtn = document.querySelector('#submitNewPostBtn');

    submitNewPostBtn.addEventListener('click', submitNewPost);

        function submitNewPost(e){
            e.preventDefault();
            if (inputTopic.value == false){
                    alert('Enter Topic')
                }else if(inputImage.value ==false){
                    alert('Choose image')
                }else if(inputText.value ==false){
                    alert('Input Text')
                }else{
                        
                    

                    const newBlogSection = document.createElement('div');
                    newBlogSection.className = 'blog-section';

                    const inputTopic = document.querySelector('#inputTopic');
                        const newImage = document.createElement('img');
                        newImage.id = 'image1';

                    const newTopic= document.createElement('h2')
                    newTopic.className = 'topic';

                    const newMetaData = document.createElement('div');
                    newMetaData.className = 'metadata'

                        const newDate = document.createElement('h4');
                        newDate.className = 'date';

                    const newBlogPost = document.createElement('p');
                    newBlogPost.className = 'blog-post'

                    // const newFormatPost = document.createElement('div');
                    // newFormatPost.className = 'formatPOST';

                    //     const newArticle = document.createElement('a');
                    //     newArticle.target = '_blank';
                    //     newArticle.tagName = 'a';

                    // const newEditPost = document.createElement('div');
                    // newEditPost.className = 'editPost';

                    // const newDeletePost = document.createElement('div')
                    // newDeletePost.className = 'deletePost'


                    //NODES

                // newFormatPost.append(newArticle);
                // newFormatPost.append(newEditPost);
                // newFormatPost.append(newDeletePost);

               

               
                newBlogSection.append(newMetaData)
                        newMetaData.append(newDate);

                newBlogSection.append(newTopic);
                newBlogSection.append(newImage);

                newBlogPost.appendChild(document.createTextNode(inputText.value));
                newImage.appendChild(inputImage);
                newTopic.appendChild(document.createTextNode(inputTopic.value));
                
                newBlogSection.append(newBlogPost);
                newBlogSection.append(formatPOST);
                
                blogPage.appendChild(newBlogSection);

                console.log(newImage.src)

                
                }
        }

// WRITE NEW POST



    // var topic = document.querySelector('.topic').value;
    // var imageBlog = document.querySelector('#image1').value;
    // var blogPost = document.querySelector('.blog-post').value;

    
   


