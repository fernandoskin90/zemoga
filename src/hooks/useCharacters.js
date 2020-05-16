import { useState } from 'react';

import { characters as data } from '../constants'

function initCharactersList() {
    if (!localStorage.getItem('characters')) {
        localStorage.setItem('characters', JSON.stringify(data));
        return data;
    }
    return JSON.parse(localStorage.getItem('characters'));
}

export function useCharacters() {
    const [characters, setCharacters] = useState(initCharactersList)

    function vote(index) {
        return (voteFor = true) => {
            const currentCharacters = [ ...characters ];
            if (voteFor) {
                currentCharacters[index].forVotes = currentCharacters[index].forVotes + 1;
            } else {
                currentCharacters[index].againstVotes = currentCharacters[index].againstVotes + 1;
            }

            currentCharacters[index].wasVoted = true;
            setCharacters(currentCharacters);
            localStorage.setItem('characters', JSON.stringify(currentCharacters));
        };
    }

    function voteAgain(index) {
        return () => {
            const currentCharacters = [ ...characters ];
            currentCharacters[index].wasVoted = false;
            setCharacters(currentCharacters);
            localStorage.setItem('characters', JSON.stringify(currentCharacters));
        };
    }

    return {
        characters,
        vote,
        voteAgain
    }
}