import React from "react";
import { Link } from "../Components/link";
import { Label } from "../Components/label";
import { Thank } from "./thanks";
import { Button } from "../Components/buttons";
import axios from "axios";

class PageComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      value: "",
      uname: "",
      pass: "",
      signedIn: true,
      auth: true,
      list: [],
      error: null,
    };
    this.buttonClick = this.buttonClick.bind();
    this.getval = this.getval.bind();
    //const[users,setUsers]=useState([]);
  }

  state = {
    posts: [],
  };

  componentDidMount() {
    axios.get("http://localhost:3000/user").then((response) => {
      //console.log(response);
      this.setState({ posts: response.data });
    });
  }

  getval = (event) => {
    //console.log('Event :',event.target.value);
    const name = event.target.name;
    const value = event.target.value;

    this.setState({ [name]: value });
  };

  buttonClick = (event) => {
    //event.preventDefault();

    const { auth, uname, pass, signedIn } = this.state;
    console.log("Username on submit :", uname);
    console.log("Password on submit :", pass);
    this.state.posts.map((post) => {
      if (post.uname === uname && post.pass === pass) {
        this.setState({ auth: !auth, signedIn: !signedIn });
      } else {
        //alert("wrong input");
        this.setState({ auth: false });
      }
    });
  };
  backbutton = () => {
    const { signedIn, auth } = this.state;

    this.setState({ signedIn: !signedIn, auth: !auth });
  };

  render() {
    //console.log("inside render");
    //console.log('State: ',this.state);
    const { auth, signedIn } = this.state;
    return (
      <div>
        {signedIn ? (
          <div className="box">
            <h2 className="centertext">LOGIN</h2>
            <Label
              text="Username"
              inputType="text"
              iconClass="fa-solid fa-user"
              labelClass="left"
              placeHolder="Enter Username"
              func={this.getval}
              varname="uname"
            />
            <Label
              text="Password"
              inputType="password"
              iconClass="fa-solid fa-lock"
              labelClass="left"
              placeHolder="Enter Password"
              func={this.getval}
              varname="pass"
            />
            <Link
              url="https://www.google.com"
              text="Forgot Password?"
              iconClass="right"
              iconColor="#000000"
              size="14px"
            />
            <div className="space">
              <Button
                text="SUBMIT"
                buttonClass="submitButton"
                func={this.buttonClick}
              />
            </div>

            {!auth ? <div className="warning">Wrong input!!</div> : null}

            <div className="centertext">
              <div className="space10">or Signup using</div>
              <div className="space10">
                <Link
                  url="https://www.github.com"
                  text="Github"
                  iconClass="fa-brands fa-github-square nounder"
                  iconColor="#000000"
                  uline="hidden"
                  size="28px"
                />
                <span className="space3">
                  <Link
                    url="https://www.linkedin.com"
                    text="Linkedin"
                    iconClass="fa-brands fa-linkedin nounder"
                    iconColor="#2C2293"
                    uline="hidden"
                    size="28px"
                  />
                </span>
                <Link
                  url="https://www.google.com"
                  text="Google"
                  iconClass="fa-brands fa-google nounder"
                  iconColor="#c12323"
                  uline="hidden"
                  size="28px"
                />
              </div>
              <div className="space10">or</div>
              <div className="space10">
                <Link
                  url="https://www.google.com"
                  text="SIGNUP"
                  iconClass="nounder"
                  iconColor="blue"
                  uline="default"
                  size="20px"
                />
              </div>
            </div>
          </div>
        ) : (
          <div>
            <Thank backbutton={() => this.backbutton()} />
          </div>
        )}
      </div>
    );
  }
}

export const Login = PageComponent;
