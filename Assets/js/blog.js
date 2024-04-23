
const userName = localStorage.getItem('user-name');
const blogTitle = localStorage.getItem('blog-title');
const blogContent = localStorage.getItem('blog-content');

document.getElementById('user-name').textContent = userName;
document.getElementById('blog-title').textContent = blogTitle;
document.getElementById('blog-content').textContent = blogContent;


 

	// document.addEventListener('DOMContentLoaded', () => {
	//   const textBox = document.getElementById('text-Box');
	 
	//   const blogData = 
	  //   {
	  //     "userName": "John Doe",
	  //     "blogTitle": "First Post",
	  //     "blogContent": "This is the content of the first post."
	  //   },
	  //   {
	  //     "userName": "Jane Smith",
	  //     "blogTitle": "Second Post",
	  //     "blogContent": "This is the content of the second post."
	  //   }
	  // ];
	 
	//   function blogPosts() {
	//     const posts = blogData;
	//     textBox.innerHTML = "";
	 
	//     posts.forEach(post => {
	//       const postElement = document.createElement('div');
	//       postElement.classList.add('text-Box');
	//       postElement.innerHTML = `
	//           <h2>${post.userName}</h2>
	//           <p>${post.blogTitle}</p>
	//           <p>${post.blogContent}</p>`;
	//       textBox.appendChild(postElement);
	//     });
	//   } 
	//   blogPosts();
	// });