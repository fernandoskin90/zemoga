import { useState } from 'react';

export function useCharacter() {
    const [isVotingFor, setIsVotingFor] = useState(null);

    function selectUp() {
        setIsVotingFor(true);
    }

    function selectDown() {
        setIsVotingFor(false);
    }

    function clearLastVote() {
        setIsVotingFor(null);
    }

    return {
        clearLastVote,
        isVotingFor,
        selectDown,
        selectUp
    }
}
