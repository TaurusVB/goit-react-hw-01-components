import PropTypes from 'prop-types';
import FriendItem from './FriendItem';

import css from './FriendsList.module.css';

export default function FriendsList({ friends }) {
  return (
    <ul className={css.friendList}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendItem
          avatar={avatar}
          name={name}
          isOnline={isOnline}
          key={id}
        ></FriendItem>
      ))}
    </ul>
  );
}

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
      id: PropTypes.number,
    })
  ),
};
