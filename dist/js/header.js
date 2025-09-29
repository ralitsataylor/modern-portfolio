class HeaderElement extends HTMLElement {
  constructor() {
    super(); // Initialize the base class
    // Create a shadow DOM for encapsulation
    this.attachShadow({ mode: 'open' });

    // Define the header's HTML and styles
    this.shadowRoot.innerHTML = `
      <style>
        header {
          z-index: 2;
          min-height: 5.35rem; /* 85.6px */
        }
        .logo {
          background: url('././img/logo.png') no-repeat;
          position: absolute;
          left: .5rem; /* 8px */
          width: 5rem; /* 80px */
          height: 5.3125rem; /* 85px */
          transform: scale(.7);
        }
      </style>
      <header class="position-fixed w-100">
        <a href="index.html" class="nav-link" aria-label="Home page">
          <div class="logo position-absolute"></div>
        </a>
      </header>
    `;
  }
}

// Register the custom element
customElements.define('my-header', HeaderElement);