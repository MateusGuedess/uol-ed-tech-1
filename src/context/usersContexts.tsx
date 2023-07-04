import apiClient from "@/api";
import { Collaborator } from "@/types/Collaborator";
import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useState,
} from "react";
import { useQuery } from "react-query";

interface IUsersContext {
  users: Collaborator[];
  setUsers: Dispatch<SetStateAction<Collaborator[]>>;
  refetch: () => void;
}

export const UsersContext = createContext({} as IUsersContext);

async function getUsers(setUsers: Dispatch<SetStateAction<Collaborator[]>>) {
  const res = await apiClient(
    "https://qr-challenge.herokuapp.com/api/v1/users"
  );
  const colaborators = await res.data;
  const users: Collaborator[] = colaborators.users;
  setUsers(users);
  return colaborators;
}

function UsersProvider({ children }: PropsWithChildren) {
  const [users, setUsers] = useState<Collaborator[]>([]);
  const { data, isLoading, isFetching, error, refetch } = useQuery({
    queryKey: ["hydrate-users"],
    queryFn: () => getUsers(setUsers),
  });

  return (
    <UsersContext.Provider value={{ users, setUsers, refetch }}>
      {children}
    </UsersContext.Provider>
  );
}

export default UsersProvider;
