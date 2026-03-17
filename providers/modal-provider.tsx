"use client";

import { useSyncExternalStore } from "react";
import { RenameModal } from "@/components/modals/rename-modal";

export const ModalProvider = () => {
  const isMounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );

  if (!isMounted) return null;

  return (
    <>
      <RenameModal />
    </>
  );
};
