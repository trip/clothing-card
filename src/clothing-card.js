import { LitElement, html, css } from 'lit';

const tshirt = new URL('../assets/tshirt.jpg', import.meta.url).href;

export class ClothingCard extends LitElement {
  static get properties() {
    return {
      clothing: {
        type: String,
        reflect: true
      },

      information: {
        type: String
      }
    }
  }

  static get styles() {
    return css`
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

    .blue-bg {
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
    `;
  }

  constructor() {
    super();
    this.clothing = "T-Shirt";
    this.information = "These t-shirts have just arrived";
  }

  render() {
    return html`
      <div class="cards">
        <section class="card" id="arrivals">
          <div class="card-info">
            <h2 id="arrival-heading">${this.clothing}</h2>
            <img src="${tshirt}">
            <details class="details">
              <summary>Details</summary>
                <div>
                  <p id="p1">${this.information}</p>
                </div>
            </details>
          </div>
        </section>
      </div>
    `;
  }
}

customElements.define('clothing-card', ClothingCard);