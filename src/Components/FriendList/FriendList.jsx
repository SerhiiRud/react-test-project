import PropTypes from 'prop-types';
import { FriendListContainer, FriendItem, OnlineStatus } from './FriendList.styled';

export const FriendList = ({friends}) => {
    return(
    <FriendListContainer>
            {friends.map(friend =>
            (<FriendItem key={friend.id}>
                <OnlineStatus isOnline={friend.isOnline}>{friend.isOnline}</OnlineStatus>
                <img className="avatar" src={friend.avatar} alt="User avatar" width="48" />
                <p className="name">{friend.name}</p>
            </FriendItem>))
            }
    </FriendListContainer>)
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            isOnline: PropTypes.bool.isRequired,
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
        })
    )
    
}