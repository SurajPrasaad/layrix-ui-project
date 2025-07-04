import { useState } from 'react';
import { Button } from '@/components/button';
import { Modal } from '@/components/modal';

export const ModalPreview = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h3 className="text-lg font-semibold text-white mb-4">Modal Title</h3>
        <p className="text-gray-300 mb-4">Modal content goes here.</p>
        <div className="flex justify-end space-x-2">
          <Button variant="outline" onClick={() => setIsOpen(false)}>Cancel</Button>
          <Button onClick={() => setIsOpen(false)}>Save</Button>
        </div>
      </Modal>
    </>
  );
};
