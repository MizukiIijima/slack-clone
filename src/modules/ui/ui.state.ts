import { atom, useAtom } from "jotai";

const showCreateworkspaceModalAtom = atom<boolean>(false);
const showCreateChannelModalAtom = atom<boolean>(false);

export const useUiStore = () => {
  const [showCreateWorkspaceModal, setShowCreateWorkspaceModal] = useAtom(
    showCreateworkspaceModalAtom,
  );
  const [showCreateChannelModal, setShowCreateChannelModal] = useAtom(
    showCreateChannelModalAtom,
  );

  return {
    showCreateWorkspaceModal,
    setShowCreateWorkspaceModal,
    showCreateChannelModal,
    setShowCreateChannelModal,
  };
};
