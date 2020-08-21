import React from 'react';
import { Location } from '../data/locations';
import { minionLocations } from '../data/yokai';

interface DisplayLocalMinionProps {
  locale: Location | string
}

export const DisplayLocaleMinions: React.FC<DisplayLocalMinionProps> = ({ locale }) => {
  if (!locale) return null;

  const minions = Object.entries(minionLocations).filter(([, locations]) => {
    return locations.some(location => location === locale);
  }).map(([minion]) => minion)

  return (
    <div className="content">
      <ul>
        {minions.map(minion => (
          <li key={minion}>{minion}</li>
        ))}
      </ul>
    </div>
  );
}
