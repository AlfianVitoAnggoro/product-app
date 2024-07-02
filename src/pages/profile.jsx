import { uselogin } from '../hooks/useLogin';

const ProfilePages = () => {
  const username = uselogin();
  return (
    <div>
      <h1>{username}</h1>
      <h1>Profile</h1>
    </div>
  );
};

export default ProfilePages;
