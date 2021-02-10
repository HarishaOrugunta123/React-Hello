import React from "react";
import { Component } from "react";
import "./UserList.css";

class UserList extends Component {
  constructor(Props) {
    super(Props);
    this.state = {
      users: [],
      display: false,
      value: 1,
    };
  }

  Change(e) {
    this.setState({ value: e.target.value });
  }

  hide() {
    this.setState({ display: false });
  }

  show() {
    // fetch("https://jsonplaceholder.typicode.com/users/" + this.state.value)
    //   .then((response) => response.json())
    //   .then((json) => this.setState({ users: [json], display: true }));
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        // let result = [];
        // for(let i = 0; i< this.state.value; i++){
        // result.push(json[i]);
        // }
        //   this.setState({ users: result, display: true })});

        this.setState({
          users: json.filter((el, index) => index < this.state.value),
          display: true,
        });
      });
  }

  deletehandler = (e, id) => {
    let index = this.state.users.findIndex((e) => e.id === id);
    let newArray = this.state.users.slice();
    newArray.splice(index, 1);
    this.setState({ users: newArray });
  };

  render() {
    return (
      <div>
        <div>
          <input
            type="number"
            min="1"
            max="10"
            value={this.state.value}
            onChange={(e) => this.Change(e)}
            placeholder="Enter Userid"
          ></input>
          <button onClick={() => this.show()}>ShowData</button>
          <button onClick={() => this.hide()}>HideData</button>
        </div>
        {this.state.display ? (
          <ul>
            {this.state.users.map((item) => (
              <li key={item.id}>
                <div className="row">
                  <div className="column">
                    <button
                      className="delete"
                      onClick={(e) => this.deletehandler(e, item.id)}
                    >
                      x
                    </button>
                    <div className="card">
                      <p>
                        Name:<span>{item.name}</span>
                      </p>
                      <p>
                        UserName:<span>{item.username}</span>
                      </p>
                      <p>
                        PhoneNumber:<span>{item.phone}</span>
                      </p>
                      <p>
                        Email:<span>{item.email}</span>
                      </p>
                      <p>
                        Website:<span>{item.website}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
            ;
          </ul>
        ) : (
          " "
        )}
      </div>
    );
  }
}
export default UserList;
