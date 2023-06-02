import PropTypes from "prop-types";
import css from './friendListItem.module.css';
import { getBgColorStatus } from "helper-js/changeColor";

export const FriendListItem = (({ avatar, name, isOnline }) => {
    return (
            <li className={css['item']}>
                <span className={css["status"]} style={{backgroundColor: getBgColorStatus(isOnline) }}></span>
                <img className={css["avatar"]} src={avatar} alt="User avatar" width="48" />
                <p className={css["name"]}>{name}</p>
            </li>)
})

FriendListItem.propTypes = {
    id: PropTypes.number,
    isOnline: PropTypes.bool,
    avatar: PropTypes.string,
    name: PropTypes.string,
}