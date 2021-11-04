import axios from "axios";
import { useState, useEffect } from "react";
import "../styles/User.scss";
import Myuser from "./Myuser";

const User = () => {
  //Recup des données de l'api dans data
  const [data, setData] = useState([]);
  //State pour envoyer mon user choisis dans mon enfant Myuser
  const [choosedUser, setchoosedUser] = useState([]);
  //Permet de definir quand je veux voir <Myuser
  const [visible, setvisible] = useState(false);

  useEffect(() => {
    changeUser();
  }, []);

  const changeUser = () => {
    axios
      .get("https://random-data-api.com/api/users/random_user")
      .then((response) => {
        setData(response.data);
      });
  };

  let choiceUser = () => {
    //affiche le component Myuser
    setvisible(true);
    //change le personnage courant pour ne pas choisir le meme
    changeUser();

    let myUser = {
      username: data.username,
      avatar: data.avatar,
    };
    //permet de créer un tableau d'objet dans mon state
    setchoosedUser([...choosedUser, myUser]);
  };

  if (!data) return [];

  return (

    <div id="tutu" className="User">
      <div className="title">
        <h1>Choix des Personnages</h1>
      </div>

      <div key={data.id} className="choiceUser">

        {/* MODAL  */}
        <div class="container">
          <details>
            <summary>
              <div className="btn btn-light btn-sm mx-2">Détail</div>
              <div class="details-modal-overlay"></div>
            </summary>
            <div class="details-modal">
              <div class="details-modal-close">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13.7071 1.70711C14.0976 1.31658 14.0976 0.683417 13.7071 0.292893C13.3166 -0.0976311 12.6834 -0.0976311 12.2929 0.292893L7 5.58579L1.70711 0.292893C1.31658 -0.0976311 0.683417 -0.0976311 0.292893 0.292893C-0.0976311 0.683417 -0.0976311 1.31658 0.292893 1.70711L5.58579 7L0.292893 12.2929C-0.0976311 12.6834 -0.0976311 13.3166 0.292893 13.7071C0.683417 14.0976 1.31658 14.0976 1.70711 13.7071L7 8.41421L12.2929 13.7071C12.6834 14.0976 13.3166 14.0976 13.7071 13.7071C14.0976 13.3166 14.0976 12.6834 13.7071 12.2929L8.41421 7L13.7071 1.70711Z"
                    fill="black"
                  />
                </svg>
              </div>
              <div class="details-modal-title">
                <h1>{data.username}</h1>
              </div>
              <div class="details-modal-content">
                <img src={data.avatar} />

                <ul>
                  <li> {data.first_name}</li>
                  <li> {data.last_name}</li>
                  <li> {data.gender}</li>
                  <li> {data.phone_number}</li>
                  <li> {data.date_of_birth}</li>
                </ul>
              </div>
            </div>
          </details>
        </div>

      {/* ==== USER CARD ===== */}

        <img src={data.avatar} />
        <p>{data.username}</p>
        <button
          type="button"
          className="btn btn-dark btn-sm mx-2"
          onClick={changeUser}
        >
          Changer
        </button>

        <button
          id={data.id}
          onClick={choiceUser}
          type="button"
          className="btn btn-dark btn-sm mx-2"
        >
          Choisir
        </button>
      </div>

      {/* affiche <MyUser si la state visible true */}

      {visible ? (
        <Myuser choosedUser={choosedUser} />
      ) : null}
    </div>

  );
};

export default User;
