import { useState, useEffect } from 'react';
import { characters as data } from '../constants';

export const useData = () => {
  const [characters, setCharacter] = useState([]);
  const [active, setActive] = useState('');

  const handleActive = (thumbActive) => {
    setActive(thumbActive);
  };

  // const setLocalStorage = () => {
  //   const indexCharacter = allCharacters.findIndex(
  //     ({ id }) => id === idCharacter
  //   );
  //   let currentCharacter = allCharacters.find(({ id }) => id === idCharacter);
  //   currentCharacter['againstVotes'] = aVotes;
  //   currentCharacter['forVotes'] = fVotes;
  //   allCharacters[indexCharacter] = currentCharacter;
  //   localStorage.setItem('characters', JSON.stringify(allCharacters));
  // };

  const handleVotes = (idCharacter) => {
    if (characters.length) {
      if (active === 'up') {
        const indexCharacter = characters.findIndex(
          ({ id }) => id === idCharacter
        );
        let currentCharacter = characters.find(({ id }) => id === idCharacter);
        currentCharacter.againstVotes = currentCharacter.againstVotes - 1;
        currentCharacter.forVotes = currentCharacter.forVotes + 1;
        characters[indexCharacter] = currentCharacter;
        console.log(currentCharacter);
        setCharacter(characters);
        localStorage.setItem('characters', JSON.stringify(characters));
      }
      if (active === 'down') {
        const indexCharacter = characters.findIndex(
          ({ id }) => id === idCharacter
        );
        let currentCharacter = characters.find(({ id }) => id === idCharacter);
        currentCharacter['againstVotes'] = currentCharacter['againstVotes'] + 1;
        currentCharacter['forVotes'] = currentCharacter['forVotes'] - 1;
        characters[indexCharacter] = currentCharacter;
        setCharacter(characters);
        localStorage.setItem('characters', JSON.stringify(characters));
      }
    }
  };

  useEffect(() => {
    if (!JSON.parse(localStorage.getItem('characters')).length) {
      setCharacter(data);
      localStorage.setItem('characters', JSON.stringify(data));
    } else {
      setCharacter(JSON.parse(localStorage.getItem('characters')));
    }
  }, []);

  return {
    handleActive,
    handleVotes,
    active,
    characters,
  };
};
