import React, { useState } from 'react';
import { Location } from '../data/locations';
import { DisplayLocaleMinions } from './DisplayLocaleMinions';
import { Section } from '../layout/Section';
import { Container } from '../layout/Container';
import { Select } from '../layout/Select';

type SelectionEvent = { target: { value: string } };

export function LocationLookup() {
  const [selectedLocation, setSelectedLocation] = useState<string>('');

  const selectionChanged = (e: SelectionEvent) => {
    console.log(e.target.value);
    setSelectedLocation(e.target.value);
  };

  return (
    <Section>
      <h2 className="title">Minion Lookup</h2>
      <Container>
        <Select onChange={selectionChanged} value={selectedLocation}>
          <option value="" disabled>--Select a Location--</option>
          {
            Object.entries(Location).map(([locationKey, location]) => {
              return (
                <option key={locationKey} value={location}>
                  {location.toString()}
                </option>
              )
            })
          }
        </Select>
        <DisplayLocaleMinions locale={selectedLocation} />
      </Container>
    </Section>
  );
}
