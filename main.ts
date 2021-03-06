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




if (innerWidth > 1100)
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

const contact = `
<div id="contact">
    <h3> contact </h3>
    <div>
        <a href="mailto:abdullah30july@gmail.com" target="_blank">
                <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512"
                    style="enable-background:new 0 0 512 512;" xml:space="preserve">
                    <g>
                        <g>
                            <path d="M256,60c-57.897,0-105,47.103-105,105c0,35.943,18.126,69.015,48.487,88.467c31.003,19.863,69.06,21.974,104.426,5.703
    c7.525-3.462,10.82-12.37,7.357-19.896c-3.462-7.525-12.369-10.82-19.896-7.358c-25.86,11.898-53.454,10.545-75.703-3.709
    C193.961,214.298,181,190.669,181,165c0-41.355,33.645-75,75-75s75,33.645,75,75c0,8.271-6.729,15-15,15
    c-7.558,0-14.618-5.732-14.998-14.772C301.001,165.152,301,165.076,301,165c0-24.813-20.187-45-45-45s-45,20.187-45,45
    s20.187,45,45,45c11.516,0,22.031-4.353,29.999-11.494C293.966,205.648,304.483,210,316,210c24.813,0,45-20.187,45-45
    C361,107.103,313.897,60,256,60z M270.789,167.406C269.631,174.535,263.45,180,256,180c-8.271,0-15-6.729-15-15s6.729-15,15-15
    c7.691,0,14.04,5.82,14.895,13.285C270.671,164.648,270.634,166.035,270.789,167.406z" />
                        </g>
                    </g>
                    <g>
                        <g>
                            <path d="M480.999,196.976c-0.004-3.879-1.566-7.756-4.393-10.583L421,130.787V15c0-8.284-6.716-15-15-15H106
    c-8.284,0-15,6.716-15,15v115.787l-55.606,55.606c-0.052,0.052-0.096,0.11-0.147,0.163c-2.811,2.896-4.24,6.709-4.246,10.42
    c0,0.01-0.001,0.019-0.001,0.029V467c0,24.845,20.216,45,45,45h360c24.839,0,45-20.207,45-45V197.005
    C481,196.995,480.999,196.986,480.999,196.976z M421,173.213L444.787,197L421,220.787V173.213z M121,137.005
    c0-0.003,0-0.007,0-0.01V30h270v106.995c0,0.003,0,0.007,0,0.01v113.782L309.787,332H202.213L121,250.787V137.005z M91,173.213
    v47.574L67.213,197L91,173.213z M61,460.787V233.213L174.787,347L61,460.787z M82.214,482l119.999-120h107.574l119.999,120H82.214
    z M451,460.787L337.213,347L451,233.213V460.787z" />
                        </g>
                    </g>
                </svg>
                <p>
                    abdullah30july@gmail.com</p>
                </a>
        <a href="tel:9000000789">
                <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 513.64 513.64"
                    style="enable-background:new 0 0 513.64 513.64;" xml:space="preserve">
                    <g>
                        <g>
                            <path d="M499.66,376.96l-71.68-71.68c-25.6-25.6-69.12-15.359-79.36,17.92c-7.68,23.041-33.28,35.841-56.32,30.72
    c-51.2-12.8-120.32-79.36-133.12-133.12c-7.68-23.041,7.68-48.641,30.72-56.32c33.28-10.24,43.52-53.76,17.92-79.36l-71.68-71.68
    c-20.48-17.92-51.2-17.92-69.12,0l-48.64,48.64c-48.64,51.2,5.12,186.88,125.44,307.2c120.32,120.32,256,176.641,307.2,125.44
    l48.64-48.64C517.581,425.6,517.581,394.88,499.66,376.96z" />
                        </g>
                    </g>
                </svg>
                <p>9000000789</p>
            </a>
    </div>
</div>
`


const about = `
<div id="about">
    <h3> About </h3>
    <p> For our products, we get wood from US and furniture is hand made in china </p>
</div>
`

nav?.addEventListener("click", (e: MouseEvent) => {

    const target: HTMLAnchorElement = e.target as HTMLAnchorElement;
    if (target.tagName.toLowerCase() === 'a') {
        document.querySelector("a.active")?.classList.remove("active");
        target.classList.add("active");
        const targetText = target.innerText.toLowerCase();

        if (targetText === "about") {
            footer.style.display = "block"
            footer.innerHTML = about
        }
        else if (targetText === "contact") {

            footer.style.display = "block"
            footer.innerHTML = contact
        }
        else {
            footer.style.display = "none"
            footer.innerHTML = ''
        }

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
