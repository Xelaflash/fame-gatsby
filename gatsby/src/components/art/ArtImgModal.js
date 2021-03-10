import React from 'react';
import Img from 'gatsby-image';
import '../../styles/ArtImgModalStyles.scss';
import { Link } from 'gatsby';

const ArtModal = (props) => {
  const { displayModal, activeItem, hasPrevItem, hasNextItem } = props;

  function closeModal(e) {
    e.stopPropagation();
    props.closeModal();
  }

  function prevItem(e) {
    e.stopPropagation();
    props.prevItem();
  }
  function nextItem(e) {
    e.stopPropagation();
    props.nextItem();
  }

  const divStyle = {
    display: displayModal ? 'block' : 'none',
  };

  if (activeItem !== '') {
    return (
      <>
        <div
          id="artModal"
          // className="modal"
          onClick={closeModal}
          style={divStyle}
          onKeyPress={closeModal}
          role="dialog"
          tabIndex="-1"
          aria-labelledby="artModal"
          aria-hidden="true"
        >
          <button
            type="button"
            className="previous"
            onClick={prevItem}
            disabled={!hasPrevItem}
          >
            &#8249;
          </button>
          <button
            type="button"
            className="next"
            onClick={nextItem}
            disabled={!hasNextItem}
          >
            &#8250;
          </button>
          <div
            className="artModal-content"
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
              <Link to={`/community/${activeItem.artist.slug.current}`}>
                <span>{activeItem.artist.name}</span>
                <div className="avatar-small-container">
                  <Img
                    fluid={activeItem.artist.image.asset.fluid}
                    alt={`${activeItem.artist.name} - F.A.M.E Artist`}
                    className="avatar-small"
                  />
                </div>
              </Link>
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
      </>
    );
  }
  return <></>;
};

export default ArtModal;
