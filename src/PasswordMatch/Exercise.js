import { useEffect, useState } from "react";
import "./styles.css";
//attempt 2
// function InputPassword({ placeholder, label, setStatevalue }) {
//   return (
//     <label>
//       {label}
//       <input
//         onChange={(e) => {
//           setStatevalue(() => e.target.value);
//         }}
//         placeholder={placeholder}
//       />
//     </label>
//   );
// }

// function ResetPasswordForm() {
//   const [match, setMatch] = useState(false);
//   const [password, setPassword] = useState("");
//   const [rePassword, setRePassword] = useState("");
//   useEffect(() => {
//     if (password === rePassword) {
//       setMatch(false);
//     } else {
//       setMatch(true);
//     }
//   }, [password, rePassword]);
//   return (
//     <div>
//       <h1>Reset Password match check</h1>
//       <InputPassword
//         placeholder="Type Password"
//         label="New Password: "
//         setStatevalue={setPassword}
//       />
//       <br />

//       <InputPassword
//         placeholder="Re-type Password"
//         label="Confirm Password: "
//         setStatevalue={setRePassword}
//       />
//       {match ? <div style={{ color: "red" }}>Password does not match</div> : ""}
//     </div>
//   );
// }

//attempt 3

function ResetPasswordForm() {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");

  function matchPasswords() {
    if (input1 !== "" && input2 !== "") {
      if (input1 !== input2) {
        return "Password doesn't match";
      }
    }
  }

  return (
    <div>
      <h1>Reset Password Form</h1>

      <input
        value={input1}
        placeholder="Type Password"
        required
        onChange={(e) => {
          setInput1(e.target.value);
        }}
      />
      <br />
      <input
        value={input2}
        placeholder="Re-type Password"
        required
        onChange={(e) => {
          setInput2(e.target.value);
        }}
      />
      <br />
      <div style={{ color: "red" }}>{matchPasswords()}</div>
    </div>
  );
}

export function Exercise() {
  return (
    <div className="Exercise2">
      <ResetPasswordForm />
    </div>
  );
}
