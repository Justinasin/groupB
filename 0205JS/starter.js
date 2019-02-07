let insertNode = (id, node) => document.getElementById(id).innerHTML = node;

insertNode("start", body);
insertNode("navbar", navbar);
insertNode("article", article1);

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



// const xml = '<e name="value">text</e>';

// const json = 
// `

// `
// let test = json2xml(xml);

//             div: {
//                 'class': 'collapse',
//                 'id': 'navbarSupportedContent',
//                 ul: {
//                     'class': 'navbar',
//                     li: [{
//                             '-class': 'nav-item active',
//                             a: {
//                                 '-class': 'nav-link text-white ',
//                                 '-href': '/index.html',
//                                 '#text': 'HOME ',
//                                 span: {
//                                     '-class': 'sr-only',
//                                     '#text': '(current)'
//                                 }
//                             }
//                         },
//                         {
//                             '-class': 'nav-item',
//                             a: {
//                                 '-class': 'nav-link text-white',
//                                 '-href': '/products.html',
//                                 '#text': 'PRODUCTS'
//                             }
//                         },
//                         {
//                             '-class': 'nav-item',
//                             a: {
//                                 '-class': 'nav-link text-white',
//                                 '-href': '#templtes',
//                                 '#text': 'TEMPLATES'
//                             }
//                         },
//                         {
//                             '-class': 'nav-item',
//                             a: {
//                                 '-class': 'nav-link text-white',
//                                 '-href': '#pricing',
//                                 '#text': 'PRICING'
//                             }
//                         }
//                     ]
//                 },












// insertNode("start", test);

function json2xml(o, tab) {
    var toXml = function (v, name, ind) {
            var xml = "";
            if (v instanceof Array) {
                for (var i = 0, n = v.length; i < n; i++)
                    xml += ind + toXml(v[i], name, ind + "\t") + "\n";
            } else if (typeof (v) == "object") {
                var hasChild = false;
                xml += ind + "<" + name;
                for (var m in v) {
                    if (m.charAt(0) == "@")
                        xml += " " + m.substr(1) + "=\"" + v[m].toString() + "\"";
                    else
                        hasChild = true;
                }
                xml += hasChild ? ">" : "/>";
                if (hasChild) {
                    for (var m in v) {
                        if (m == "#text")
                            xml += v[m];
                        else if (m == "#cdata")
                            xml += "<![CDATA[" + v[m] + "]]>";
                        else if (m.charAt(0) != "@")
                            xml += toXml(v[m], m, ind + "\t");
                    }
                    xml += (xml.charAt(xml.length - 1) == "\n" ? ind : "") + "</" + name + ">";
                }
            } else {
                xml += ind + "<" + name + ">" + v.toString() + "</" + name + ">";
            }
            return xml;
        },
        xml = "";
    for (var m in o)
        xml += toXml(o[m], m, "");
    return tab ? xml.replace(/\t/g, tab) : xml.replace(/\t|\n/g, "");
}



//tmp for Html onClick
// let insertArticle = (node) => document.getElementById("article").innerHTML = node;

// //Insert element after
// function insertAfter(newNode, referenceNode) {
//     console.log(referenceNode.parentNode)
//     referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
// }

// insertAfter(article1, document.getElementById('navbar'))
// console.log(document.getElementById('navbar'))
// console.log(object)



// var link = document.createElement('a');
// link.setAttribute('href', 'mypage.htm');
// var parent = document.getElementById('div');
// parent.insertAfter(link, parent.lastChild);

// let nav = {
//     div: {
//         '-class': 'container',
//         nav: {
//             '-class': 'navbar navbar-expand-lg navbar-dark ',
//             a: {
//                 '-class': 'navbar-brand',
//                 '-href': '#',
//                 img: {
//                     '-src': './img/VIZZY_logo.png',
//                     '-width': '150',
//                     '-height': '30',
//                     '-class': 'd-inline-block align-top'
//                 }
//             },
//             button: {
//                 '-class': 'navbar-toggler btn-light',
//                 '-type': 'button',
//                 '-data-toggle': 'collapse',
//                 '-data-target': '#navbarSupportedContent',
//                 '-aria-controls': 'navbarSupportedContent',
//                 '-aria-expanded': 'false',
//                 '-aria-label': 'Toggle navigation',
//                 span: {
//                     '-class': 'navbar-toggler-icon'
//                 }
//             },
//             div: {
//                 '-class': 'collapse navbar-collapse',
//                 '-id': 'navbarSupportedContent',
//                 ul: {
//                     '-class': 'navbar-nav mr-auto',
//                     li: [{
//                             '-class': 'nav-item active',
//                             a: {
//                                 '-class': 'nav-link text-white ',
//                                 '-href': '/index.html',
//                                 '#text': 'HOME ',
//                                 span: {
//                                     '-class': 'sr-only',
//                                     '#text': '(current)'
//                                 }
//                             }
//                         },
//                         {
//                             '-class': 'nav-item',
//                             a: {
//                                 '-class': 'nav-link text-white',
//                                 '-href': '/products.html',
//                                 '#text': 'PRODUCTS'
//                             }
//                         },
//                         {
//                             '-class': 'nav-item',
//                             a: {
//                                 '-class': 'nav-link text-white',
//                                 '-href': '#templtes',
//                                 '#text': 'TEMPLATES'
//                             }
//                         },
//                         {
//                             '-class': 'nav-item',
//                             a: {
//                                 '-class': 'nav-link text-white',
//                                 '-href': '#pricing',
//                                 '#text': 'PRICING'
//                             }
//                         }
//                     ]
//                 },
//                 form: {
//                     '-class': 'form-inline my-2 my-lg-0',
//                     button: [{
//                             '-class': 'btn my-2 my-sm-0 text-white',
//                             '-type': 'submit',
//                             '#text': 'SIGN IN'
//                         },
//                         {
//                             '-class': 'btn btn-light my-2 my-sm-0',
//                             '-type': 'submit',
//                             '#text': 'SIGN UP'
//                         }
//                     ]
//                 }
//             }
//         }
//     }
// };



// var json = `{

//     "div": {
//         "class": "background"
//     }

// }`;
// obj = JSON.parse(json);
// console.log(obj)

// var json = `{
// "result": true,
// "count": 1
// }
// `,
//     obj = JSON.parse(json);
// console.log(obj)

// let background =
//     `{
//     "div": {
//         "-class": "background",
//         "-style": "background: url('./img/front_page1.png'); background-size: 100%; height: 100vh;"
//     }
// }`

// let myJSON = JSON.parse(background);
// console.log(myJSON);
// document.getElementById('start').innerHTML += myJSON;