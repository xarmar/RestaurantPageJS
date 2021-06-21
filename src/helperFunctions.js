// Deletes all childNodes of chose 'parentNode'
export const removeChildNodes = (parentNode) => {
    while(parentNode.firstChild) {
        parentNode.removeChild(parentNode.firstChild);
    }
}

export const appendMultipleNodesToParent = (parentNode, ...childNodes) => {
    childNodes.forEach(child => {
        parentNode.append(child);
    });
}

export const closeExpandedMenu = () => {
    navBar.classList.remove('showMenu');
}