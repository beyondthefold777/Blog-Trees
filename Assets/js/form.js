const form = document.getElementById('form');
const userName = document.getElementById('userName');
const blogTitle = document.getElementById('blogTitle');
const blogContent = document.getElementById('blogContent');
const mybtn = document.getElementById('submit')

document.addEventListener(`DOMContentLoaded`, () => {
document.getElementById('form').onsubmit = 
function (event) {
event.preventDefault()
console.log('submit')

});

const userNameInput = userName.value.trim();
const blogTitleInput = blogTitle.value.trim();
const blogContentInput = blogContent.value.trim();

if (!userNameInput || !blogTitleInput || !blogContentInput) {
    alert("Please submit the form");
    console.log('invalid input') 
    return
}


const user = {
    userName: userNameInput,
    blogTitle: blogTitleInput,
    blogContent: blogContentInput,
  };



// local storage object

localStorage.setItem('user', JSON.stringify(user));












// submission to local storage




     
  

 
   

  


  
    
 
    
//     //      let messages = []
//     //   if (name.value === '' || name.value == null)
//     //   messages.push ('Form Submission Is Required')
    
    
    // if (messages.length > 0) {
        //     e.preventDefault()
        //     errorElement.innerText = messages.join(',')
        // }
        
        
        
    
    
    