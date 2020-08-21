import React, { useState } from 'react';
import { Location } from '../data/locations';
import { minionLocations } from '../data/yokai';
import { DisplayLocaleMinions } from './DisplayLocaleMinions';

type SelectionEvent = { target: { value: string } };

export function LocationLookup() {
  const [selectedLocation, setSelectedLocation] = useState<string>('');

  const selectionChanged = (e: SelectionEvent) => {
    console.log(e.target.value);
    setSelectedLocation(e.target.value);
  };

  return (
    <>
      <select onChange={selectionChanged} value={selectedLocation}>
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
      </select>
      <DisplayLocaleMinions locale={selectedLocation} />
    </>
  );
}
