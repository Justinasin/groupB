function template() {

    var text = `<div id="carouselExampleIndicators" class="carousel slide h-100 position-absolute" data-ride="carousel">
    <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner">
        <div class="carousel-item active">
            <img src="front_page1.png" class="d-block w-100">
        </div>
        <div class="carousel-item">
            <img src="front_page2.png" class="d-block w-100">
        </div>
        <div class="carousel-item">
            <img src="front_page3.png" class="d-block w-100">
        </div>
    </div>

</div>

<!-- This is navigation and it's loaded all the time -->

<nav class="navbar navbar-expand-lg navbar-dark pl-0">
    <img id="logo" class="navbar-brand" src="Logo.png">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01"
        aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarColor01">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item">
                <a class="nav-link text-white" href="#=" onclick="addHome()">Home</a>
            </li>
            <li class="nav-item">
                <a class="nav-link text-white" href="#" onclick="addAboutUs()">About us</a>
            </li>
            <li class="nav-item">
                <a class="nav-link text-white" href="#" onclick="addPricing()">Pricing</a>
            </li>
            <li class="nav-item">
                <a class="nav-link text-white" href="#" onclick="addContacts()">Contacts</a>
            </li>
        </ul>
        <form class="my-2 my-lg-0 pt-2">
            <button class="btn btn-md btn-hover" id="signin" href="#">Sign in</button>
            <button class="btn btn-md btn-hover" id="signup" href="#">Sign up</button>
        </form>
    </div>
</nav>

<!-- This is MAIN section and it supposed to be loaded on click -->

<main>
    <section class="section position-absolute">
        <article class="article" id="article">

            <div class="page1">
                <h1 class="articleName1">Create Stunning</h1>
                <h1 class="articleName2">Visual Media</h1>
                <p class="text">Super simple tool to create trendy videos and pictures</p>
                <p class="text">for your ads, social media, blogs and websites.</p>
                <p class="text">Make your project stand out!</p>
            </div>

        </article>
        <a class="button" href="#popup1" type="button">CREATE DESIGN ➜</a>
        <div id="popup1" class="overlay">
            <div class="popup">
                <div class="topButtons">
                    <input id="tab-1" type="radio" name="tab" class="sign-in" checked><label for="tab-1" class="tab">Sign
                        In</label>
                    <input id="tab-2" type="radio" name="tab" class="sign-up"><label for="tab-2" class="tab">Sign
                        Up</label>

                </div>

                <a class="close" href="#">&times;</a>

            </div>
        </div>
    </section>

</main>
<footer>

    <!--  This is a footer and it's loaded all the time -->

</footer>`;


    document.getElementById("body").innerHTML = text;



}

let insertNode = (id, node) => document.getElementById(id).innerHTML = node;

window.onhashchange = () => {
    let href = window.location.href;

    let query = href.split('#')[1];

    switch (query) {
        case 'home':
            insertNode("article", homeDiv);
            break;
        case 'aboutus':
            insertNode("article", aboutDiv);
            break;
        case 'pricing':
            insertNode("article", pricingDiv);
            break;
        case 'contacts':
            insertNode("article", contactDiv);
            break;
        default:
            insertNode("article", homeDiv);
    }
};





