import React from 'react';
import Img from 'gatsby-image';
import '../../styles/ArtImgModalStyles.scss';

const Modal = (props) => {
  const { displayModal } = props;
  const { activeItem } = props;
  function closeModal(e) {
    e.stopPropagation();
    props.closeModal();
  }

  const divStyle = {
    display: displayModal ? 'block' : 'none',
  };

  if (activeItem !== '') {
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

          <h3>{activeItem.name}</h3>

          <p className=""> by {activeItem.artist.name}</p>
          <Img
            fluid={activeItem.artist.image.asset.fluid}
            alt={`${activeItem.artist.name} - F.A.M.E Artist`}
            className="avatar"
          />
          <Img
            fluid={activeItem.image.asset.fluid}
            alt={`${activeItem.name} - F.A.M.E Art`}
            className="art_img"
          />
          <p>{activeItem.artDescription}</p>
        </div>
      </div>
    );
  }
  return <></>;
};

export default Modal;
