
fetch('https://jsonplaceholder.typicode.com/posts/')
    .then((response) => {
      return response.text();
    })
    .then((myContent) => {
    		var obj = JSON.parse(myContent);
    		for(let i = 0; i < obj.length; i++){
    			document.getElementById("titles").innerHTML += JSON.stringify(obj[i].title) + "<br />";
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
