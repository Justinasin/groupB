// Different articles 

var homeDiv = `<div id="home">
<h1 class="articleName1">Create Stunning</h1>
<h1 class="articleName2">Visual Media</h1>
<p class="text">Super simple tool to create trendy videos and pictures</p>
<p class="text">for your ads, social media, blogs and websites.</p>
<p class="text">Make your project stand out!</p>
</div>`;
var aboutDiv = `<div id="aboutus">
<h1 class="articleName1">This is about us page</h1>
<h1 class="articleName2">And it talks about ABOUT US</h1>
<p class="text">Sveiki mes esame...</p>
<p class="text">Sveiki mes esame...</p>
<p class="text">Sveiki mes esame...</p>
</div>`;
var pricingDiv = `<div id="pricing">
<h1 class="articleName1">This is pricing page</h1>
<h1 class="articleName2">And it talks about PRICES</h1>
<p class="text">Price 1 is 100$</p>
<p class="text">Price 2 is 200$</p>
<p class="text">Price 3 is 300$</p>
</div>`;
var contactDiv = `<div id="contacts">
<h1 class="articleName1">This is contact page</h1>
<h1 class="articleName2">And it talks about CONTACTS</h1>
<p class="text">Musu telefono numeris yra 911</p>
<p class="text">Emailas - labas@labas.lt</p>
<p class="text">Website www.labas.lt</p>
</div>`;

// 

// Functions to change articles

function addHome() {

    document.getElementById("article").innerHTML = homeDiv;

}

function addAboutUs() {

    document.getElementById("article").innerHTML = aboutDiv;

}

function addPricing() {

    document.getElementById("article").innerHTML = pricingDiv;

}

function addContacts() {

    document.getElementById("article").innerHTML = contactDiv;

}

// var homeObject = {
//     "h1": "This is about us page",
//     "h2": "And it talks about ABOUT US",
//     "p1": "Sveiki mes esame...",
//     "p2": "Sveiki mes esame...",
//     "p3": "Sveiki mes esame..."
// };

// var abiutUsObject = {
//     "h1": "This is about us page",
//     "h2": "And it talks about ABOUT US",
//     "p1": "Sveiki mes esame...",
//     "p2": "Sveiki mes esame...",
//     "p3": "Sveiki mes esame..."
// };

// var pricingObject = {
//     "h1": "This is about us page",
//     "h2": "And it talks about ABOUT US",
//     "p1": "Sveiki mes esame...",
//     "p2": "Sveiki mes esame...",
//     "p3": "Sveiki mes esame..."
// };

// var contactObject = {
//     "h1": "This is about us page",
//     "h2": "And it talks about ABOUT US",
//     "p1": "Sveiki mes esame...",
//     "p2": "Sveiki mes esame...",
//     "p3": "Sveiki mes esame..."
// };

// function changePage(jsonObject) {


//     var first = document.getElementById("article");

//     var h1_1 = document.createElement("h1");
//     h1_1.className = "articleName1";
//     h1_1.id = "articleName1";

//     var h2_1 = document.createElement("h1");
//     h2_1.className = "articleName2";
//     h2_1.id = "articleName2";


//     first.appendChild(h1_1);
//     first.appendChild(h2_1);



//     document.getElementById("articleName1").appendChild(document.createTextNode(jsonObject['h1']));
//     document.getElementById("articleName2").appendChild(document.createTextNode(jsonObject["h2"]));

//     var p1 = document.createElement("p");
//     p1.className = "text";
//     p1.id = "text1";

//     var p2 = document.createElement("p");
//     p2.className = "text";
//     p2.id = "text2";

//     var p3 = document.createElement("p");
//     p3.className = "text";
//     p3.id = "text3";

//     first.appendChild(p1);
//     first.appendChild(p2);
//     first.appendChild(p3);

//     document.getElementById("text1").appendChild(document.createTextNode(jsonObject['p1']));
//     document.getElementById("text2").appendChild(document.createTextNode(jsonObject['p2']));
//     document.getElementById("text3").appendChild(document.createTextNode(jsonObject['p3']));

//     console.log("Labas");
// }


