import { useState } from "react";
import "./styles.css";

function Home() {
  return (
    <div>
      <h1>This is Homepage</h1>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged.
      </p>
    </div>
  );
}

function About() {
  return (
    <div>
      <h1>This is About page</h1>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged.
      </p>
    </div>
  );
}

function Profile() {
  return (
    <div>
      <h1>This is Profile Page</h1>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged.
      </p>
    </div>
  );
}

// export function Exercise() {
//   const [pageNo, setPageNo] = useState(<Home />);

//   return (
//     <div className="Exercise8">
//       <div>
//         <button
//           onClick={() => {
//             setPageNo(<Home />);
//           }}
//         >
//           Home
//         </button>
//         <button
//           onClick={() => {
//             setPageNo(<About />);
//           }}
//         >
//           About
//         </button>
//         <button
//           onClick={() => {
//             setPageNo(<Profile />);
//           }}
//         >
//           Profile
//         </button>
//       </div>
//Attempt1:
//       {/* {pageNo === Home && <Home />}
//       {pageNo === About && <About />}
//       {pageNo === Profile && <Profile />} */}
//Attempt2:
//       {pageNo}
//     </div>
//   );
// }

//Attempt 3:

function RouterButton({ buttonLabel, setPage }) {
  function onClickHandler(e) {
    setPage(e.target.innerText);
  }

  return <button onClick={onClickHandler}>{buttonLabel}</button>;
}
export function Exercise() {
  const [page, setPage] = useState("Home");

  function setPageData(e) {
    if (page === "Home") {
      return <Home />;
    }
    if (page === "About") {
      return <About />;
    }
    return <Profile />;
  }
  console.log(page);

  return (
    <div className="Exercise8">
      <div>
        <RouterButton buttonLabel={"Home"} setPage={setPage} />
        <RouterButton buttonLabel={"About"} setPage={setPage} />
        <RouterButton buttonLabel={"Profile"} setPage={setPage} />
      </div>
      {setPageData()}
    </div>
  );
}
