import { FC, ReactElement } from 'react';

import { Modal } from '@mui/material';

interface Props {
  children: ReactElement;
  isOpen: boolean;
  handleClose: () => void;
}

const Popup: FC<Props> = ({ children, isOpen, handleClose }) => {
  return (
    <Modal open={isOpen} onClose={handleClose}>
      {children}
    </Modal>
  );
};

export default Popup;
