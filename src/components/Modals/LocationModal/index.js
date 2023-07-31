// LocationModal.js
import * as React from 'react';
import { Modal } from '@mui/material';

const LocationModal = ({
  isOpen,
  onRequestClose,
  locations,
  selectedLocationIndex,
  handleLocationChange,
}) => {
  return (
    <Modal open={isOpen} onClose={onRequestClose}>
      <h2>Selecione a Localização:</h2>
      <select
        value={selectedLocationIndex}
        onChange={handleLocationChange}
      >
        {locations.map((location, index) => (
          <option key={index} value={index}>
            {location}
          </option>
        ))}
      </select>
      <button onClick={onRequestClose}>Fechar</button>
    </Modal>
  );
};

export default LocationModal;
