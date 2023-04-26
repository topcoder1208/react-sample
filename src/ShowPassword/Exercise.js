import { useEffect, useState } from "react";
import "./styles.css";

//Attempt 2
//Disble Submit button problem
// function ResetPasswordForm() {
//   const [message, setMessage] = useState();
//   const [password, setPass] = useState("");
//   const [retypedPassword, setRePass] = useState(" ");
//   const [disable, setDisable] = useState(true);

//   useEffect(() => {
//     if (retypedPassword !== password) {
//       setDisable(true);
//     } else {
//       setDisable(false);
//     }
//   }, [retypedPassword, password]);

//   function checkPass(e) {
//     e.preventDefault();
//     if (password !== retypedPassword) {
//       setMessage(
//         <div style={{ color: "red" }}>Retyped password does not match</div>
//       );
//     } else if (
//       !(
//         /^[0-9A-Za-z]+$/.test(password) &&
//         /(\d)+/.test(password) &&
//         /[A-Za-z]+/.test(password)
//       )
//     ) {
//       setMessage(
//         <div style={{ color: "red" }}>
//           Please use numbers and alphabets to set the password
//         </div>
//       );
//     } else {
//       setMessage(<div style={{ color: "darkgreen" }}>Password is reset</div>);
//     }
//   }

//   function hideShowPass(e) {
//     if (e.target.innerText === "show password") {
//       e.target.parentElement.firstElementChild.type = "text";
//       e.target.innerText = "hide password";
//     } else {
//       e.target.parentElement.firstElementChild.type = "password";
//       e.target.innerText = "show password";
//     }
//   }

//   return (
//     <form onSubmit={checkPass} className="resetPasswordForm">
//       <h2>Reset your password</h2>

//       <label>
//         Reset Password
//         <input
//           onChange={(e) => {
//             setPass(e.target.value);
//           }}
//           placeholder="Type Password"
//           required
//           type="password"
//         />
//         <span className="showhidebutton" onClick={hideShowPass}>
//           show password
//         </span>
//       </label>

//       <br />
//       <label>
//         Confirm Password
//         <input
//           onChange={(e) => {
//             setRePass(e.target.value);
//           }}
//           placeholder="Re-Type Password"
//           required
//           type="password"
//         />
//         <span className="showhidebutton" onClick={hideShowPass}>
//           show password
//         </span>
//       </label>

//       {disable ? (
//         <button type="submit" disabled>
//           Submit
//         </button>
//       ) : (
//         <button type="submit">Submit</button>
//       )}

//       {message}
//     </form>
//   );
// }

//Attempt 3

function ResetPasswordForm() {
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  return (
    <div>
      <InputPassword
        placeholder="type password"
        data={password}
        setData={setPassword}
      />
      <br />
      <InputPassword
        placeholder="re-type password"
        data={rePassword}
        setData={setRePassword}
      />
      <br />
      <button
        type="submit"
        disabled={
          password !== "" && rePassword !== "" && password === rePassword
            ? false
            : true
        }
        onClick={(e) => {
          alert("password is set");
        }}
      >
        Submit
      </button>
    </div>
  );
}

function InputPassword({ placeholder, data, setData }) {
  const [isHidden, setIsHidden] = useState(true);
  return (
    <label>
      <input
        value={data}
        onChange={(e) => {
          setData(e.target.value);
        }}
        type={isHidden ? "password" : "text"}
        placeholder={placeholder}
      />
      <span
        onClick={(e) => {
          //when show button is clicked- before changing the state- it will be true
          if (isHidden) {
            e.target.innerText = "hide";
          } else {
            e.target.innerText = "show";
          }
          setIsHidden((isHidden) => !isHidden);
        }}
        style={{ cursor: "pointer" }}
      >
        show
      </span>
    </label>
  );
}

export function Exercise() {
  return (
    <div className="Exercise5">
      <ResetPasswordForm />
    </div>
  );
}
