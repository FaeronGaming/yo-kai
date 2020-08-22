import React from 'react';
import { Section } from '../layout/Section';
import { Container } from '../layout/Container';

function Members() {
  return (
    <Container>
      <h3 className="title">Members</h3>
    </Container>
  )
}

export function Configure() {
  return (
    <Section>
      <h2 className="title">Configure</h2>
      <Container>
        <Members />
      </Container>
    </Section>
  );
}
