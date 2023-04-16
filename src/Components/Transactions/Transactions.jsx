import PropTypes from 'prop-types';
import { Table, Amount} from './Transactions.styled';

export const Transactions = ({ items }) => {
    return (
        <Table>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>
            <tbody>{items.map(item => (
                <tr key={item.id}>
                    <td>{item.type}</td>
                    <Amount>{item.amount}</Amount>
                    <td>{item.currency}</td>
                </tr>
            ))}
            </tbody>
        </Table>
    )
};

Transactions.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape(
            {
                id: PropTypes.string.isRequired,
                type: PropTypes.string.isRequired,
                amount: PropTypes.string.isRequired,
              currency: PropTypes.string.isRequired,
            }
        )
    )
}