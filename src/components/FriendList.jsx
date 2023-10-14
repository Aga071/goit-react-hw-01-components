import PropTypes from 'prop-types';
import clsx from 'clsx';
import css from '../css/FriendList.module.css';

export default function FriendList({ friends }) {
  return (
    <ul className={css['friend-list']}>
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>
  );
}

function FriendListItem({ avatar, name, isOnline }) {
  return (
    <li className={css.item}>
      <span className={clsx(css.status, { [css.isOnline]: isOnline })}>
        &#8226;
      </span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
}

FriendList.propTypes = { friends: PropTypes.array.isRequired };

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
