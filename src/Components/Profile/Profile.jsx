import PropTypes from 'prop-types';
import { ProfileContainer, Description, Avatar, Username, Stats, Quantity } from './Proflie.styled';


export const Profile = ({username, tag, avatar, location, stats}) => {
    return (
        <ProfileContainer>
  <Description>
    <Avatar
      src={avatar}
      alt="User avatar"
      
    />
                <Username>{username}</Username>
                <p className="tag">{tag}</p>
                <p className="location">{location}</p>
  </Description>

  <Stats>
    <li>
      <span className="label">Followers</span>
                    <Quantity>{stats.followers}</Quantity>
    </li>
    <li>
      <span className="label">Views</span>
                    <Quantity>{stats.views}</Quantity>
    </li>
    <li>
                    <span className="label">Likes</span>
      <Quantity>{stats.likes}</Quantity>
    </li>
  </Stats>
</ProfileContainer>
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