import {useAppDispatch, useAppSelector} from "../hooks/reduxHooks";
import {useEffect} from "react";
import {getUser} from "../api/userApi";

const Profile = () => {
  const {userInfo, loading, email} = useAppSelector(state => state.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, []);

  if (loading) return <h2>Loading...</h2>

  return (
    <section className="mt-5 flex flex-col gap-4">
      {userInfo && (
        <>
          <h2 className="font-semibold text-white text-xl text-center">Hello, {email || userInfo!.email}</h2>
          <p className="text-white text-lg">Your role is: {userInfo.roles[0].name}</p>
          <p className="text-white text-lg">{userInfo.roles[0].description}</p>
        </>
      )}
    </section>
  );
};

export default Profile;