const form = document.getElementById('form');
const userName = document.getElementById('userName');
const blogTitle = document.getElementById('blogTitle');
const blogContent = document.getElementById('blogContent');
const mybtn = document.getElementById('submit')
//Submit button function
document.addEventListener(`DOMContentLoaded`, () => {
    document.getElementById('form').onsubmit = 
    function (event) {
        event.preventDefault()
        console.log('submit')
        
    }});
    
    const userNameInput = userName.value.trim();
    const blogTitleInput = blogTitle.value.trim();
    const blogContentInput = blogContent.value.trim();
    
    // function for empty form input
    function IsEmpty() {

        if (document.form.userName.value == "") {
          alert("empty");
        }
        return;
      }
   

    //creation of array for our objects
    let blogData = [] 
//object
    const user = {
    userName: userName,
    blogTitle: blogTitle,
    blogContent: blogContent,
    }
    blogData.push(user)
    console.log(blogData)


// local storage object array
localStorage.setItem('blogData', JSON.stringify(blogData));














// submission to local storage




     
  

 
   

  


  
    
 
    
        
        
        
    
    
    