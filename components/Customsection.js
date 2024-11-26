// components/CustomSection.js
import React from 'react';
import { Builder } from '@builder.io/react';

function Customsection({ title, description }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

// Register the component with Builder
Builder.registerComponent(Customsection, {
  name: 'Customsection',
  inputs: [
    { name: 'title', type: 'string' },
    { name: 'description', type: 'text' },
  ],
});

export default Customsection;