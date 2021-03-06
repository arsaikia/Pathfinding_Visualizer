// @flow

import React from 'react';
import Modal from 'react-modal';
import './ModalInfo.scss';
import SimpleModal from './HelpModal';

type ModalInfoPropTypes = {
  isHelped: boolean,
  onHelpClose: any => void,
};

const ModalInfo = ({ isHelped, onHelpClose }: ModalInfoPropTypes) => {
  return (
    <Modal
      className="modal-info"
      isOpen={isHelped}
      contentLabel="Example Modal"
      onRequestClose={onHelpClose}
      style={{ marginTop: '10px' }}
    >
      <h1 className="modal-info__title">How to use?</h1>
      {/* <p className="modal-info__color">
        <div className="modal-info__row">
          <p className="modal-info__content">
            <span className="modal-info__square--initial" />
            <p>intiial</p>
          </p>
          <p className="modal-info__content">
            <span className="modal-info__square--visited" />
            <p>visited</p>
          </p>
        </div>
        <div className="modal-info__row">
          <p className="modal-info__content">
            <span className="modal-info__square--clicked" />
            <p>clicked</p>
          </p>
          <p className="modal-info__content">
            <span className="modal-info__square--fixed" />
            <p>Start</p>
          </p>
        </div>
        <div className="modal-info__row">
          <p className="modal-info__content">
            <span className="modal-info__square--shortest" />
            <p>shortest</p>
          </p>
        </div>
      </p> */}
      <p className="modal-info__usage">
        <div className="modal-info__row">
          <h2>1. You can make a wall by clicking and dragging from a block</h2>
        </div>
        <div className="modal-info__row">
          <h2>
            2. You can move the source and destination by clicking and dragging
          </h2>
          {/* <span className="modal-info__square--fixed" />
          <h2>by dragging</h2> */}
        </div>
        <div className="modal-info__row">
          <h2>
            3. You can choose an algorithm and speed from drop down from Navbar
          </h2>
        </div>
      </p>
      <button onClick={onHelpClose} className="modal-info__close" type="button">
        X
      </button>
    </Modal>
  );
};

export default ModalInfo;
