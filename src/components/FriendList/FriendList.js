import PropTypes from 'prop-types';
import s from './FriendList.module.css';

const FriendList = ({ friends }) => (
  <ul className={s.friend_list}>
    {friends.map(friend => (
      <li className={s.item} key={friend.id}>
        <span className={friend.isOnline ? s.statusOnline : s.statusOffline}></span>
        <img className={s.avatar} src={friend.avatar} alt="User avatar" width="48" />
        <p className={s.name}>{friend.name}</p>
      </li>
    ))}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }),
  ),
};

export default FriendList;
