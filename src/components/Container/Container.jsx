// @flow

import React, { useEffect, useContext, useState } from 'react';
import Modal from 'react-modal';
import { FaGithub } from 'react-icons/fa';
import Header from 'components/Header/Header';
import Board from 'components/Board/Board';
import ModalInfo from 'components/ModalInfo/ModalInfo';
import ModalError from 'components/ModalError/ModalError';
import { Context, type, ContextType } from 'Provider';
import Helmet from 'react-helmet';
import './Container.scss';
import MainContainer from './MainContainer';

Modal.setAppElement('#root');

const ContainerContent = () => {
  const context = useContext(Context);
  const { isPathExist, clear, isHelped, setIsHelped }: ContextType = context;
  const [isErrorOpen, setIsErrorOpen] = useState(false);

  useEffect(() => {
    if (!isPathExist) {
      clear();
      setIsErrorOpen(true);
    }
  }, [isPathExist, clear]);

  const onErrorClose = () => {
    setIsErrorOpen(false);
  };
  const onHelpClose = () => {
    setIsHelped(false);
  };

  return (
    <>
      
      
      <ModalError isErrorOpen={isErrorOpen} onErrorClose={onErrorClose} />
      <ModalInfo isHelped={isHelped} onHelpClose={onHelpClose} />
      
      <Board />      
    </>
  );
};

export default ContainerContent;
