import PropTypes from "prop-types";
import css from './transaction.module.css';
import { getUpperCase } from "helper-js/changeColor";

export const TransactionHistory = ({ transactions }) => {
    return (
        <table class={css["transaction-history"]}>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>
            <tbody>
                {
                    transactions.map(({ id, type, amount, currency }) => {
                        return (
                            <tr key={id}>
                                <td>{getUpperCase(type)}</td>
                                <td>{amount}</td>
                                <td>{currency}</td>
                            </tr>
                        )
                    })
                }
            </tbody>

        </table>
    )
}

TransactionHistory.propTypes = {
    transactions: PropTypes.array,
}