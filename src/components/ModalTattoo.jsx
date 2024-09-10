import PropTypes from 'prop-types';
import '../styles/ModalTattoo.css';

const ModalTattoo = ({ image, alt, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modalTattoo-content" onClick={(e) => e.stopPropagation()} >
        <img src={image} alt={alt} className="modalTattoo-image" />
      </div>
    </div>
  );
};

ModalTattoo.propTypes = {
    image: PropTypes.string.isRequired,
    alt: PropTypes.string,
    onClose: PropTypes.func.isRequired,
  };
  
  ModalTattoo.defaultProps = {
    alt: 'Tattoo image',
  };

export default ModalTattoo;
