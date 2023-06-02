import user from '../data/user.json';
import { Profile } from './profile/Profile.jsx';
import data from '../data/data.json'
import { Statistics } from './statistics/Statistics.jsx';
import friends from '../data/friends.json';
import { FriendList } from './friend-list/FriendList.jsx';
import transactions from '../data/transactions.json';
import { TransactionHistory } from './transaction-history/TransactionHistory.jsx';

export const App = () => {
  return (
    <>
      <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
      />
      <Statistics title={"Upload Statistics"} stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </>
  );
};


