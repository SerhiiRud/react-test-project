import PropTypes from 'prop-types';



export const Profile = ({username, tag, avatar, location, stats}) => {
    return (
        <div className="profile">
  <div className="description">
    <img
      src={avatar}
      alt="User avatar"
      className="avatar"
    />
                <p className="name">{username}</p>
                <p className="tag">{tag}</p>
                <p className="location">{location}</p>
  </div>

  <ul className="stats">
    <li>
      <span className="label">Followers</span>
                    <span className="quantity">{stats.followers}</span>
    </li>
    <li>
      <span className="label">Views</span>
                    <span className="quantity">{stats.views}</span>
    </li>
    <li>
                    <span className="label">{stats.likes}</span>
      <span className="quantity">3000</span>
    </li>
  </ul>
</div>
    )
};
 
Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    })
};