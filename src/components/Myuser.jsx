import React from "react";
import "../styles/Myuser.css";
//enfant de User
const Myuser = ({ choosedUser }) => {
  //permet d'eviter un bug au demarage de l'appli
  if (!choosedUser) return [];

  return (
    <div className="MyUser">
      <div className="MyUser-title">
        <h1>Votre équipe</h1>
      </div>
      <div className="MyUser-usercont">
        {choosedUser.map((item, index) =>
          index < 6 ? (
            <div key={item.id} className="MyUser-choiceUser">
              <img src={item.avatar} />
              <p>{item.username}</p>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};

export default Myuser;
