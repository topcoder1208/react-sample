//Attempt 1

// import { useState } from "react";
// import "./styles.css";

// const fontsInfo = {
//   "Sans Serif": ["sans-serif", "This font can be used for body-copy"],
//   Montserrat: [
//     "'Montserrat', sans-serif",
//     "This font can be suitable for both headings and body-copy"
//   ],
//   Poppins: ["'Poppins', sans-serif", "This font can be used for headings"],
//   Roboto: ["'Roboto', sans-serif", "This font can be used for body-copy"],
//   "Open Sans": [
//     "'Open Sans', sans-serif",
//     "This font can be used for body-copy"
//   ],
//   "Noto Sans": [
//     "'Noto Sans', sans-serif",
//     "This font can be suitable for both headings and body-copy"
//   ]
// };
// var fontFamilies = Object.keys(fontsInfo);

// function FontSizePicker({ fontSize, setFontSize }) {
//   function updateFontSize(e, i) {
//     let newFontSize = Number(fontSize) + i;
//     if (newFontSize > 0) {
//       setFontSize(() => newFontSize);
//       e.target.parentElement.children[1].value = fontSize;
//     }
//   }
//   return (
//     <div>
//       <button onClick={(e) => updateFontSize(e, 8)}>+</button>
//       <input
//         onChange={(e) => {
//           setFontSize(() => e.target.value);
//         }}
//         type="number"
//         min="0"
//         placeholder="select initial font"
//         value={fontSize}
//       />
//       <button onClick={(e) => updateFontSize(e, -8)}>-</button>
//     </div>
//   );
// }

// function FontFamilyPicker({ setFontFamily, setMessage }) {
//   return (
//     <select
//       onChange={(e) => {
//         setFontFamily(fontsInfo[e.target.value][0]);
//         setMessage(fontsInfo[e.target.value][1]);
//       }}
//       name="fonts"
//       id="fonts"
//     >
//       {fontFamilies.map((font) => {
//         return (
//           <option key={font} value={font}>
//             {font}
//           </option>
//         );
//       })}
//     </select>
//   );
// }

// function ShowSourceCode({ sourceCode, setSourceCode }) {
//   return (
//     <button
//       onClick={(e) => {
//         if (sourceCode) {
//           e.target.innerText = "show source code";
//           e.target.parentElement.childNodes[6].disabled = false;
//         } else {
//           e.target.innerText = "hide source code";
//           e.target.parentElement.childNodes[6].disabled = true;
//         }
//         setSourceCode((sourceCode) => !sourceCode);
//       }}
//     >
//       Show Source Code
//     </button>
//   );
// }

// function SmallFigma() {
//   const [fontFamily, setFontFamily] = useState("sans-serif");
//   const [fontSize, setFontSize] = useState("16");
//   const [userInput, setUserInput] = useState("");
//   const [sourceCode, setSourceCode] = useState(false);
//   const [message, setMessage] = useState(fontsInfo["Sans Serif"][1]);
//   return (
//     <div className="figmaApp">
//       <FontSizePicker setFontSize={setFontSize} fontSize={fontSize} />{" "}
//       <FontFamilyPicker setFontFamily={setFontFamily} setMessage={setMessage} />
//       <ShowSourceCode sourceCode={sourceCode} setSourceCode={setSourceCode} />
//       <br />
//       {message}
//       <textarea
//         className="inputBox"
//         type="text"
//         style={{ font: `${fontSize}px ${fontFamily}` }}
//         onChange={(e) => {
//           setUserInput(e.target.value);
//         }}
//         value={
//           sourceCode
//             ? `<div style = "font:${fontSize}px ${fontFamily}; >${userInput}</div>`
//             : userInput
//         }
//       ></textarea>
//       <div>{sourceCode}</div>
//       <br />
//     </div>
//   );
// }

// export function Exercise() {
//   return (
//     <div className="Exercise6">
//       <SmallFigma />
//     </div>
//   );
// }

//Attempt 2

import { useState } from "react";
import "./styles.css";

