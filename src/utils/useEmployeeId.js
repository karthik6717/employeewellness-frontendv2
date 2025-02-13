import { useUser } from "../contexts/UserContext";

const useEmployeeId = () => {
  const { userInfo } = useUser();
  return userInfo?.employeeId;
};

export default useEmployeeId;