
fetch('https://jsonplaceholder.typicode.com/posts/')
    .then((response) => {
      return response.text();
    })
    .then((postInfo) => {
    		var obj = JSON.parse(postInfo);
    		for(let i = 0; i < obj.length; i++){
    			//document.getElementById("titles").innerHTML += `<button id=obj-${i}>` + JSON.stringify(obj[i].title) + "</button>" + "<br />";
    			document.getElementById("titles").innerHTML += `<button class=myBtn>` + JSON.stringify(obj[i].title) + "</button>" + "<br />";

    		}

    		// Get the modal
			var modal = document.getElementById("myModal");

			// Get the button that opens the modal
			var btn = document.getElementsByClassName("myBtn");

			// Get the <span> element that closes the modal
			var span = document.getElementsByClassName("close")[0];

			fetch('https://jsonplaceholder.typicode.com/users/')
			    .then((response) => {
			      return response.text();
			    })
			    .then((userInfo) => {
			    	var users = JSON.parse(userInfo);

			    	/*
			    	console.log(JSON.stringify(users[0].name));
			    	console.log(JSON.stringify(users[0].company.catchPhrase));
			    	console.log(users[0].name);
			    	console.log(obj[0].userId);
					*/

			    	for (let j = 0; j < btn.length; j++) {  
			    		//console.log(`j = ${j}`);
			    		//console.log(JSON.stringify(users[obj[j].userId].name));
			    		//console.log(obj[j].userId-1);
      
					    btn[j].onclick = function() {
						  modal.style.display = "block";
						  var postAuthor = JSON.stringify(users[obj[j].userId-1].name);
						  var postAuthorCatchPhrase = JSON.stringify(users[obj[j].userId-1].company.catchPhrase);


						  document.getElementById("modal-text").innerHTML = "Post Author: " + postAuthor + "<br />" +
						  "Post Author's CatchPhrase: " + postAuthorCatchPhrase + "<br />" +
						  "Post Title: " + JSON.stringify(obj[j].title) + "<br />"  +
						  "Post Body: " + JSON.stringify(obj[j].body) + "<br />";
						  
						}
					}

    	 	});

			/*
			for (let j = 0; j < btn.length; j++) {        
			    btn[j].onclick = function() {
				  modal.style.display = "block";
				  document.getElementById("modal-text").innerHTML = "Post Title: " + JSON.stringify(obj[j].title) + "<br />"  +
				  "Post Body: " + JSON.stringify(obj[j].body) + "<br />";
				  
				}
			}
			*/

			/*
			// When the user clicks on the button, open the modal
			btn[0].onclick = function() {
			  modal.style.display = "block";
			}

			// When the user clicks on the button, open the modal
			btn[1].onclick = function() {
			  modal.style.display = "block";
			}
			*/

			// When the user clicks on <span> (x), close the modal
			span.onclick = function() {
			  modal.style.display = "none";
			}

			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
			  if (event.target == modal) {
			    modal.style.display = "none";
			  }
			}




    		/*
    		var obj = JSON.parse(myContent);
    		console.log(obj);
    		var res = [];

    		for(var i in obj)
    			res.push(obj[i]);

    		document.getElementById("titles").innerHTML = JSON.stringify(res[0].title);
    		*/
 		
     
 });
