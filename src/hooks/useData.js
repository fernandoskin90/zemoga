import { useState, useEffect } from 'react';
import { characters as data } from '../constants';

export const useData = () => {
  const [characters, setCharacters] = useState(() => {
    if (!localStorage.getItem('characters')) {
      return data;
    } else {
      return JSON.parse(localStorage.getItem('characters'));
    }
  });
  const [active, setActive] = useState('');
  const [showMessage, setShowMessage] = useState(false);
  const [characterActive, setCharacterActive] = useState(null);

  const handleActive = (thumbActive, id) => {
    setActive(thumbActive);
    setCharacterActive(id);
  };

  const setLocalStorage = (
    typeVote,
    currentCharacter,
    indexCharacterToUpdate
  ) => {
    currentCharacter.againstVotes =
      typeVote === 'up'
        ? currentCharacter.againstVotes - 1
        : currentCharacter.againstVotes + 1;
    currentCharacter.forVotes =
      typeVote === 'down'
        ? currentCharacter.forVotes - 1
        : currentCharacter.forVotes + 1;
    localStorage.setItem('characters', JSON.stringify(characters));
    setCharacters(prevCharacters => {
      const modifiedCharacters = [...prevCharacters];
      modifiedCharacters[indexCharacterToUpdate] = currentCharacter;
      modifiedCharacters[indexCharacterToUpdate].wasVoted = true;
      return modifiedCharacters;
    });
    setActive('');
    setShowMessage(true);
    setCharacterActive(null);
  };

  const handleVotes = idCharacter => {
    const indexCharacterToUpdate = characters.findIndex(
      ({ id }) => id === idCharacter
    );
    const currentCharacter = characters.find(({ id }) => id === idCharacter);
    setLocalStorage(active, currentCharacter, indexCharacterToUpdate);
  };

  useEffect(() => {
    if (!localStorage.getItem('characters')) {
      localStorage.setItem('characters', JSON.stringify(data));
    }
  }, []);

  useEffect(() => {
    if (!showMessage) {
    }
  }, [showMessage]);

  return {
    handleActive,
    handleVotes,
    active,
    characters,
    showMessage,
    characterActive,
    setShowMessage,
  };
};
