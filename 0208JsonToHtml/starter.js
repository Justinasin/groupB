// let test = makeNodeFromJson(testJson);
// insertNodeInHtml("start", test)

let bodyNode = makeNodeFromJson(bodyJson);
let navbarNode = makeNodeFromJson(navbarJson);
let articleNode1 = makeNodeFromJson(articleJson1);
let articleNode2 = makeNodeFromJson(articleJson2);
let modalNode = makeNodeFromJson(modalJson);

insertNodeInHtml("start", bodyNode)
insertNodeInHtml("navbar", navbarNode);
insertNodeInHtml("article", articleNode1);
appendChildInHtml("article", modalNode);



//Router
window.onhashchange = () => {
    let href = window.location.href;
    let query = href.split('#')[1];

    switch (query) {
        case 'home':
            insertNodeInHtml("article", articleNode1);
            appendChildInHtml("article", modalNode);
            break;
        case 'products':
            insertNodeInHtml("article", articleNode2);
            break;
        default:
            insertNodeInHtml("article", articleNode1);
            appendChildInHtml("article", modalNode);
    }
};

function insertNodeInHtml(id, node) {
    document.getElementById(id).innerHTML = node;
};

function appendChildInHtml(id, child) {
    let e = document.createElement('div');
    e.innerHTML = child;
    document.getElementById(id).appendChild(e);
};

function makeNodeFromJson(json) {
    let jsonPars = JSON.parse(json);
    let startNode = document.createElement('div')
    let node = nodeToString(jsonToHtml(jsonPars, startNode));
    return node;
}

function nodeToString(node) {
    let tmpNode = document.createElement("div");
    tmpNode.appendChild(node.cloneNode(true));
    let str = tmpNode.innerHTML;
    tmpNode = node = null; // prevent memory leaks in IE
    return str;
}


function jsonToHtml(json, parent) {
    let keys = Object.keys(json);
    // console.log('keys= ', keys);

    for (let key of keys) {
        let value = json[key];
        // console.log('key= ', key, ' value= ', value);
        switch (true) {
            case (key.charAt(0) == '-'): //Atribute names in Json have '-' at the beginning
                parent.setAttribute(key.substr(1), value);
                break;

            case (key == "#text"): //Text content has '#text' key
                parent.textContent = value;
                break;

            case (value.constructor === Array):
                value.map(element => {
                    let childA = document.createElement(key);
                    jsonToHtml(element, childA);
                    parent.appendChild(childA);
                    // console.log("PARENT ARRAY= ", parent);
                });
                break;

            default:
                let childB = document.createElement(key);
                if (typeof value == "object") {
                    jsonToHtml(value, childB);
                }
                parent.appendChild(childB);
                // console.log("PARENT DEFAULT= ", parent);
        }
    }
    // console.log("PARENT RETURN= ", parent)
    return parent;
}