import { create } from 'zustand';

interface EditModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}
// Se abre o se cierra el modal de edición de campos de usuario
const useEditModal = create<EditModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false })
}));


export default useEditModal;