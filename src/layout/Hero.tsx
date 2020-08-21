import React from 'react';
import 'bulma/css/bulma.css';
import { Container } from './Container';

interface HeroProps {
  title?: string
}

export const Hero: React.FC<HeroProps> = ({ children, title }) => (
  <section className="hero">
    <div className="hero-body">
      <Container>
        {title && <h1 className="title">{title}</h1>}
      </Container>
    </div>
  </section>
)
