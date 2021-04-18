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
            <div class="nav-container">
            <div class="nav-option">
                <a href="index.html"><div class="nav-option-text" id="home"><span>HOME</span></div></a>
            </div>
            <div class="nav-option dot-before">
                <a href="profile.html"><div class="nav-option-text" id="prof"><span>PROFILE</span></div></a>
            </div>
            <div class="nav-option dot-before">
                <a href="#"><div class="nav-option-text" id="prod"><span>PRODUCTS</span></div></a>
                <div class="nav-subcontainer" style="width: 18%">
                    <a class="nav-suboption" id="prod-1" href="products_air_dust_filters.html"><span>Air / Dust Filters</span></a>
                    <a class="nav-suboption" id="prod-2" href="products_rubber.html"><span>Rubber Products</span></a>
                    <a class="nav-suboption" id="prod-3" href="products_blades.html"><span>Blades / Cutters / Knives</span></a>
                    <a class="nav-suboption" id="prod-4" href="products_automation.html"><span>Automation & Process Control</span></a>
                    <a class="nav-suboption" id="prod-5" href="#"><span>Tapes</span></a>
                    <a class="nav-suboption" id="prod-6" href="#"><span>Testing & Measuring Devices</span></a>
                </div>
            </div>
            <div class="nav-option dot-before">
                <a href="#"><div class="nav-option-text" id="indt"><span>INDUSTRIES</span></div></a>
                <div class="nav-subcontainer" style="width: 18%">
                    <a class="nav-suboption" id="indt-1" href="#"><span>Flexo / Roto Printing</span></a>
                    <a class="nav-suboption" id="indt-2" href="#"><span>Injection / Blow / Roto Molding</span></a>
                    <a class="nav-suboption" id="indt-3" href="#"><span>PVC / HDPE Pipe Extrusion</span></a>
                    <a class="nav-suboption" id="indt-4" href="#"><span>Flexible Packaging</span></a>
                    <a class="nav-suboption" id="indt-5" href="#"><span>Paper Converting</span></a>
                    <a class="nav-suboption" id="indt-6" href="industry_blown_film_extrusion.html"><span>Blown Film Extrusion</span></a>
                    <a class="nav-suboption" id="indt-7" href="#"><span>Bag / Pouch Making</span></a>
                    <a class="nav-suboption" id="indt-8" href="#"><span>Plastic Recycling</span></a>
                </div>
            </div>
            <div class="nav-option dot-before">
                <a href="#"><div class="nav-option-text" id="evnt"><span>EVENTS</span></div></a>
            </div>
            <div class="nav-option" style="margin-left: auto">
                <a href="contact.html"><div class="nav-option-text" id="cntc"><span>CONTACT</span></div></a>
            </div>
<!--            <div class="nav-option" style="margin-right: 0">-->
<!--            </div>-->
<!--            <div class="nav-option" style="margin-right: 0">-->
<!--            </div>-->
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

function setActiveTab(tabId, className) {
    $('#'+tabId).addClass(className);
}

// CAUSES REFLOW, ELEMENT MOVEMENT VISIBLE - DON'T USE
// this.innerHTML = await (await fetch("html/header.html")).text();

const Http = new XMLHttpRequest();
const url = 'https://ee-apis.herokuapp.com/inc';
Http.open("POST", url, true);
Http.send();