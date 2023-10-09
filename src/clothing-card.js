import { LitElement, html, css } from 'lit';

const tshirt = new URL('../assets/tshirt.jpg', import.meta.url).href;

export class ClothingCard extends LitElement {
  static get properties() {
    return {
      name: {
        type: String,
        reflect: true
      },

      variation: {
        type: Boolean,
        reflect: true
      },

      information: {
        type: String
      }
    }
  }

  static get styles() {
    return css`
    :host {
      display: inline-block;
    }
    
    .cards {
      display: flex;
      max-width: 8000px;
      margin: auto;
      justify-content: center;
    }

    .card {
      max-width: 250px;
      background-color: gray;
      border: 1px solid black;
      margin: 16px;
      padding: 16px;
      display: flex;
      flex-direction: column;
      align-items: center;
      transition: transform 0.3s;
    }

    :host([variation]) .card {
      background-color: #008aff;
    }

    .card img {
      width: 250px;
      height: 250px;
      border-radius: 8px;
    }

    .card-info {
      text-align: center;
      margin-top: 8px;
    }

    .details {
      padding: 10px;
    }

    .card-details-contents ::slotted(img) {
      max-width: 100px;
      display: block;
      margin: 0 auto;
    }
    `;
  }

  constructor() {
    super();
    this.name = "T-Shirt";
    this.variation = false;
    this.information = null;
  }

  render() {
    return html`
      <div class="cards">
        <section class="card">
          <div class="card-info">
            <h2>${this.name}</h2>
            <img src="${tshirt}">
            <details class="details">
              <summary>Details</summary>
                <div class="card-details-contents">
                  <p>${this.information}</p>
                  <slot></slot>
                </div>
            </details>
          </div>
        </section>
      </div>
    `;
  }
}

customElements.define('clothing-card', ClothingCard);