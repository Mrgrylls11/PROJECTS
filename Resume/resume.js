const copying = document.querySelector('.one');
let tag = document.querySelector('.here');
tag.style.display = "none";
copying.addEventListener('click',()=>{

    navigator.clipboard.writeText("ashucool049@gmail.com");
    // console.log('hey');
    
    tag.style.display = "block";
  setTimeout(function() {
    tag.style.display = "none";
  }, 1000);
})