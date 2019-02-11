"use strict"
// let test = makeNodeFromJson(testJson);
// insertNodeInHtml("start", test)

window.onload = () => {
    insertNodeInHtml("start", bodyNode)
    insertNodeInHtml("navbar", navbarNode);
    insertNodeInHtml("article", articleNode1);
    appendChildInHtml("article", modalNode);
};

let bodyNode = makeNodeFromJson(bodyJson);
let navbarNode = makeNodeFromJson(navbarJson);
let articleNode1 = makeNodeFromJson(articleJson1);
let modalNode = makeNodeFromJson(modalJson);
let articleNode2 = makeNodeFromJson(articleJson2);

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
                    let child = document.createElement(key);
                    jsonToHtml(element, child);
                    parent.appendChild(child);
                    // console.log("PARENT ARRAY= ", parent);
                });
                break;

            default:
                let child = document.createElement(key);
                if (typeof value == "object") {
                    jsonToHtml(value, child);
                }
                parent.appendChild(child);
                // console.log("PARENT DEFAULT= ", parent);
        }
    }
    // console.log("PARENT RETURN= ", parent)
    return parent;
}

/*
async function makeNodeFromJson(path) {
    let jsonfile = await fetchJson(path);
    let jsonPars = JSON.parse(jsonfile);
    let startNode = document.createElement('div')
    let node = nodeToString(jsonToHtml(jsonPars, startNode));
    return node;
}


async function fetchJson(path) {
    let jsonResponse = {};
    await fetch(path)
        .then(response => response.json())
        .then(data => jsonResponse = data);
    console.log('jsonResponse', jsonResponse);
    return jsonResponse;
}

function readJSON(path) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', path, true);
    xhr.responseType = 'blob';
    xhr.onload = function (e) {
        if (this.status == 200) {
            let file = new File([this.response], 'temp');
            let fileReader = new FileReader();
            fileReader.addEventListener('load', function () {
                //do stuff with fileReader.result
                return fileReader.result
            });
            fileReader.readAsText(file);
        }
    }
    xhr.send();
}


function loadJSON(path, callback) {
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', path, true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            callback(xobj.responseText);
        }
    };
    xobj.send(null);
}

function init() {
    loadJSON(function (response) {
        console.log('b', response);
        var actual_JSON = JSON.parse(response);
    });
}

*/