const fontsInfo = {
  "Sans Serif": {
    fontFamily: "sans-serif",
    suitable: "This font can be used for body-copy"
  },
  Montserrat: {
    fontFamily: "'Montserrat', sans-serif",
    suitable: "This font can be suitable for both headings and body-copy"
  },
  Poppins: {
    fontFamily: "'Poppins', sans-serif",
    suitable: "This font can be used for headings"
  },
  Roboto: {
    fontFamily: "'Roboto', sans-serif",
    suitable: "This font can be used for body-copy"
  },
  "Open Sans": {
    fontFamily: "'Open Sans', sans-serif",
    suitable: "This font can be used for body-copy"
  },
  "Noto Sans": {
    fontFamily: "'Noto Sans', sans-serif",
    suitable: "This font can be suitable for both headings and body-copy"
  }
};

function FontSizePicker({ inputFont, setInputFont }) {
  function fontSizeUpdate(i) {
    if (i < 0 && inputFont <= 8) {
      return;
    }
    setInputFont(inputFont + i);
  }
  return (
    <div>
      <button onClick={() => fontSizeUpdate(-8)}>-</button>
      <input
        placeholder="Enter font size"
        value={inputFont}
        onChange={(e) => {
          setInputFont(e.target.value);
        }}
      />
      <button onClick={() => fontSizeUpdate(8)}>+</button>

      <br />
    </div>
  );
}

function FontFamilyPicker({ inputFontFamily, setInputFontFamily }) {
  return (
    <div>
      <select
        value={inputFontFamily}
        name="fontSelector"
        onChange={(e) => {
          setInputFontFamily(e.target.value);
        }}
      >
        <option value="Sans Serif">Sans Serif</option>
        <option value="Montserrat">Montserrat</option>
        <option value="Poppins">Poppins</option>
        <option value="Roboto">Roboto</option>
        <option value="Open Sans">Open Sans</option>
        <option value="Noto Sans">Noto Sans</option>
      </select>
    </div>
  );
}

function SourceCodeCopy({ inputFont, inputFontFamily }) {
  const [sourceHidden, setSourceHidden] = useState(true);
  return (
    <div>
      <button
        onClick={(e) => {
          if (sourceHidden) {
            e.target.innerText = "Hide Source";
          } else {
            e.target.innerText = "Copy Source";
          }
          setSourceHidden((sourceHidden) => !sourceHidden);
        }}
      >
        Copy Source
      </button>
      <div
        style={{
          display: sourceHidden ? "none" : "block",
          border: "2px solid slateblue",
          margin: "0.5rem 0",
          padding: "0.5rem"
        }}
      >{`<div style="font-size: ${inputFont}px; font-family: ${inputFontFamily};, sans-serif;"><span style={{ fontWeight: "700" }}>
      Bold- Lorem Ipsum is simply dummy text of the printing and typesetting
      industry.
    </span>
    <br />
    <span style={{ fontWeight: "400" }}>
      Regular- It has survived not only five centuries, but also the leap
      into electronic typesetting, remaining essentially unchanged.
    </span></div>`}</div>
    </div>
  );
}

function DesignerTool() {
  const [inputFont, setInputFont] = useState(16);
  const [inputFontFamily, setInputFontFamily] = useState("Sans Serif");

  return (
    <div>
      <FontSizePicker inputFont={inputFont} setInputFont={setInputFont} />
      <FontFamilyPicker
        inputFontFamily={inputFontFamily}
        setInputFontFamily={setInputFontFamily}
      />

      <div className="info">{fontsInfo[inputFontFamily].suitable}</div>

      <SourceCodeCopy inputFont={inputFont} inputFontFamily={inputFontFamily} />
      <br />
      <h3 style={{ textAlign: "center" }}>Sample Text</h3>
      <br />
      <div
        style={{
          fontSize: inputFont,
          fontFamily: fontsInfo[inputFontFamily].fontFamily,
          border: "2px dashed slateblue",
          margin: "1rem 0",
          padding: "0.5rem"
        }}
      >
        <span style={{ fontWeight: "700" }}>
          Bold- Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </span>
        <br />
        <span style={{ fontWeight: "400" }}>
          Regular- It has survived not only five centuries, but also the leap
          into electronic typesetting, remaining essentially unchanged.
        </span>
      </div>
    </div>
  );
}

export function Exercise() {
  return (
    <div className="Exercise6">
      <DesignerTool />
    </div>
  );
}
