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
                    <li id="home"><a href='index.html'><span>Home</span></a></li>
                    <li id="prof"><a href='profile.html'><span>Profile</span></a></li>
                    <li id="prod"><a href='#'><span>Products</span></a></li>
                    <li id="sitm"><a href='#'><span>Sitemap</span></a></li>
                    <li id="evnt" class='last'><a href='#'><span>Events</span></a></li>
                    <li id="cntc" style="float:right"><a href='contact.html'><span>Contact</span></a></li>
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