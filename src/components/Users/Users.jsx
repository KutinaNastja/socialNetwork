import axios from "axios";
import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../assets/images/human-bones.png";

export class Users extends React.Component {
  constructor(props) {
    super(props);

    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  }
  render() {
    return (
      <div>
        {this.props.users.map((user) => (
          <div key={user.id}>
            <div className={s.item}>
              <div className={s.button}>
                <img
                  src={
                    user.photos.small != null ? user.photos.small : userPhoto
                  }
                  className={s.img}
                  alt=""
                />
                <div>
                  {user.followed ? (
                    <button
                      onClick={() => {
                        this.props.unfollow(user.id);
                      }}
                    >
                      Unfollow
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        this.props.follow(user.id);
                      }}
                    >
                      Follow
                    </button>
                  )}
                </div>
              </div>
              <div className={s.personal}>
                <div>
                  <div>{user.name}</div>
                  <div className={s.status}>{user.status}</div>
                </div>
                {/* <div className={s.location}>
                  <div>{user.location.city}</div>
                  <div>{user.location.countru}</div>
                </div> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
