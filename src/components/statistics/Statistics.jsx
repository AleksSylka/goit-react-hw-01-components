import PropTypes from "prop-types";
import css from './statistics.module.css';
import { getBgColor } from "helper-js/changeColor";

export const Statistics = ({ title, stats }) => {
    return (
        <section className={css["statistics"]}>

            {title && <h2 className={css["title"]}>{title}</h2>}
            <ul className={css["stat-list"]}>
                {stats.map(({ id, label, percentage }) => {
                    return (<li className={css["item"]} key={id} style={{backgroundColor: getBgColor(id) }}>
                    <span className={css["label"]}>{label}</span>
                    <span className={css["percentage"]}>{percentage}%</span>
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