import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useState,
} from "react";

interface IHistoryContext {
  id?: string;
  action: string;
  comment?: string;
}

interface History {
  history: IHistoryContext[];
  setHistory: Dispatch<SetStateAction<IHistoryContext[]>>;
}

export const HistoryContext = createContext({} as History);

function HistoryProvider({ children }: PropsWithChildren) {
  const [history, setHistory] = useState<IHistoryContext[]>([]);

  return (
    <HistoryContext.Provider value={{ history, setHistory }}>
      {children}
    </HistoryContext.Provider>
  );
}

export default HistoryProvider;
