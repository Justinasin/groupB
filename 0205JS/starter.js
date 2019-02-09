let insertNode = (id, node) => document.getElementById(id).innerHTML = node;

insertNode("start", body);
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