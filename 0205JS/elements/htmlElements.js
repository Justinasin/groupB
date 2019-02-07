const body =
    `
<body>
    <!-- Background -->
    <div id="carouselIndicators" class="carousel slide position-absolute" data-ride="carousel" data-interval="5000">
        <ol class="carousel-indicators">
            <li data-target="#carouselIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselIndicators" data-slide-to="1"></li>
            <li data-target="#carouselIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="./img/front_page1.png" class="d-block w-100" alt="..." />
                <div class="carousel-caption d-none d-md-block"></div>
            </div>

            <div class="carousel-item">
                <img src="./img/front_page2.png" class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
                <img src="./img/front_page3.png" class="d-block w-100" alt="..." />
            </div>
        </div>
    </div>
  
    <div class="container">
       
        <nav id="navbar"></nav>

        <article id = "article" class="text-white"> </article>

    </div>
</body>
`
const navbar = `
<div class="navbar navbar-expand-lg navbar-dark ">
    <a class="navbar-brand" href="#">
        <img src="./img/VIZZY_logo.png" width="150" height="30" class="d-inline-block align-top" alt="" />
    </a>
    <button class="navbar-toggler btn-light" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
                <a class="nav-link text-white " href="#home" >HOME <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
                <a class="nav-link text-white" href="#products" >PRODUCTS</a>
            </li>
            <li class="nav-item">
                <a class="nav-link text-white" href="#templates">TEMPLATES</a>
            </li>
            <li class="nav-item">
                <a class="nav-link text-white" href="#pricing">PRICING</a>
            </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
            <button class="btn my-2 my-sm-0 text-white" type="submit">
                SIGN IN
            </button>
            <button class="btn btn-light my-2 my-sm-0" type="submit">
                SIGN UP
            </button>
        </form>
    </div>
</div>


`;

const article1 = `

    <div class="row">
        <div class="col">
            <h1 class="display-4">Create Stunning Visual Media</h1>
            <!-- <h1 class="display-4">Visual Media</h1> -->
            <p>Super simpletool to create trendy videos
                and pictures for your ads, social media, blogs and websites.</p>
            <!-- <p>and pictures for your ads, social media,</p>
                <p>blogs and websites.</p> -->
            <p>Make your project stand out!</p>
        </div>
        <div class="col-3"></div>
    </div>


<button id="createDesignBtn" type="button" class="btn btn-danger" data-toggle="modal" data-target="#Modal1">
    CREATE DESIGN &rarr;
</button>


<!-- Modal -->
<div class="modal fade" id="Modal1" tabindex="-1" role="dialog" aria-labelledby="Modal1Label" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="Modal1Label">Create design</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <p>
                    Please check at what phase you are and use our site accordingly
                </p>
                <img id="modal1-immage" src="./img/progress.jpg" alt="progress" />
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">
                    Foff
                </button>
                <button type="button" class="btn btn-primary">Pricing</button>
            </div>
        </div>
    </div>
</div>
`;

const article2 = `
<div class="row">
    <div class="col">
        <article class="text-white">
        <h1 class="display-4">Our Products</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, odit? Esse tempore cum repellendus
            quidem rem, cumque eligendi dolore. Harum, doloremque expedita tempora necessitatibus maiores nam iure
            possimus molestiae eligendi!</p>

        </article>
    </div>
    <div class="col-3"></div>
</div>
`;