import PropTypes from "prop-types";
import css from './friendList.module.css';
import { FriendListItem } from "../ftirnd-list-item/FriendListItem";

export const FriendList = ({friends}) => {
    return (<ul className={css['friend-list']}>
                {friends.map(({ id, avatar, name, isOnline }) => {
                    return (
                            <FriendListItem
                                key={id}
                                avatar={avatar}
                                name={name}
                                isOnline={isOnline}
                            />
                    )
                })}  
            </ul>)
}

FriendList.propTypes = {
    friends: PropTypes.array,
}

