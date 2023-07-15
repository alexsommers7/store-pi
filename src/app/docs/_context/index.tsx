'use client';

import { useState, createContext, useMemo, useContext } from 'react';

interface DocsContextType {
  activeAnchor: string;
  setActiveAnchor: (anchor: string) => void;
}

interface DocsProviderProps {
  children: JSX.Element | JSX.Element[] | string;
}

const defaultState: DocsContextType = {
  activeAnchor: '',
  setActiveAnchor: () => null,
};

export const DocsContext = createContext<DocsContextType>(defaultState);

export const DocsProvider = ({ children }: DocsProviderProps) => {
  const [activeAnchor, setActiveAnchor] = useState('');

  const value = useMemo(() => {
    return {
      activeAnchor,
      setActiveAnchor,
    };
  }, [activeAnchor]);

  return <DocsContext.Provider value={value}>{children}</DocsContext.Provider>;
};

export const useDocsProvider = () => useContext(DocsContext);
