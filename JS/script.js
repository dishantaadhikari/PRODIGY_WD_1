// Custom HTML Nav bar for all pages using "connectedCallback()""
class specialHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top">
                <div class="container">
                    <a class="navbar-brand navbar-custom" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="30" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"></path>
                      </svg></span>
                    </button>
                    <div class="collapse navbar-collapse gap-2" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        </ul>
                        <li class="navbar-nav mb-2 mb-lg-0">
                            <a class="nav-link" href="./index.html">Home</a>
                        </li>
                        <li class="navbar-nav mb-2 mb-lg-0">
                            <a class="nav-link" href="./about.html">About</a>
                        </li>
                        <li class="navbar-nav mb-2 mb-lg-0">
                            <a class="nav-link" href="./contact.html">Contact</a>
                        </li>
                        <li class="navbar-nav mb-2 mb-lg-0">
                            <a class="nav-link" href="./FAQ.html">FAQ</a>
                        </li>
                    </div>
                </div>
            </nav>
        `
    }
}

// Custom HTML footer for all pages
class specialFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer class="py-3 my-4">
                <ul class="nav justify-content-center border-bottom pb-3 mb-3">
                </ul>
                <a class="d-flex justify-content-center text-decoration-none text-center text-body-secondary" href="#">Back to top</a>
            </footer>
        `
    }
}

// defines the custom html elements
customElements.define('special-header', specialHeader)
customElements.define('special-footer', specialFooter)


// add the navbar scrolled class 
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');

    if (navbar) {
        if (window.scrollY > 50) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    }

});
