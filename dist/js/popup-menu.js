class PopupMenuElement extends HTMLElement {
  constructor() {
    super(); // Initialize the base class
    // Create a shadow DOM for encapsulation
    this.attachShadow({ mode: 'open' });

    // Define the popup menu's HTML and styles
    this.shadowRoot.innerHTML = `
      <style>
        /* Floating Action Button */
        .popup-menu {
          width: var(--popup-menu-size);
          height: var(--popup-menu-size); 
          position: fixed;
          border-radius: var(--border-radius);
          bottom: 2.5%;
          right: 5.5%;
          @media (min-width: 768px) {
            bottom: 3%;
            right: 4%;
          }
          @media (min-width: 1200px) {
            bottom: 4%;
            right: 2%;
          }
          @media (min-width: 1920px) {
            bottom: 3%;
            right: -2%;
          }  
          .fab {
            width: var(--popup-menu-size);
            height: var(--popup-menu-size);
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            background: var(--purple);
            z-index: 3;
            border-radius: var(--border-radius);
            box-shadow: 0 .125rem .25rem rgba(0, 0, 0, .4); /* 0 2px 4px */
            animation: fab-animation-reverse .4s ease-out forwards;
            &::before,
            &::after {
              content: "";
              display: block;
              position: absolute;
              border-radius: .25rem; /* 4px */
              background: var(--text-color);
            }
            &::before {
              width: .25rem; /* 4px */
              height: 1.125rem; /* 18px */
            }
            &::after {
              width: 1.125rem; /* 18px */
              height: .25rem; /* 4px */
            }
          }
          /* floating actions container */
          .fac {
            width: 2.125rem; /* 34px */
            height: 9.375rem; /* 50px */
            border-radius: 4rem; /* 64px */
            position: absolute;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            background: var(--text-color);
            z-index: 2;
            padding: .425rem; /* 6.8px */
            box-shadow: 0 .125rem .25rem rgba(0, 0, 0, .4); /* 0 2px 4px */
            opacity: 0;
            top: -6.875rem; /* -110px */
            left: .0625rem; /* 1px */
            transition: opacity .2s ease-in, top .2s ease-in, width .1s ease-in;
            a {
              color: var(--purple);
              opacity: .8;
              .menu-icons {
                fill: var(--purple);
                &:hover {
                  fill: url(#linearGradient);
                }
              }
              &:hover {
                transition: .2s;
                opacity: 1;
                color: color.adjust(#344955, $blackness: 2%);
              }
            }
          }
          label {
            display: none;
          }
          input {
            width: 100%;
            height: 100%;
            position: absolute;
            border-radius: var(--border-radius);
            cursor: pointer;
            z-index: 5;
            opacity: 0;
            &:checked {
              ~ .fab {
                animation: fab-animation .4s ease-out forwards;
              }
              ~ .fac {
                width: 2.125rem; /* 34px */
                height: 9.375rem; /* 150px */
                animation: fac-animation .4s ease-out forwards .1s;
                top: -10.5rem; /* -168px */
                left: .0625rem; /* 1px */
                opacity: 1;
              }
            }
          }
        }
        @keyframes fab-animation {
          0% {
            transform: rotate(0) scale(1);
          }
          20% {
            transform: rotate(60deg) scale(.93);
          }
          55% {
            transform: rotate(35deg) scale(.97);
          }
          80% {
            transform: rotate(48deg) scale(.94);
          }
          100% {
            transform: rotate(45deg) scale(.95);
          }
        }
        @keyframes fab-animation-reverse {
          0% {
            transform: rotate(45deg) scale(.95);
          }
          20% {
            transform: rotate(-15deg);
          }
          55% {
            transform: rotate(10deg);
          }
          80% {
            transform: rotate(-3deg);
          }
          100% {
            transform: rotate(0) scale(1);
          }
        }
        @keyframes fac-animation {
          0% {
            transform: scale(1, 1);
          }
          33% {
            transform: scale(.95, 1.05);
          }
          66% {
            transform: scale(1.05, .95);
          }
          100% {
            transform: scale(1, 1);
          }
        }
      </style>
      <div class="popup-menu">
        <label for="popup-menu"></label>
        <input type="checkbox" name="popup-menu" />
        <div class="fab"></div>
        <div class="fac">
          <a href="index.html" aria-label="Home page link">
            <svg class="menu-icons" width="26" height="26" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
            <title>Home page link</title>
              <defs>
                <linearGradient id="linearGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style="stop-color:#f864bd;stop-opacity:1;" />
                  <stop offset="85%" style="stop-color:#7b7beb;stop-opacity:1;" />
                </linearGradient>
              </defs>
              <path class="icon-path" d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293z"/><path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293z"/>
            </svg>
          </a>
          <a href="about.html" aria-label="About me page link">
            <svg class="menu-icons" width="26" height="26" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
              <title>About me page link</title>
              <defs>
                <linearGradient id="linearGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style="stop-color:#f864bd;stop-opacity:1;" />
                  <stop offset="85%" style="stop-color:#7b7beb;stop-opacity:1;" />
                </linearGradient>
              </defs>
              <path class="icon-path" d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
              <path class="icon-path" fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
            </svg>
          </a>
          <a href="projects.html" aria-label="My projects page link">
            <svg class="menu-icons" width="30" height="30" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <title>My projects page link</title>
              <defs>
                <linearGradient id="linearGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style="stop-color:#f864bd;stop-opacity:1;" />
                  <stop offset="85%" style="stop-color:#7b7beb;stop-opacity:1;" />
                </linearGradient>
              </defs>
              <path class="icon-path" fill-rule="evenodd" clip-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10m-11.56 2.36L7.68 11.6l2.76-2.76L9.6 8 6 11.6l3.6 3.6zm3.12 0 2.76-2.76-2.76-2.76.84-.84 3.6 3.6-3.6 3.6z"></path>
            </svg>
          </a>
          <a href="contact.html" aria-label="Contact me page link">
            <svg class="menu-icons" width="26" height="26" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
              <title>Contact me page link</title>
              <defs>
                <linearGradient id="linearGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style="stop-color:#f864bd;stop-opacity:1;" />
                  <stop offset="85%" style="stop-color:#7b7beb;stop-opacity:1;" />
                </linearGradient>
              </defs>
              <path class="icon-path" d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8m0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42m56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12z"/>
            </svg>
          </a>
        </div>
      </div>
    `;
  }
}

// Register the custom element
customElements.define('popup-menu', PopupMenuElement);