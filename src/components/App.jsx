import Profile from './Profile.jsx';
import json from '../json/user.json';

import Statistics from './Statistics.jsx';
import data from '../json/data.json';

import FriendList from './FriendList.jsx';
import friends from '../json/friends.json';

import TransactionHistory from './TransactionHistory.jsx';
import transactions from '../json/transactions.json';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <>
        <Profile
          username={json.username}
          tag={json.tag}
          location={json.location}
          avatar={json.avatar}
          stats={json.stats}
        />
        <Statistics title="Upload stats" stats={data} />
        <FriendList friends={friends} />
        <TransactionHistory items={transactions} />
      </>
      {/* React homework template */}
    </div>
  );
};
