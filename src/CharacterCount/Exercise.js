import { useState } from "react";
import "./styles.css";

//2nd attempt
// function PostTwitter() {
//   const [countState, setCountState] = useState({ count: 280, color: "black" });

//   function charCounter(e) {
//     let newCount = 280 - e.target.value.length;
//     if (newCount <= 20 && newCount > 0) {
//       setCountState({ count: newCount, color: "orange" });
//     } else if (newCount <= 0) {
//       setCountState({ count: newCount, color: "red" });
//     } else {
//       setCountState({ count: newCount, color: "black" });
//     }
//   }
//   return (
//     <div>
//       <textarea
//         style={{ maxWidth: "600px", width: "100%", height: "100px" }}
//         onChange={charCounter}
//         placeholder="What's happening"
//       />
//       <div className="charCounter">
//         <span style={{ color: countState.color }}>{countState.count}</span>/280
//       </div>
//     </div>
//   );
// }

//3rd attempt
function PostTwitter({ maxCount, breakpoint1, breakpoint2 }) {
  const [data, setData] = useState("");

  function charCounter() {
    let countcolor = "";
    let diff = maxCount - data.length;
    if (diff > breakpoint1) {
      countcolor = "black";
    } else if (diff > breakpoint2) {
      countcolor = "orange";
    } else {
      countcolor = "red";
    }
    return (
      <div>
        <span style={{ color: countcolor }}>{diff}</span>/50
      </div>
    );
  }
  return (
    <div>
      <textarea
        style={{ maxWidth: "600px", width: "100%", height: "100px" }}
        value={data}
        onChange={(e) => {
          setData(e.target.value);
        }}
      />
      <div>{charCounter()}</div>
    </div>
  );
}

export function Exercise() {
  return (
    <div>
      <h1>Twitter - Character Counter</h1>
      <PostTwitter maxCount={50} breakpoint1={20} breakpoint2={0} />
    </div>
  );
}
