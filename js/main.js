// functioning getInfo() when its clicked
function getInfo(){
	// setting variables for new tags, elements and images
	var username = document.getElementById('username').value
	var comment = document.getElementById('comment').value
	
	var commentList = document.getElementById('commentList')
	var newList = document.createElement('li')
	newList.className = 'grouplist'
	var newH3 = document.createElement('h3')
	var newP = document.createElement('p')
	newP.className = 'gogo'
	var newP2 = document.createElement('p')
	var newImage = document.createElement('img')
	newImage.setAttribute('src', 'img/tech2.jpg')
	newImage.className = 'newImage'
	
	// creating new textNode
	var text = document.createTextNode('username: ' + username)
	var text2 = document.createTextNode('comment: ' + comment)
	var text3 = document.createTextNode(Date())

	// appending all the new elements and textNodes
	commentList.appendChild(newList)
	newList.appendChild(newH3)
	newH3.appendChild(text)
	newList.appendChild(newP)
	newP.appendChild(text2)
	newList.appendChild(newP2)
	newP2.appendChild(text3)
	newList.appendChild(newImage)


	// making comment change its color when its even and odd
	$(document).ready(function(){
	$('.gogo:even').css('color', 'red')
	$('.gogo:odd').css('color', 'green')
})

}

// making the delete button toggle using jquery
$(document).ready(function(){
	$('#delete').click(function(){
		$('.grouplist').toggle()
	})
})




