const userNameComment = document.querySelector('#userNameComment');
const userName = document.querySelector('.userName');
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
    if ( userNameComment.value == false){
        alert('Enter Name Please')
    }else if(addComment.value == false){
        alert('Please Enter Comment')
        }else{

            // let div = document.createElement("div")
            // let p = document.createElement("p")
            // div.append(p)


    //create commentBoxforReactions div
            let newUserName = document.createElement('div');
            newUserName.className = 'userName';

            let newCommentBody = document.createElement('div');
            newCommentBody.className='comment-body';

            let newcommentsCommentSectionReal = document.createElement('div');
            newcommentsCommentSectionReal.className ='comments-section-real';

            let newCommentParent = document.createElement('div');
            newCommentParent.className = 'commentBoxforReaction';

            let newcommentAndReply = document.createElement('div');
            newcommentAndReply.className = 'comment-and-reply';

            //create comments

            newUserName.appendChild(document.createTextNode(userNameComment.value.toUpperCase()))
            newCommentBody.appendChild(document.createTextNode(addComment.value));
            
            newcommentsCommentSectionReal.append(newUserName);
            newcommentsCommentSectionReal.append(newCommentBody);
            

            newCommentParent.append(newcommentsCommentSectionReal);
            newcommentAndReply.append(newCommentParent);
            
            commentSection.appendChild(newcommentAndReply);


    

    }  //ADD TEXT NODE

}