import { GoogleLogin } from "react-google-login";
import AuthContext from "./authContext";
import { useContext } from "react";
 
const clientId = "1091627847540-im1cbflkikacpreblp2td8vdli0s0ed9.apps.googleusercontent.com";
 
function Login() {
  const { authenticated, setAuthenticated } = useContext(AuthContext);
  const onSuccess = (res) => {
    localStorage.setItem("profile", res.profileObj);
    localStorage.setItem("userName", res.profileObj.name);
    localStorage.setItem("userMail", res.profileObj.email);
    localStorage.setItem("userImg", res.profileObj.imageUrl);
    localStorage.setItem("userId", res.profileObj.googleId);
    console.log(
      "LOGIN efectuado com sucesso , usuario atual: ",
      res.profileObj
    );
    setAuthenticated(true);
  };
  const onFailure = (res) => {
    setAuthenticated(false);
    console.log("LOGIN Falhou, tente novamente", res);
  };
 
  return (
<div id="signInButton" className="signInButton">
<GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
      />
</div>
  );
}
export default Login;