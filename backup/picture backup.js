
//making variables for my thumbnail grid and magnified image
var thumbnailGrid = document.getElementById("thumbnail-grid");
var magnifiedImage = document.getElementById("magnified-image");

var backButton = document.getElementById("back-button");

var chicagoButton = document.getElementById("Chicago");
var italyButton = document.getElementById("Italy");
var sydneyButton = document.getElementById("Sydney");


//when someone clicks on the thumbnail then it will load into the magnified image
function clickPictures(){
	var clickedElement = event.target;

	if (clickedElement.tagName === "IMG") {
	magnifiedImage.src = clickedElement.src; //puts the clicked image into the image source
	}	
}  
// Bind the function to the thumbnail-grid div's onclick event
thumbnailGrid.onclick = clickPictures; //this will happen when you click on the thumbnail 
	
   
// //trying to get the forward button to work
// var forwardButton = document.getElementById("forward-button"); //created a forward button variable 
// var forwardTracker = 0; //picture tracker is set to first image


// function buttonForwardInteractive(){	
// 	forwardTracker += 1; //will increment by one
// 	magnifiedImage.src = "images/italy/" + forwardTracker + ".jpg"; //will get the images by increments of one and place nto the magnified image placeholder

// 	if (forwardTracker === 6){ //if picture tracker is equal to 6
// 		forwardTracker = 0;	//picture tracker will reset to first image
// 	}	
// }

// forwardButton.onclick = buttonForwardInteractive; //when forward button is click it will start the function buttonInteractive


// //trying to get the back button to work 
// var backButton = document.getElementById("back-button"); //created a back button variable
// var backTracker = 6; //picture tracker is set to last image


// function buttonBackInteractive(){	
// 	backTracker -= 1; 
// 	magnifiedImage.src = "images/italy/" + backTracker + ".jpg"; //will get the images by increments of one and place nto the magnified image placeholder

// 	if (backTracker === 1){ 
// 		backTracker = 6;	
// 	}	
// }

// backButton.onclick = buttonBackInteractive; //when forward button is click it will start the function buttonInteractive




// function 


