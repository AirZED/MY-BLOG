/*

GOALS
THIS IS MY ALGORITHM FOR THIS BLOG
// 1.  MAKE THE SIMPLE FUNCTIONALITIES WORK
// 2.  USE LOOP THE DISPLAY THE AMOUNT OF DATA I DESIRE
// 3.  USE MAP TO SPREAD THE ARRAY
3b. Handle SUBMIT POST
4.  CHANGE THE OLD SYNTAX TO ES6
5.  ACHEIVE DRY - DONT REPREAT YOURSELF
6. Consume API data



SO HELP ME GOD
*/

const dataToBeConsumed= [{
    userId: 1,
    id: 1,
    title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  },
  {
    userId: 1,
    id: 2,
    title: "qui est esse",
    body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
  },
  {
    userId: 1,
    id: 3,
    title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
  },
  {
    userId: 1,
    id: 4,
    title: "eum et est occaecati",
    body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
  },
  {
    userId: 1,
    id: 5,
    title: "nesciunt quas odio",
    body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
  },
];
const menuBar = document.querySelector("#menu-bar");
const closeBar = document.querySelector("#close-bar");

//For Menu Bar Navigation
const navBar = document.querySelector(".nav-bar");

//For Search Bar
const searchBtn = document.querySelector("#search-btn");
const searchBar = document.querySelector(".searchBar");

//For Search Filter
const SearchFilter = document.querySelector("#search-btn-real");

menuBar.addEventListener("click", swapToCloseBar);
closeBar.addEventListener("click", swapToMenuBar);
searchBtn.addEventListener("click", showSearchBar);
SearchFilter.addEventListener("click", searchInDocument);

function swapToCloseBar(e) {
  e.preventDefault();
  menuBar.parentNode.replaceChild(closeBar, menuBar);
  navBar.classList.add("active");
  closeBar.classList.add("active");
}

function swapToMenuBar(e) {
  e.preventDefault();
  closeBar.parentNode.replaceChild(menuBar, closeBar);
  navBar.classList.remove("active");
}

function showSearchBar(e) {
  e.preventDefault();
  searchBar.classList.add("active");
  searchBtn.classList.add("inactive");
}

function searchInDocument(e) {
  e.preventDefault();
  searchBtn.classList.remove("inactive");
  searchBar.classList.remove("active");
}

//FOR COMMENTING

const addPostBar = document.querySelector("#addPost-bar");
const editSection = document.querySelector(".editSection");

addPostBar.addEventListener("click", showEditTab);

function showEditTab() {
  editSection.classList.add("active");
}

const closeEditSection = document.querySelector("#close-editSection");

closeEditSection.addEventListener("click", removeEditTab);

function removeEditTab() {
  editSection.classList.remove("active");
}


//CONSUMING API
//Loop to consume API
for (let i = 0; i > 10; i++){

}


//Displaing Data
const dataPack = dataToBeConsumed.map(
  (eachData) => ` <div class="blog-section">
                    <img src="./images/BMW.jpg" id='image1' alt="BMW CAR">
                    <h2 class="topic">${eachData.title}</h2>
                    <div class="metadata">
                        <h4 class="date">5th March 2022</h4>
                    </div>
                    <p class="blog-post">${eachData.body}</p>
                    <div class="formatPOST">
                        <div class="read-more">READ MORE</div>
                        <div class="editPost">EDIT POST</div>
                        <div class="deletePost">DELETE POST</div>
                    </div>
                </div>`
).join('');

let id = dataPack.map(eachid => { eachid.id });
console.log(id)
let blogSkin = document.querySelector(".blog-skin");
blogSkin.innerHTML = dataPack;




