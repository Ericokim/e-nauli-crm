import React, { useState, useContext, createContext } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "../Modal/Modal";
import Button from "../Button/Button";

const AlertDismissible = ({
  title,
  message,
  showModal,
  onDismiss,
  onConfirm,
}) => {
  return (
    <Modal size="sm" active={showModal} toggler={onDismiss}>
      <ModalHeader toggler={onDismiss}>
        <span style={{ color: "red" }}>{title}</span>
      </ModalHeader>
      <ModalBody>
        <p>{message}</p>
      </ModalBody>
      <ModalFooter>
        <Button onClick={onDismiss} color="red" buttonType="link" ripple="dark">
          Cancel
        </Button>
        <Button
          onClick={onConfirm}
          color="green"
          ripple="light"
          form="form"
          type="submit"
        >
          Confirm
        </Button>
      </ModalFooter>
    </Modal>
  );
};

const ConfirmationDialogContext = createContext({});

const ConfirmationDialogProvider = ({ children }) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogConfig, setDialogConfig] = useState({});

  const openDialog = ({ title, message, actionCallback }) => {
    setDialogOpen(true);
    setDialogConfig({ title, message, actionCallback });
  };

  const resetDialog = () => {
    setDialogOpen(false);
    setDialogConfig({});
  };

  const onConfirm = () => {
    resetDialog();
    dialogConfig.actionCallback(true);
  };

  const onDismiss = () => {
    resetDialog();
    dialogConfig.actionCallback(false);
  };

  return (
    <ConfirmationDialogContext.Provider value={{ openDialog }}>
      <AlertDismissible
        showModal={dialogOpen}
        title={dialogConfig.title}
        message={dialogConfig.message}
        onConfirm={onConfirm}
        onDismiss={onDismiss}
      />
      {children}
    </ConfirmationDialogContext.Provider>
  );
};

const useConfirmationDialog = () => {
  const { openDialog } = useContext(ConfirmationDialogContext);

  const getConfirmation = ({ ...options }) =>
    new Promise((res) => {
      openDialog({ actionCallback: res, ...options });
    });

  return { getConfirmation };
};

export default AlertDismissible;
export { ConfirmationDialogProvider, useConfirmationDialog };
