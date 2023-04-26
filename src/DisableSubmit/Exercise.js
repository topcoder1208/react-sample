import { useEffect, useState } from "react";
import "./styles.css";

//attempt 2
// let password = "";
// let rePassword = " ";
// //Disble Submit button problem
// function ResetPassForm() {
//   const [match, setMatch] = useState(false);

//   function checkMatch() {
//     if (password === rePassword) {
//       setMatch(true);
//     } else {
//       setMatch(false);
//     }
//   }
//   return (
//     <form
//       onSubmit={(e) => {
//         e.preventDefault();
//         e.target.lastChild.innerText = match ? "Password is reset" : "";
//       }}
//     >
//       <label>
//         New Password:
//         <input
//           onChange={(e) => {
//             password = e.target.value;
//             checkMatch();
//           }}
//           placeholder="type pass"
//         />
//       </label>
//       <br />
//       <label>
//         Confirm Password:
//         <input
//           onChange={(e) => {
//             rePassword = e.target.value;
//             checkMatch();
//           }}
//           placeholder="Re-type pass"
//         />
//       </label>
//       <br />
//       {match ? (
//         <button type="submit">Submit</button>
//       ) : (
//         <button disabled type="submit">
//           Submit
//         </button>
//       )}
//       <div className="message">{!match && " "}</div>
//     </form>
//   );
// }

//attempt 3
function ResetPassForm() {
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  // function submitButtonRender(){
  //   if(password!=="" && rePassword!=="" && password===rePassword){
  //    return (<button type="submit">Submit</button> )
  //   }
  //return (<button disabled type="submit">Submit</button> )
  //
  // }

  function doesMatch() {
    if (password !== "" && rePassword !== "" && password === rePassword) {
      return false;
    }
    return true;
  }

  return (
    <div>
      <h1>Disable Submit Problem</h1>
      <input
        value={password}
        placeholder="type password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <br />
      <input
        value={rePassword}
        placeholder="re-type password"
        onChange={(e) => {
          setRePassword(e.target.value);
        }}
      />
      <br />
      {/* {password !== "" && rePassword !== "" && password === rePassword ? (
        <button type="submit">Submit</button>
      ) : (
        <button type="submit" disabled>
          Submit
        </button>
      )} */}

      <button
        type="submit"
        disabled={doesMatch()}
        onClick={() => {
          alert("Password is reset");
          setPassword("");
          setRePassword("");
        }}
      >
        submit
      </button>
    </div>
  );
}
export function Exercise() {
  return (
    <div className="Exercise4">
      <ResetPassForm />
    </div>
  );
}
