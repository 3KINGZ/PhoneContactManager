import { useState } from "react";

export const useModal = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal: any = () => setShowModal(true);
  const closeModal: any = () => setShowModal(false);

  return [showModal, openModal, closeModal];
};
