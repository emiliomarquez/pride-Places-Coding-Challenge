
  fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then((response) => {
      return response.text();
    })
    .then((myContent) => {
      document.querySelector('.titles').innerHTML = myContent;
     
    });
