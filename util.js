
export function makeVisible(element) {
    element.classList.add("flex-visible");
    element.classList.remove("invisible");
}

export function makeInvisible(element) {
    element.classList.remove("flex-visible");
    element.classList.add("invisible");
}

export function makeColor(element) {
    element.classList.remove("blur");
    element.classList.add("colorful");
}

export function makeBlur(element) {
    element.classList.remove("colorful");
    element.classList.add("blur");
}