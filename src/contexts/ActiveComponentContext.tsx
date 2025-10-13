import { createContext, ReactNode, useContext, useState } from "react";

export interface ActiveComponent {
  title: string;
  componentUrl?: string;
  implementationUrl?: string;
}

interface ActiveComponentContextType {
  activeComponent: ActiveComponent | null;
  setActiveComponent: (component: ActiveComponent | null) => void;
}

const ActiveComponentContext = createContext<
  ActiveComponentContextType | undefined
>(undefined);

export function ActiveComponentProvider({ children }: { children: ReactNode }) {
  const [activeComponent, setActiveComponent] =
    useState<ActiveComponent | null>(null);

  return (
    <ActiveComponentContext.Provider
      value={{ activeComponent, setActiveComponent }}
    >
      {children}
    </ActiveComponentContext.Provider>
  );
}

export function useActiveComponent() {
  const context = useContext(ActiveComponentContext);
  if (context === undefined) {
    throw new Error(
      "useActiveComponent must be used within an ActiveComponentProvider"
    );
  }
  return context;
}
