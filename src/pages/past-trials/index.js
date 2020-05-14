import React from 'react';

import { CharacterCard } from '../../components/character-card';
import { Loading } from '../../components/loading';

import './styles.scss';

const characters = [
  {
    againstVotes: 36,
    avatar:
      'https://i1.wp.com/canitbeallsosimple.com/wp-content/uploads/2016/02/CIBASS-kanye-west.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab assumenda cum esse in maxime perferendis quo recusandae tempora. Asperiores explicabo facilis molestias',
    forVotes: 64,
    id: 1,
    jobArea: 'Entertainment',
    name: 'Kanye West',
    timeAgo: '1 month ago',
  },
  {
    againstVotes: 64,
    avatar:
      'https://files.rcnradio.com/public/styles/image_834x569/public/2019-01/000_1bq2ho_2_0.jpg?itok=y2-7nv2c',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab assumenda cum esse in maxime perferendis quo recusandae tempora. Asperiores explicabo facilis molestias',
    forVotes: 36,
    id: 2,
    jobArea: 'Business',
    name: 'Mark Zuckerberg',
    timeAgo: '1 month ago',
  },
  {
    againstVotes: 64,
    avatar:
      'https://i.pinimg.com/564x/a0/ac/ab/a0acab2169a6cc4dc42e44f083673521.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab assumenda cum esse in maxime perferendis quo recusandae tempora. Asperiores explicabo facilis molestias',
    forVotes: 36,
    id: 3,
    jobArea: 'Politics',
    name: 'Cristina Fernández de Kirchner',
    timeAgo: '1 month ago',
  },
  {
    againstVotes: 36,
    avatar:
      'https://i.pinimg.com/564x/57/41/94/5741943932057d5e244dd894c201d391.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab assumenda cum esse in maxime perferendis quo recusandae tempora. Asperiores explicabo facilis molestias',
    forVotes: 64,
    id: 4,
    jobArea: 'Entertainment',
    name: 'Malala Yousafzai',
    timeAgo: '1 month ago',
  },
];

export function PastTrials() {
  return (
    <section className="past-trials">
      <div className="past-trials__banner">
        <div className="past-trials__banner-title">
          Speak out. Be heard.
          <span>Be counted</span>
        </div>
        <div className="past-trials__banner-message">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
          dignissimos ea error est facere, harum incidunt labore laborum modi
          natus odit provident quaerat quos ratione, reprehenderit sit tenetur
          vel velit.
        </div>

        <div className="past-trials__banner-close-icon">
          <i className="material-icons">close</i>
        </div>
      </div>
      <div className="past-trials__characters-title">Votes</div>
      <div className="past-trials__characters-list">
        {characters.map(({ id, ...rest }) => (
          <CharacterCard key={id} {...rest} />
        ))}
      </div>
      <Loading />
    </section>
  );
}
