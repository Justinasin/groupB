let bodyJsonPars = JSON.parse(bodyJson);
let navbarJsonPars = JSON.parse(navbarJson);
let article1JsonPars = JSON.parse(article1Json);
let article2JsonPars = JSON.parse(article2Json);

let body = nodeToString(jsonToHtml(bodyJsonPars, document.createElement('div')));
let navbar = nodeToString(jsonToHtml(navbarJsonPars, document.createElement('div')));
let article1 = nodeToString(jsonToHtml(article1JsonPars, document.createElement('div')));
let article2 = nodeToString(jsonToHtml(article2JsonPars, document.createElement('div')));

insertNode("start", body)
insertNode("navbar", navbar);
insertNode("article", article1);

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


function nodeToString(node) {
    let tmpNode = document.createElement("div");
    tmpNode.appendChild(node.cloneNode(true));
    let str = tmpNode.innerHTML;
    tmpNode = node = null; // prevent memory leaks in IE
    return str;
}

function insertNode(id, node) {
    document.getElementById(id).innerHTML = node
};


function jsonToHtml(json, parent) {
    let keys = Object.keys(json);
    // console.log('keys= ', keys);

    for (let key of keys) {
        let value = json[key];

        //Atribute names in Json have '-' at the beginning   
        if (key.charAt(0) == '-') {
            parent.setAttribute(key.substr(1), value);

            //Text content has '#text' key
        } else if (key == "#text") {
            parent.textContent = value;

            //Array keys are numbers 
        } else if (parseInt(key) > -1) {
            let child = document.createElement(parent.tagName);
            if (typeof value != "string") {
                jsonToHtml(value, child);
            }
            parent.appendChild(child);
            // console.log("parent= ", parent);

        } else {
            let child = document.createElement(key);
            if (typeof value != "string") {
                jsonToHtml(value, child);
            }
            parent.appendChild(child);
            // console.log("parent= ", parent);
        }
    }
    return parent;
}