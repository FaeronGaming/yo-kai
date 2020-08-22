import React from 'react';
import 'bulma/css/bulma.css';
import classnames from 'classnames';
import { Link } from 'react-router-dom';

interface ComponentProps {
  className?: string
}

interface TileProps {
  as?: string | Function;
  title?: string;
  isAncestor?: boolean;
  isParent?: boolean;
  isChild?: boolean;
  className?: string;
  to?: string;
}

export const Tile: React.FC<TileProps> = ({ as, children, isAncestor, isChild, isParent, title, className, ...props }) => {
  const Component = (as || "div") as unknown as React.FC<ComponentProps>;
  const classes = classnames('tile', className, {
    'is-ancestor': isAncestor,
    'is-parent': isParent,
    'is-child': isChild
  });
  return (
    <Component className={classes} {...props}>
      {title && <p className="title">{title}</p>}
      {children}
    </Component>
  );
};
