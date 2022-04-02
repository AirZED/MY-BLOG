try {
    "use strict";


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

const blogSkin = document.querySelector('.blog-skin');
const formatPOST = document.querySelector('.formatPOST');

const submitNewPostBtn = document.querySelector('#submitNewPostBtn');

    submitNewPostBtn.addEventListener('click', submitNewPost);
    
    // inputImage.addEventListener('change', showImage);

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
                      
                        //The files in the DOM are accessible with the keyword file, hence input ID.files access all the files inside the DOM
                        //and specifying the latest file uses a syntax similar to getting objects from arrays. file[0]
                        //URL.createObjectURL(file[0]) was used to create a URL for the file in the DOM, and it was assigned to the src attribute of the file
                        //hence upload.
                        
                    var file = inputImage.files
                    //    RE-Defining new image source
                    
                    var newImageSrc = URL.createObjectURL(file[0]);
                        
                    var newImage = document.createElement('img');
                        newImage.id = 'image1';
                        newImage.setAttribute('src', newImageSrc);

                                        

                    const newTopic= document.createElement('h2')
                        newTopic.className = 'topic';

                    const newMetaData = document.createElement('div');
                        newMetaData.className = 'metadata'

                    const newDate = document.createElement('h4');
                        newDate.className = 'date';
                    const freshDates = new Date();
                    const dateStructure =  freshDates.toDateString();
                        newDate.appendChild(document.createTextNode(dateStructure));

                    const newBlogPost = document.createElement('p');
                    newBlogPost.className = 'blog-post';         

               
                newBlogSection.append(newImage);
                newBlogSection.append(newMetaData)
                        newMetaData.append(newDate);

                newBlogPost.appendChild(document.createTextNode(inputText.value));
                newTopic.appendChild(document.createTextNode(inputTopic.value));
                
                newBlogSection.append(newBlogPost);
                newBlogSection.append(formatPOST);
                
                blogSkin.appendChild(newBlogSection);

            }
        }


    // the throw creates custom errors for various examples e.g

    // if(x<5) throw "Greater";
    
} catch (error) {
    console.log(error);
}

finally{
   alert('Chargers Alert')
}
   


