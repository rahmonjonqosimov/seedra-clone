import React from "react";
import { useGetUsersAllQuery } from "../../context/api/userApi";
import "./index.scss";

interface UserSchema {
  id: string;
  image: string;
  firstName: string;
  company: {
    title: string;
  };
}

const Team: React.FC = () => {
  const params = { limit: 4 };
  const { data } = useGetUsersAllQuery(params);
  console.log(data);

  const userItem: JSX.Element[] | undefined = data?.users?.map(
    (user: UserSchema) => (
      <div key={user.id} className="user">
        <img src={user.image} alt="image" />
        <h4>{user.firstName}</h4>
        <p>{user.company.title}</p>
      </div>
    )
  );
  return (
    <>
      <section>
        <div className="container users">
          <h2>Meet our team</h2>
          <div className="users__list">{userItem}</div>
        </div>
      </section>
    </>
  );
};

export default Team;
