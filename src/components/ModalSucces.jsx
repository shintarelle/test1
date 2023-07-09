import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import UserSuccesReg from './UserSuccesReg'

export default function ModalSucces({ isOpen, onClose }) {

  return (
    <>

      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <UserSuccesReg />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}
