//taking inputs from the textboxes
const heading = document.getElementById("heading-input");
const author = document.getElementById("author");
const blog = document.getElementById("blog");

//displaying result
const blogHeading = document.getElementById("blog-heading");
const blogAuthor = document.getElementById("blog-author");
const blogPost = document.getElementById("blog-post");
const blogDate = document.getElementById("date");


let date = new Date();
const day = date.getDate();
const month = date.getMonth();
const currMonth = monthName(month);
const year = date.getFullYear();

function monthName(month) {
    const monthArr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
    return monthArr[month];
}

function postBlog() {
    if (heading.value.length && author.value.length && blog.value.length <= 0) {
        alert("fields cannot be empty");
    }
    else if (heading.value.length <= 0) {
        alert("Heading cannot be empty");
    }
    else if (author.value.length <= 0) {
        alert("Author name is mandatory");
    }
    else if (blog.value.length <= 0) {
        alert("Please enter your blog")
    }
    else {

        blogHeading.textContent = `${heading.value}`;
        blogAuthor.textContent = `By ${author.value}`;
        blogPost.textContent = `${blog.value}`;
        blogDate.textContent = `${day} ${currMonth} ${year}`;
    }

}