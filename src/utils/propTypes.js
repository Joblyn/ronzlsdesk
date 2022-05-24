import PropTypes from 'prop-types';

const propTypes = {
  ...PropTypes,
  ID: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  component: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  date: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]),
};

export default propTypes;