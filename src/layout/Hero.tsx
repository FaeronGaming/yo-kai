import React from 'react';
import 'bulma/css/bulma.css';
import { Container } from './Container';
import { Link } from 'react-router-dom';

interface HeroProps {
  title?: string;
  href?: string;
}

const Wrapper: React.FC<HeroProps> = ({ children, href }) => 
  href ? <Link to={href}>{children}</Link> : <>{children}</>;

export const Hero: React.FC<HeroProps> = ({ children, title, href }) => {
  return (
    <section className="hero">
      <div className="hero-body">
        <Container>
          {title && (
            <Wrapper href={href}>
              <h1 className="title">{title}</h1>
            </Wrapper>
          )}
        </Container>
      </div>
    </section>
  )
};
