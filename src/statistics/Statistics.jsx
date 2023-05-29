import PropTypes from "prop-types";
import css from './statistics.module.css';
import { getBgColor } from "helper-js/changeColor";

export const Statistics = ({ title, stats }) => {
    return (
        <section class={css["statistics"]}>

            {title && <h2 class={css["title"]}>{title}</h2>}
            <ul class={css["stat-list"]}>
                {stats.map(({ id, label, percentage }) => {
                    return (<li class={css["item"]} key={id} style={{backgroundColor: getBgColor(id) }}>
                    <span class={css["label"]}>{label}</span>
                    <span class={css["percentage"]}>{percentage}%</span>
                </li>)
            })}
            
                
                
            </ul>
        </section>
    )
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.array,
}