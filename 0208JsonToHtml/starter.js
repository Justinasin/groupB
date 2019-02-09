const bodyJson =
    `{
    "body": {
        "div": [{
                "-id": "carouselIndicators",
                "-class": "carousel slide position-absolute",
                "-data-ride": "carousel",
                "-data-interval": "5000",
                "ol": {
                    "-class": "carousel-indicators",
                    "li": [{
                            "-data-target": "#carouselIndicators",
                            "-data-slide-to": "0",
                            "-class": "active"
                        },
                        {
                            "-data-target": "#carouselIndicators",
                            "-data-slide-to": "1"
                        },
                        {
                            "-data-target": "#carouselIndicators",
                            "-data-slide-to": "2"
                        }
                    ]
                },
                "div": {
                    "-class": "carousel-inner",
                    "div": [{
                            "-class": "carousel-item active",
                            "img": {
                                "-src": "./img/front_page1.png",
                                "-class": "d-block w-100",
                                "-alt": "..."
                            },
                            "div": {
                                "-class": "carousel-caption d-none d-md-block"
                            }
                        },
                        {
                            "-class": "carousel-item",
                            "img": {
                                "-src": "./img/front_page2.png",
                                "-class": "d-block w-100",
                                "-alt": "..."
                            }
                        },
                        {
                            "-class": "carousel-item",
                            "img": {
                                "-src": "./img/front_page3.png",
                                "-class": "d-block w-100",
                                "-alt": "..."
                            }
                        }
                    ]
                }
            },
            {
                "-class": "container",
                "nav": {
                    "-id": "navbar"
                },
                "article": {
                    "-id": "article",
                    "-class": "text-white"
                }
            }
        ]
    }
}`

const testJson1 =
    `{
    "div": {
        "class": "navclass",
        "id": "navId",
        "ul": {
            "class": "ulclass",
            "id": "ulId"
            "li": [{
                    "class": "li1class",
                    "id": "l1Id"
                },
                {
                    "class": "li2class",
                    "id": "l2Id"
                },
                
            ]
        },
    }
}`

const testJson =
    `{
    "div": {
        "-class": "navclass",
        "-id": "navId"
    }
}`


// let start = document.getElementById("start");
// let parent = document.getElementById("start");

// document.getElementById(id).innerHTML = node

// let newElement = document.createElement('div');
let newElement = document.getElementById("start")
console.log("newElement= ", newElement);

let bodyJsonPars = JSON.parse(bodyJson);
console.log('bodyJsonPars= ', bodyJsonPars)

let body2 = jsonToHtml(bodyJsonPars, newElement);
setTimeout(console.log("body2 =", body2), 5000);

jsonToHtml(bodyJsonPars, newElement);
insertNode("start", newElement);

// insertNode("navbar", navbar);
// insertNode("article", article1);

//Router
window.onhashchange = () => {
    let href = window.location.href;
    let query = href.split('#')[1];

    switch (query) {
        case 'home':
            insertNode("article", article1);
            break;
        case 'products':
            insertNode("article", article2);
            break;
        default:
            insertNode("article", article1);
    }
};

function insertNode(id, node) {
    document.getElementById(id).innerHTML = node
};


function jsonToHtml(json, parent) {
    let keys = Object.keys(json);
    console.log('keys= ', keys);

    for (let key of keys) {
        console.log('key= ', key);

        let value = json[key];
        console.log('value= ', value);

        //Atribute names in Json have '-' at the beginning   
        if (key.charAt(0) == '-') {
            parent.setAttribute(key.substr(1), value);

            //Array keys are numbers 
        } else if (parseInt(key) > -1) {
            console.log("parentTag= ", parent.tagName);
            let child = document.createElement(parent.tagName);
            if (typeof value != "string") {
                jsonToHtml(value, child);
            }
            parent.appendChild(child);
            console.log("parent= ", parent);

        } else {
            let child = document.createElement(key);
            if (typeof value != "string") {
                jsonToHtml(value, child);
            }
            parent.appendChild(child);
            console.log("parent= ", parent);
        }
    }
}




///////////////////////////////////////////////////


// let key = null;

// let jsonToHtml = (json) => {

//     for (let key in json) {
//         console.log('key= ', key)

//         if (key.charAt(0) != '-') {
//             key = document.createElement(key)
//             console.log('key= ', key);
//         } else {
//             key.setAttribute(key.substr(1), "value")
//         }




//         if (json.hasOwnProperty(key)) {
//             let child = json[key];
//             console.log('child= ', child);
//             jsonToHtml(child);
//         }





// console.log('keys= ', json[key]);
// console.log('getOwnPropertyNames= ', Object.getOwnPropertyNames(key));
// jsonToHtml(key);
// }
// }

//jsonToHtml(bodyJsonPars);