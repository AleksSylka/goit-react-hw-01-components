import PropTypes from "prop-types";
import css from './friendList.module.css';
import { getBgColorStatus } from "helper-js/changeColor";

export const FriendList = ({friends}) => {
    return (<ul class={css['friend-list']}>
                {friends.map(({ id, avatar, name, isOnline }) => {
                    return (
                    <li class={css['item']} key={id}>
                        <span class={css["status"]} style={{backgroundColor: getBgColorStatus(isOnline) }}></span>
                        <img class={css["avatar"]} src={avatar} alt="User avatar" width="48" />
                        <p class={css["name"]}>{name}</p>
                    </li>)
                })}  
            </ul>)
}

FriendList.propTypes = {
    friends: PropTypes.array,
}