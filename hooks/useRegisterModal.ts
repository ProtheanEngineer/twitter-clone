import { create } from 'zustand';

interface RegisterModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}
// Se abre y se cierra el modal de registro
const useRegisterModal = create<RegisterModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false })
}));


export default useRegisterModal;