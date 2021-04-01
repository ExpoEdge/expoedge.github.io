class mainLogo extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <p>
                <br>
                <span class="logo-primary">ExpoEdge </span>
                <span class="logo-secondary">International</span>
            </p>
        `;
    }
}

class mainNavbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div id='nav-menu'>
                <ul>
                    <li id="home"><a href='index.html'><span>HOME</span></a></li>
                    <li id="prof"><a href='profile.html'><span>PROFILE</span></a></li>
                    <li id="prod" class="drop-tab">
                        <a href='#'><span>PRODUCTS</span></a>
                        <div class="drop-content" style="width: 200%">
                            <a href="#" class="drop-option">Air / Dust Filters</a>
                            <a href="#" class="drop-option">Rubber Products</a>
                            <a href="#" class="drop-option">Blades / Cutters / Knives</a>
                            <a href="#" class="drop-option">Automation & Process Control</a>
                            <a href="#" class="drop-option">Tapes</a>
                            <a href="#" class="drop-option">Testing & Measuring Devices</a>
                        </div>
                    </li>
                    <li id="indt" class="drop-tab">
                        <a href='#'><span>INDUSTRIES</span></a>
                        <div class="drop-content" style="width: 200%">
                            <a href="#" class="drop-option">Flexo / Roto Printing</a>
                            <a href="#" class="drop-option">Injection / Blow / Roto Molding</a>
                            <a href="#" class="drop-option">PVC / HDPE Pipe Extrusion</a>
                            <a href="#" class="drop-option">Flexible Packaging</a>
                            <a href="#" class="drop-option">Paper Converting</a>
                            <a href="industry_blown_film_extrusion.html" class="drop-option">Blown Film Extrusion</a>
                            <a href="#" class="drop-option">Bag / Pouch Making</a>
                            <a href="#" class="drop-option">Plastic Recycling</a>
                        </div>
                    </li>
                    <li id="evnt" class='last'><a href='#'><span>EVENTS</span></a></li>
                    <li id="cntc" style="float:right"><a href='contact.html'><span>CONTACT</span></a></li>
                </ul>
            </div>
        `;
    }
}

class mainFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML =   `
            <div class="main-footer">
                <hr>
                <br>
                <span>Copyright © ExpoEdge International FZE, 2014 - All Rights Reserved.</span>
            </div>
        `;
    }
}

customElements.define('main-logo', mainLogo);
customElements.define('main-navbar', mainNavbar);
customElements.define('main-footer', mainFooter);

function setActiveTab(tabId) {
    $('#'+tabId).addClass('active');
}

// CAUSES REFLOW, ELEMENT MOVEMENT VISIBLE - DON'T USE
// this.innerHTML = await (await fetch("html/header.html")).text();

const Http = new XMLHttpRequest();
const url = 'https://ee-apis.herokuapp.com/inc';
Http.open("POST", url, true);
Http.send();