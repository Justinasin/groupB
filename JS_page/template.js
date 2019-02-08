function template () {
    var text =`<nav class="navbar navbar-expand-sm fixed-top">
				<a href="index.html" class="navbar-brand">
					<img src="assets/images/VIZZY_logo.png">
				</a>
				<button class="navbar-toggler" data-toggle="collapse" data-target="#navbarMenu" >
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarMenu">
					<ul class="navbar-nav mr-auto "  style="margin: 0;">
						<li class="nav-item">
							<a href="#" class="nav-link text-white" onclick="addHome()">home</a>
						</li>
						<li class="nav-item">
							<a href="#" class="nav-link text-white" onclick="addProducts()">products</a>
						</li>
						<li class="nav-item">
							<a href="#" class="nav-link text-white" onclick="addTemplates()">templates</a>
						</li>
						<li class="nav-item">
							<a href="#" class="nav-link text-white" onclick="addPricing()">pricing</a>
						</li>
					</ul>
					
					<ul class="navbar-nav ml-auto" style="margin: 0;">
						<li class="nav-item">
							<a id="signin" href="#popup-signin" class="nav-link">sign-in</a>
						</li>
						<li class="nav-item">
							<a id="signup" href="#popup-signup" class="nav-link">sig-up</a>							
						</li>
					</ul>
				</div>								
			</nav>			
			

			<!-- popup langas Nr1-->
	        <div id="popup-signin" class="overlay">
				<div class="popup">
					<h2>Sign In to WIZZY</h2>
					<a class="close" href="#">&times;</a>
					<div class="content">
						<form class="form" role="form" autocomplete="off" id="formLogin" novalidate="" method="POST">
							<div class="form-group">
								<label for="uname1">Username</label>
								<input type="text" class="form-control form-control-lg rounded-0" name="uname1" id="uname1" required="">
								<div class="invalid-feedback">Oops, you missed this one.</div>
							</div>
							<div class="form-group">
								<label>Password</label>
								<input type="password" class="form-control form-control-lg rounded-0" id="pwd1" required="" autocomplete="new-password">
								<div class="invalid-feedback">Enter your password too!</div>
							</div>
							<button type="submit" class="btn btn-success btn-lg float-right" id="btnLogin">Sign In</button>
						</form>
					</div>
				</div>
			</div>






			<!-- popup langas Nr2-->

			<div id="popup-signup" class="overlay">
				<div class="popup">
					<h2>Sign Up to WIZZY</h2>
					<a class="close" href="#">&times;</a>
					<div class="content">
						<form>
							<div class="form-group">
								<label for="exampleInputEmail1">First name</label>
								<input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter First name">
							</div>
							<div class="form-group">
								<label for="exampleInputEmail1">Last name</label>
								<input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Last name">
							</div>
							<div class="form-group">
								<label for="exampleInputEmail1">Email address</label>
								<input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
								<small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
							</div>
							<div class="form-group">
								<label for="exampleInputPassword1">Password</label>
								<input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
							</div>
							<div class="form-group">
								<label for="exampleInputPassword1">Repeat Password</label>
								<input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
							</div>
							<div class="form-group form-check">
								<input type="checkbox" class="form-check-input" id="exampleCheck1">
								<label class="form-check-label" for="exampleCheck1">I accept the terms & conditions</label>
							</div>
							<button type="submit" class="btn btn-primary">Sign Up</button>
						</form>						
					</div>
				</div>
			</div>


		<!-- </header> -->
		<!--Sitas turi buti loadinamas tik kai yra onclick-->
		<main class="">
		    <section id="main">
	        <section class="section section-carousel" id="section">
	            <article class="article">
					<div class="container">
						<div id="carouselContent" class="carousel slide" data-ride="carousel">
							<div class="carousel-inner" role="listbox">
								<div class="carousel-item active text-center p-4">
									<h1 class="articleName">Create Stunning
										<p>Visual Media</p>
									</h1>
									<h2 class="text">
										<p>Super simple tool to create trendy videos and pictures</p>
										<p>for your ads, social media, blogs and websites.</p>
										<p>Make your project stand out!</p>
									</h2>
									<button class="button" type="button"><h3 class="button-text">CREATE DESIGN &#8594;</h3></button>
								</div>
								<div class="carousel-item text-center p-4">
									<h1 class="articleName">Create Stunning
										<p>Visual Media 2</p>
									</h1>
									<h2 class="text">
										<p>Super simple tool to create trendy videos and pictures</p>
										<p>for your ads, social media, blogs and websites.</p>
										<p>Make your project stand out!</p>
									</h2>
									<button class="button" type="button"><h3 class="button-text">CREATE DESIGN &#8594;</h3></button>
								</div>
								<div class="carousel-item text-center p-4">
									<h1 class="articleName">Create Stunning
										<p>Visual Media 3</p>
									</h1>
									<h2 class="text">
										<p>Super simple tool to create trendy videos and pictures</p>
										<p>for your ads, social media, blogs and websites.</p>
										<p>Make your project stand out!</p>
									</h2>
									<button class="button" type="button"><h3 class="button-text">CREATE DESIGN &#8594;</h3></button>
								</div>
								<div class="carousel-item text-center p-4">
									<h1 class="articleName">Create Stunning
										<p>Visual Media 4</p>
									</h1>
									<h2 class="text">
										<p>Super simple tool to create trendy videos and pictures</p>
										<p>for your ads, social media, blogs and websites.</p>
										<p>Make your project stand out!</p>
									</h2>
									<button class="button" type="button"><h3 class="button-text">CREATE DESIGN &#8594;</h3></button>
								</div>
								</div>
							</div>
							<a class="carousel-control-prev" href="#carouselContent" role="button" data-slide="prev">
								<span class="carousel-control-prev-icon" aria-hidden="true"></span>
								<span class="sr-only">Previous</span>
							</a>
							<a class="carousel-control-next" href="#carouselContent" role="button" data-slide="next">
								<span class="carousel-control-next-icon" aria-hidden="true"></span>
								<span class="sr-only">Next</span>
							</a>
						</div>
					</div>
	            </article>

	        </section>
	        </section>
    	</main>`;

    document.getElementById("body").innerHTML = text;

}