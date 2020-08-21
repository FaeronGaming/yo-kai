import React from 'react';
import 'bulma/css/bulma.css';

export type SelectionEvent = { target: { value: string } };

interface SelectProps {
  onChange: (e: SelectionEvent) => void,
  value: string
}

export const Select: React.FC<SelectProps> = (props) => (
  <div className="select">
    <select {...props} />
  </div>
);
