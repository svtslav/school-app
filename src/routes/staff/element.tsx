import { useParams } from "react-router-dom";

const Staff = () => {
  const { username } = useParams<{ username: string }>();

  return <>Staff {username}</>
}

export default Staff;
