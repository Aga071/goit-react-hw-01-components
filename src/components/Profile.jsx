import PropTypes from 'prop-types';
import css from '../css/Profile.module.css';
// import json from './json/user.json';

export default function Profile({
  username,
  tag,
  location,
  avatar = 'https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder',
  stats,
}) {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img src={avatar} alt="User avatar" className={css.avatar} />
        <p className={css.name}>
          <b>{username}</b>
        </p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.stats}>
        <li className={css.list}>
          <span className={css.label}>Followers</span>
          <span className={css.quantity}> {stats.followers}</span>
        </li>
        <li className={css.list}>
          <span className={css.label}>Views</span>
          <span className={css.quantity}> {stats.views}</span>
        </li>
        <li className={css.list}>
          <span className={css.label}>Likes</span>
          <span className={css.quantity}> {stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  stats: PropTypes.object,
};
