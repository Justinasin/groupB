
(function() {
	var htmlBody = '<div class="container">'
			+ '<div id="my_navbar">'
			+ '</div>'
			+ '<div id="my_html_body">'
			+ '</div>'
		+ '</div>';
	var elem = document.getElementById("main");
	elem.innerHTML = htmlBody;
	
	navbarBody();
	
	homeBody();
}) ();

function navbarBody(){
	var htmlBody = '<header class="d-flex justify-content-between">'		
		+ '<nav class="navbar navbar-expand-sm">'
		 + '<a class="navbar-brand" href="#">'
			+ '<img src="logo_cr.png" alt="Logo" style="height:30px;">'
		  + '</a>'			
			+ '<ul class="navbar-nav my_nav">'
				+ '<li id="item-home" class="nav-item"><a class="nav-link text-light" href="#home" title="">HOME</a></li>'
				+ '<li id="item-products" class="nav-item"><a class="nav-link text-light" href="#products" title="">PRODUCTS</a></li>'
				+ '<li id="item-templates" class="nav-item"><a class="nav-link text-light" href="#templates" title="">TEMPLATES</a></li>'
				+ '<li id="item-pricing" class="nav-item"><a class="nav-link text-light" href="#pricing" title="">PRICING</a></li>'
			+ '</ul>'
        + '</nav>'
		+ '<div class="navbar navbar-expand-sm">'
			+ '<ul class="navbar-nav">'
				+ '<li class="nav-item"><a class="nav-link text-light" href="#" title="">Sign In</a></li>'
				+ '<li class="nav-item"><a class="nav-link btn btn-light href="#" title="">Sign Up</a></li>'
			+ '</ul>'
		+ '</div>'
    + '</header>';
	
	var elem = document.getElementById("my_navbar");
	elem.innerHTML = htmlBody;

}

function homeBody(){

	var htmlBody = '<section class="content text-light">'
		+ '<h1 class="display-2">Create Stunning'
		+ '<br>Visual Media</h1>'
		+ '<p class="text">Super simple tool to create trendy videos and pictures'
		+ '<br>for your ads, social media, blogs and websites.'
		+ '<br>Make your project  stand out!</p>'
		+ '<button type="button" class="btn btn-danger" data-toggle="modal" data-target="#myContactForm">'
		+ '  Create design  &#8594;'
		+ '</button>'
		+ '<div class="modal text-info" id="myContactForm">'
		+ '<div class="modal-dialog">'
		+ '<div class="modal-content">'
	    + '<div class="modal-header">'
			    + '<h5 class="modal-title">Write to us</h5>'
				+ '<button type="button" class="close" data-dismiss="modal" aria-label="Close">'
				  + '<span aria-hidden="true">&times;</span>'
				+ '</button>'
			  + '</div>'
			  + '<div class="modal-body">'
			  	+ '<form>'
				  + '<div class="form-group">'
					+ '<label for="your-name" class="col-form-label">Your name:</label>'
					+ '<input type="text" class="form-control" id="your-name">'
				  + '</div>'
				  + '<div class="form-group">'
					+ '<label for="your-email" class="col-form-label">Your email:</label>'
					+ '<input type="text" class="form-control" id="your-email">'
				  + '</div>'
				  + '<div class="form-group">'
					+ '<label for="subject-text" class="col-form-label">Subject:</label>'
					+ '<input type="text" class="form-control" id="subject-text">'
				  + '</div>'
				  + '<div class="form-group">'
					+ '<label for="message-text" class="col-form-label">Message:</label>'
					+ '<textarea class="form-control" id="message-text"></textarea>'
				  + '</div>'
				+ '</form>'
			  + '</div>'
			+ '<div class="modal-footer d-flex justify-content-center">				'
				+ '<button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>'
				+ '<button type="button" class="btn btn-primary">Send message</button>'
			  + '</div>'
			+ '</div>'
		  + '</div>'
		+ '</div>'
		+ '</section>';

	var elem = document.getElementById("my_html_body");
	elem.innerHTML = htmlBody;

}

function productsBody(){
	var htmlBody = '<section class="content text-light">'
		+ '<h1 class="display-2">PRODUCTS</h1>'
		+ '</section>';
	
	var elem = document.getElementById("my_html_body");
	elem.innerHTML = htmlBody;
}

function templatesBody(){
	var htmlBody = '<section class="content text-light">'
		+ '<h1 class="display-2">TEMPLATES</h1>'
		+ '<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">'
		  + '<ol class="carousel-indicators">'
			+ '<li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>'
			+ '<li data-target="#carouselExampleIndicators" data-slide-to="1"></li>'
			+ '<li data-target="#carouselExampleIndicators" data-slide-to="2"></li>'
			+ '<li data-target="#carouselExampleIndicators" data-slide-to="3"></li>'
		  + '</ol>'
		  + '<div class="carousel-inner">'
			+ '<div class="carousel-item active">'
			  + '<img class="d-block w-50" src="slider_1s.png" alt="1 slide">'
			+ '</div>'
			+ '<div class="carousel-item">'
			  + '<img class="d-block w-50" src="slider_2s.png" alt="2 slide">'
			+ '</div>'
			+ '<div class="carousel-item">'
			  + '<img class="d-block w-50" src="slider_3s.png" alt="3 slide">'
			+ '</div>'
			+ '<div class="carousel-item">'
			  + '<img class="d-block w-50" src="slider_4s.png" alt="4 slide">'
			+ '</div>'
		  + '</div>'
		  + '<a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">'
			+ '<span class="carousel-control-prev-icon" aria-hidden="true"></span>'
			+ '<span class="sr-only">Previous</span>'
		  + '</a>'
		  + '<a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">'
			+ '<span class="carousel-control-next-icon" aria-hidden="true"></span>'
			+ '<span class="sr-only">Next</span>'
		  + '</a>'
		+ '</div>'
	+ '</section>';
	
	var elem = document.getElementById("my_html_body");
	elem.innerHTML = htmlBody;
}

function pricingBody(){
	var htmlBody = '<section class="content text-light">'
		+ '<h1 class="display-2">PRICING</h1>'
		+ '</section>';
	
	var elem = document.getElementById("my_html_body");
	elem.innerHTML = htmlBody;
}

document.getElementById('item-home').addEventListener('click', homeBody, false); 

document.getElementById('item-products').addEventListener('click', productsBody, false);

document.getElementById('item-templates').addEventListener('click', templatesBody, false);

document.getElementById('item-pricing').addEventListener('click', pricingBody, false); 