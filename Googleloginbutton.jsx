import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from 'jwt-decode';

function GoogleLoginButton() {
  const handleLoginSuccess = (credentialResponse) => {
    const decoded = jwt_decode(credentialResponse.credential);
    console.log("Google User:", decoded);
    alert(`Welcome ${decoded.name}`);
    // You can also store in localStorage or global state
  };

  const handleLoginError = () => {
    console.log("Login Failed");
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <GoogleLogin onSuccess={handleLoginSuccess} onError={handleLoginError} />
    </div>
  );
}

export default GoogleLoginButton;
