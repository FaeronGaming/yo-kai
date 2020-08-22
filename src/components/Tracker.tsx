import React from 'react';
import styled from 'styled-components';
import { Section } from '../layout/Section';
import { Container } from '../layout/Container';
import { minionLocations, minionJobs } from '../data/yokai';
import { useData } from '../state/userDataContext';

interface ToggleableRowProps {
  isDisabled: boolean;
}

const transparancy = 0.45;

const Table = styled.table`
  background-color:rgba(255,255,255,${transparancy});
  font-weight: 700;
`;

const ToggleableRow = styled.tr<ToggleableRowProps>`
  ${({ isDisabled }) => isDisabled ? `background-color:rgba(169,169,169,${transparancy});` : ''}
  text-decoration: ${({ isDisabled }) => isDisabled ? 'line-through': 'none' };
`;

export const Tracker: React.FC = () => {
  const [data, setData] = useData();
  const users = Object.keys(data);
  return (
    <Section>
      <h2 className="title">Tracker</h2>
      <Container>
        <Table className="table">
          <thead>
            <tr>
              <td>Class</td>
              <td>Minion</td>
              {users.map(user => <td key={user}>{user}</td>)}
              <td>Areas</td>
            </tr>
          </thead>
          <tbody>
            {Object.entries(minionLocations).map(([minion, locations]) => {
              const isDisabled = users.every(user => data[user][minion]);
              return (
                <ToggleableRow key={minion} isDisabled={isDisabled}>
                  <td>{minionJobs[minion]}</td>
                  <td>{minion}</td>
                  {users.map(user => {
                    const handler = (e: { target: { checked: boolean; }; }) => {
                      const newData = {
                        ...data,
                        [user]: {
                          ...data[user],
                          [minion]: e.target.checked
                        }
                      };
                      setData(newData);
                    };
                    return (
                      <td key={user}>
                        <label className="checkbox">
                          <input
                            type="checkbox"
                            checked={data[user][minion] || false}
                            onChange={handler}
                          />
                        </label>
                      </td>
                    );
                  })}
                  <td>
                    <ul>
                      {locations.map(location => (
                        <li key={location}>{location}</li>
                      ))}
                    </ul>
                  </td>
                </ToggleableRow>
              );
            })}
          </tbody>
        </Table>
      </Container>
    </Section>
  );
}
