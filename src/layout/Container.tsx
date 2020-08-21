import React from 'react';
import 'bulma/css/bulma.css';

export const Container: React.FC = ({ children }) => (
  <div className="container">{children}</div>
);