/*



console.log(data);

let multiplied = data.map((dataValues) => {
  `
               <div>
                    <img src="./images/BMW.jpg" id='image1' alt="BMW CAR">
                    <h2 class="topic">${dataValues.title}}</h2>
                    <div class="metadata">
                        <h4 class="date">5th March 2022</h4>
                    </div>
                    <p class="blog-post">${dataValues.body} </p>
                    <div class="formatPOST">
                        <div class="read-more">READ MORE</div>
                        <div class="editPost">EDIT POST</div>
                        <div class="deletePost">DELETE POST</div>
                    </div>
                </div>`;
}).join(``);

// WRITE NEW POST

const inputImage = document.querySelector("#inputImage");
const inputText = document.querySelector("#inputText");

const blogSkin = document.querySelector(".blog-skin");
blogSkin.innerHTML = multiplied;

const formatPOST = document.querySelector(".formatPOST");

const submitNewPostBtn = document.querySelector("#submitNewPostBtn");

submitNewPostBtn.addEventListener("click", submitNewPost);

function submitNewPost(e) {
  e.preventDefault();
  if (inputTopic.value == false) {
    alert("Enter Topic");
  } else if (inputImage.value == false) {
    alert("Choose image");
  } else if (inputText.value == false) {
    alert("Input Text");
  } else {
    const newBlogSection = document.createElement("div");
    newBlogSection.className = "blog-section";

    //The files in the DOM are accessible with the keyword file, hence input ID.files access all the files inside the DOM
    //and specifying the latest file uses a syntax similar to getting objects from arrays. file[0]
    //URL.createObjectURL(file[0]) was used to create a URL for the file in the DOM, and it was assigned to the src attribute of the file
    //hence upload.

    var file = inputImage.files;
    //    RE-Defining new image source

    var newImageSrc = URL.createObjectURL(file[0]);

    var newImage = document.createElement("img");
    newImage.id = "image1";
    newImage.setAttribute("src", newImageSrc);

    const newTopic = document.createElement("h2");
    newTopic.className = "topic";

    const newMetaData = document.createElement("div");
    newMetaData.className = "metadata";

    const newDate = document.createElement("h4");
    newDate.className = "date";
    const freshDates = new Date();
    const dateStructure = freshDates.toDateString();
    newDate.appendChild(document.createTextNode(dateStructure));

    const newBlogPost = document.createElement("p");
    newBlogPost.className = "blog-post";

    newBlogSection.append(newImage);
    newBlogSection.append(newMetaData);
    newMetaData.append(newDate);

    newBlogPost.appendChild(document.createTextNode(inputText.value));
    newTopic.appendChild(document.createTextNode(inputTopic.value));

    newBlogSection.append(newBlogPost);

    newBlogSection.appendChild(formatPOST);

    blogSkin.appendChild(newBlogSection);
  }
}

// HANDLING JSON USING NORMAL FETCH
function consumeAPI() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((json) => {
      var blogTopic = document.querySelectorAll(".topic");
      var blogBody = document.querySelectorAll(".blog-post");
      var blogTopicLength = blogTopic.length;

      var usefulArray = json.splice(0, blogTopicLength);
      console.log(usefulArray[1].body);

      blogTopic.forEach((bloop, indexOneId) => {
        console.log(bloop);
        usefulArray.forEach((bleep, indexTwoId) => {
          console.log(bleep);

          // if (indexOneId === indexTwoId) {
          //   blogTopic[indexOneId].innerHTML = usefulArray[indexOneId].title;
          // }

          for (var i = 0; i < usefulArray.length; i++) {
            blogTopic[i].innerHTML = usefulArray[i].title;
            blogBody[i].innerHTML = usefulArray[i].body;
          }
        });
      });
    })
    .catch((error) => {
      console.error(error.name);
      console.error(error.message);
    });

  // USING ASYNC AND AWAIT FOR SAME CODE

  // async function catchPost() {
  //   const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  //   const json = await response.json();
  // }
  // catchPost();
}
consumeAPI();

//MANAGE ARTICLE SECTION
function manageArticle() {
  const userNameComment = document.querySelector("#userNameComment");
  const userName = document.querySelector(".userName");
  const submitComment = document.querySelector("#submit-comment");
  const addComment = document.querySelector("#addComment");
  const commentBody = document.querySelector(".comment-body");
  const commentAndReply = document.querySelector(".comment-and-reply");
  const commentSection = document.querySelector(".comment-section");
  //FOR COMMENTING

  //FOR COMMENTING
  submitComment.addEventListener("click", submitWrittenComment);
  //FOR COMMENTING

  //FOR COMMENTING
  function submitWrittenComment(e) {
    e.preventDefault();

    //create NEW comment-section div
    if (userNameComment.value == false) {
      alert("Enter Name Please");
    } else if (addComment.value == false) {
      alert("Please Enter Comment");
    } else {
      // let div = document.createElement("div")
      // let p = document.createElement("p")
      // div.append(p)

      //create commentBoxforReactions div
      let newUserName = document.createElement("div");
      newUserName.className = "userName";

      let newCommentBody = document.createElement("div");
      newCommentBody.className = "comment-body";

      let newcommentsCommentSectionReal = document.createElement("div");
      newcommentsCommentSectionReal.className = "comments-section-real";

      let newCommentParent = document.createElement("div");
      newCommentParent.className = "commentBoxforReaction";

      let newcommentAndReply = document.createElement("div");
      newcommentAndReply.className = "comment-and-reply";

      //create comments

      newUserName.appendChild(
        document.createTextNode(userNameComment.value.toUpperCase())
      );
      newCommentBody.appendChild(document.createTextNode(addComment.value));

      newcommentsCommentSectionReal.append(newUserName);
      newcommentsCommentSectionReal.append(newCommentBody);

      newCommentParent.append(newcommentsCommentSectionReal);
      newcommentAndReply.append(newCommentParent);

      commentSection.appendChild(newcommentAndReply);
    } //ADD TEXT NODE
  }
}

manageArticle();

function tooglePages() {
  // pages
  var indexSection = document.getElementById("index-section");
  var adminSection = document.getElementById("admin-section");
  var articleSection = document.getElementById("article-section");
  // pages

  // pages buttons
  var adminLogin = document.querySelector("#adminLogin");
  var adminLogout = document.querySelector("#adminLogout");
  // pages buttons

  adminLogin.addEventListener("click", (e) => {
    e.preventDefault();
    indexSection.classList.add("inactive");
    adminSection.classList.add("inactive");
  });

  adminLogout.addEventListener("click", (e) => {
    e.preventDefault();
    indexSection.classList.remove("inactive");
    adminSection.classList.remove("inactive");
  });
}
tooglePages();
*/