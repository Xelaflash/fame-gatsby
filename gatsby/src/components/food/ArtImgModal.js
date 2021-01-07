import React from 'react';
// import Img from 'gatsby-image';
import '../../styles/ArtImgModalStyles.scss';

const Modal = (props) => {
  const { displayModal } = props;
  function closeModal(e) {
    e.stopPropagation();
    props.closeModal();
  }

  const divStyle = {
    display: displayModal ? 'block' : 'none',
  };

  return (
    <div
      className="modal"
      onClick={closeModal}
      style={divStyle}
      onKeyPress={closeModal}
      role="button"
      tabIndex="0"
    >
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        aria-hidden="true"
      >
        <span
          className="close"
          onClick={closeModal}
          onKeyPress={closeModal}
          role="button"
          tabIndex="0"
        >
          &times;
        </span>
      </div>
    </div>
  );
};

export default Modal;
