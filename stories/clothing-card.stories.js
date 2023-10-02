import { html } from 'lit';
import '../src/clothing-card.js';

export default {
  title: 'ClothingCard',
  component: 'clothing-card',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ header, backgroundColor }) {
  return html`
    <clothing-card
      style="--clothing-card-background-color: ${backgroundColor || 'white'}"
      .header=${header}
    >
    </clothing-card>
  `;
}

export const App = Template.bind({});
App.args = {
  header: 'My app',
};
