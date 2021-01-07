import React from 'react';
import Img from 'gatsby-image';
import '../../styles/ArtImgModalStyles.scss';

const Modal = (props) => {
  const { displayModal, activeItem } = props;
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
        id="artModal"
        className="modal"
        onClick={closeModal}
        style={divStyle}
        onKeyPress={closeModal}
        role="dialog"
        tabIndex="-1"
        aria-labelledby="artModal"
        aria-hidden="true"
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
          <h3 className="artwork_title">{activeItem.name}</h3>
          <div className="artist_credit">
            {/* TODO: put link to creator card in community page */}
            <span>{activeItem.artist.name}</span>
            <div className="avatar-small-container">
              <Img
                fluid={activeItem.artist.image.asset.fluid}
                alt={`${activeItem.artist.name} - F.A.M.E Artist`}
                className="avatar-small"
              />
            </div>
          </div>
          <div className="artwork-container">
            <Img
              fluid={activeItem.image.asset.fluid}
              alt={`${activeItem.name} - F.A.M.E Art`}
              className="artwork_img_modal"
              imgStyle={{ objectFit: 'contain' }}
            />
          </div>
          <p className="artwork_description">{activeItem.artDescription}</p>
        </div>
      </div>
    );
  }
  return <></>;
};

export default Modal;
