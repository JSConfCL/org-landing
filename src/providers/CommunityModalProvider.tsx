'use client';

import React, { createContext, useContext, useState } from 'react';
import { CommunityJoinModal } from '@/components/CommunityJoinModal';

const CommunityModalContext = createContext<{ openModal: () => void }>({
  openModal: () => {},
});

export const useCommunityModal = () => useContext(CommunityModalContext);

export const CommunityModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <CommunityModalContext.Provider value={{ openModal: () => setIsOpen(true) }}>
      {children}
      <CommunityJoinModal open={isOpen} onClose={() => setIsOpen(false)} />
    </CommunityModalContext.Provider>
  );
};
