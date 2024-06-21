const form = document.getElementById('form');
const userName = document.getElementById('userName');
const blogTitle = document.getElementById('blogTitle');
const blogContent = document.getElementById('blogContent');


document.addEventListener(`DOMContentLoaded`, () => {
    document.getElementById('form').onsubmit = 
    function (event) {
        event.preventDefault()
        
        
        // creating objects for local Storage
        const userNameValue = userName.value;
        const blogTitleValue = blogTitle.value;
        const blogContentValue = blogContent.value;
        
            // function for empty form input
            if (!userName || !blogTitle || !blogContent) {
                console.log('invalid input');
                alert ('please fill all fields');
                return false;
            } 
           
    localStorage.setItem('user-name', userNameValue);
    localStorage.setItem('blog-title', blogTitleValue);
    localStorage.setItem('blog-content', blogContentValue);

    window.location.href = 'blog-posts.html';
    }})






    // //object
    //     const user = {
        //     userName: userName,
        //     blogTitle: blogTitle,
        //     blogContent: blogContent,
        //     }
        //     // creation of array for our objects
        //     let blogData = []; 
        
        //     //here we are pushing our object into the empty array
        //     blogData.push(user);
        
        
    
    
    
    
    
    
    
    
    
    
    
        
        
    //   const userName = document.querySelector('#userName').value;
    //   const blogTitle = document.querySelector('#blogTitle').value;
    //   const content = document.querySelector('#blogContent').value;
    
        
    
        
    // // local storage object array
    // localStorage.setItem('blogData', JSON.stringify(blogData));
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    // // submission to local storage
    
    
    
    
         
      
    
     
       
    
      
    
    
      
        
     
        
            
            
            
        
        
        