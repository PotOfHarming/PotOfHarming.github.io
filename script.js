function copy(element) {
    navigator.clipboard.writeText(element.children[0].children[1].innerHTML);
}