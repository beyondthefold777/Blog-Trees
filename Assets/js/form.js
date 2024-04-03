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
    
    //if statement for empty form input
    // if (userNameInput ==null || blogTitleInput ==null || blogContentInput ==null) {
    //     alert("Please submit the form");
    //     console.log('invalid input') 
    //     return false;
    // }
    
    let messages = []
    if (name.value === '' || name.value == null)
    messages.push ('Form Submission Is Required')
    
    
    if (messages.length > 0) {
       e.preventDefault()
       errorElement.innerText = messages.join(',')
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




     
  

 
   

  


  
    
 
    
        
        
        
    
    
    