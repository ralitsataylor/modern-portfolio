class FooterElement extends HTMLElement {
  constructor() {
    super(); // Initialize the base class
    // Create a shadow DOM for encapsulation
    this.attachShadow({ mode: 'open' });

    // Define the footer's HTML and styles
    this.shadowRoot.innerHTML = `
      <style>
        footer {
          font-size: 1.5rem;
          font-weight: bold;
          height: 3.75rem; /* 60px */
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 1rem;
          background: rgba(26, 26, 26, .5);
          box-shadow: .1875rem .1875rem .75rem rgba(248, 99, 189, .25); /* 3px 3px 12px */
          a {
            font-weight: bold;
            text-decoration: none;
            background-clip: text;
            color: rgba(0, 0, 0, 0);
            background-image: linear-gradient(to right, var(--pink), var(--purple));
          }
          span {
            font-weight: bold;
          }
        }
      </style>
      <footer id="footer">
        <p class="lead fw-bold m-0 gradient-text"><a href="http://ralitsataylor.github.io/modern-portfolio/" target="_blank" rel="noopener">&#60;Ralitsa Taylor&#47;&#62;</a> <span class="fw-bold">&copy; 2025</span></p>
      </footer>
    `;
  }
}

// Register the custom element
customElements.define('my-footer', FooterElement);