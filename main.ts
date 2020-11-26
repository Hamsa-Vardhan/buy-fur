const nav = <HTMLElement>document.querySelector("nav");
const picture = <HTMLDivElement>document.querySelector("div.picture");
const svg = <HTMLDivElement>document.querySelector("div.svg");
const header = <HTMLElement>document.querySelector("header")
const footer = <HTMLElement>document.querySelector("footer");


const generateRandomSpan: VoidFunction = () => {

    const span = document.createElement("span");
    const spanSide = Math.random() * 50 + 100;
    const yPosition = Math.random() * window.innerHeight - 150;
    const xPosition = Math.random() * window.innerWidth - 300;


    span.style.height = `${spanSide}px`
    span.style.width = `${spanSide}px`
    span.style.backgroundColor = " #5ac3e6bb";
    span.style.filter = `blur(${spanSide / 1.5}px)`
    span.style.position = "absolute";
    span.style.top = yPosition.toString() + "px";
    span.style.right = xPosition.toString() + "px";
    span.style.zIndex = "10";

    document.body.appendChild(span);


}

for (let i = 0; i < 3; i++) generateRandomSpan()


const eqsvg = `
<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
x="0px" y="0px" viewBox="0 0 959.5 959.5" style="enable-background:new 0 0 959.5 959.5;"
xml:space="preserve">
<g>
    <path d="M110,795.65h739.5c60.801,0,110-49.201,110-110c0-60.801-49.199-110-110-110H110c-60.8,0-110,49.199-110,110
C0,746.449,49.2,795.65,110,795.65z" />
    <path d="M110,383.849h739.5c60.801,0,110-49.2,110-110c0-60.8-49.199-110-110-110H110c-60.8,0-110,49.2-110,110
C0,334.649,49.2,383.849,110,383.849z" />
</g>
</svg>
`
svg.innerHTML = eqsvg;

const arrowSvg = `
<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	viewBox="0 0 268.832 268.832" style="enable-background:new 0 0 268.832 268.832;"
	 xml:space="preserve">
<g>
	<path d="M265.171,125.577l-80-80c-4.881-4.881-12.797-4.881-17.678,0c-4.882,4.882-4.882,12.796,0,17.678l58.661,58.661H12.5
		c-6.903,0-12.5,5.597-12.5,12.5c0,6.902,5.597,12.5,12.5,12.5h213.654l-58.659,58.661c-4.882,4.882-4.882,12.796,0,17.678
		c2.44,2.439,5.64,3.661,8.839,3.661s6.398-1.222,8.839-3.661l79.998-80C270.053,138.373,270.053,130.459,265.171,125.577z"/>
</g>
</svg>
`


nav?.addEventListener("click", (e: MouseEvent) => {

    const target: HTMLAnchorElement = e.target as HTMLAnchorElement;
    if (target.tagName.toLowerCase() === 'a') {
        document.querySelector("a.active")?.classList.remove("active");
        target.classList.add("active");

        if (["about", "contact"].includes(target.innerText.toLowerCase())) footer.style.display = "flex"
        else footer.style.display =
            "none"

        if (innerWidth > 550)
            if (["about", "contact"].includes(target.innerText.toLowerCase()))
                header.style.backgroundColor = "white"
            else
                header.style.backgroundColor = "transparent";
        if (innerWidth < 550)
            manageNav()
    }
})

let imageCounter = 0;
const imageUrls = [
    "./images/freepik-bg.jpg",
    "./images/side-bg.jpg",
    "./images/crop-image.webp"
];



const getImage = (url: string): HTMLImageElement => {

    const image = document.createElement("img");
    image.src = url;
    return image;
}



const setImage: VoidFunction = () => {

    imageCounter++;
    if (imageUrls.length === imageCounter) imageCounter = 0;
    const image = getImage(imageUrls[imageCounter]);
    const prevImage = picture.children[0] as HTMLImageElement;
    if (prevImage) prevImage.style.animation = "remove-image 1s ease";
    setTimeout(() => {
        picture.innerHTML = "";
        picture.appendChild(image)
    }, 1000);

}

setImage()
setInterval(setImage, 3000)

let isNavShown = false;


svg.addEventListener("click", manageNav)

function manageNav() {


    if (!isNavShown) {
        svg.style.animation = "rotate-right-svg 1s ease"
        setTimeout(() => { svg.innerHTML = arrowSvg }, 1200)
    }
    else {
        svg.style.animation = "rotate-left-svg 2s ease"
        setTimeout(() => { svg.innerHTML = eqsvg }, 1000)
    }

    if (innerWidth > 550) {
        if (isNavShown) {
            nav.style.animation = "move-menu-side-right 2s ease"
            setTimeout(() => { nav.style.display = "none" }, 2000)
        }
        else {
            nav.style.display = "flex"
            nav.style.animation = "move-menu-side-left 2s ease"
        }
        isNavShown = !isNavShown
    }
    else {
        if (isNavShown) {
            nav.style.animation = "move-menu-side-top 2s ease"
            setTimeout(() => { nav.style.display = "none" }, 2000)
        }
        else {
            nav.style.display = "flex"
            nav.style.animation = "move-menu-side-down 2s ease"
        }
        isNavShown = !isNavShown
    }
}
