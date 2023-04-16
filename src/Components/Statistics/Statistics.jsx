import PropTypes from 'prop-types';
import { StatisticsSection, StatList, Percentage, Title } from './Statistics.styled';

export const Statistics = ({stats, title}) => {
    return (
    <StatisticsSection>
            {title && <Title>{title}</Title>}

  <StatList>
                {stats.map(item => (<li key={item.id} className="item">
                    <span className="label">{item.label}</span>
                    <Percentage>{item.percentage}%</Percentage>
    </li>))}
                
  </StatList>
</StatisticsSection>
)
}

Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(
    PropTypes.shape({id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,}))
};