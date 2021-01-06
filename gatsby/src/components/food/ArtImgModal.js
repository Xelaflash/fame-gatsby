import React from 'react';
import { Modal } from 'react-bootstrap';

export default function ArtImgModal({ activeItem, show, onHide }) {
  return (
    <>
      <Modal centered show={show} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>{activeItem.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{activeItem.artDescription}</Modal.Body>
      </Modal>
    </>
  );
}
