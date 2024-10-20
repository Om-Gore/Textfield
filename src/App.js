import { RHTextField } from "components/RHTextField/RHTextField";
import React, { useState } from "react";
import { useTheme } from "@material-ui/core";
import { TailwindTextField } from "components/TailwindTextField";

function App() {
  const theme = useTheme();

  const [email, setEmail] = useState("");

  function handleChange(e) {
    if (e.target.name === "email") {
      setEmail(e.target.value);
    }
  }

  function handleBlur() {
    console.log("ohoosdj ias");
  }

  function handleKeyUp() {}

  const handleKeyDown = () => {};

  const children = (
    <option data-testid="registry-list-option-item" value="0">
      Select one
    </option>
  );

  const myvar = "standard";
  const mymar = "dense";

  return (
    <>
      <div
        style={{
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          gap: "2rem",
        }}
      >
        <RHTextField
          name="email"
          variant={myvar}
          label="Email"
          margin={mymar}
          defaultValue="rh"
          helperText="helper text"
          required={true}
          type="email"
          placeholder="placeholder"
          //* error={true}
          //* disabled={true}
          // autoFocus={true}
          // className=""
          // data-testid="my-testid"
          // dropdowntype={true}
          fullWidth={true}
          id="id-email"
          inputProps={{
            // className: "",
            // "data-testid": "my-0di",
            // id: "",
            // min: 0,
            // max: 99,
            // maxLength: 21,
            style: {
              background: theme.palette.background.default,
              boxSizing: "border-box",
              height: 20,
              minWidth: "300px",
              width: 300,
            },
          }}
          InputProps={{
            // autoComplete: "off",
            // classes: "",
            // className: "",
            // endAdornment: "end",
            // value: "search text",
            // startAdornment: "start",
            style: {
              padding: 20,
              background: "transparent",
              textTransform: "uppercase",
            },
          }}
          // maskType="MMYY"
          //* multiline={true}
          // onBlur={handleBlur}
          // onChange={handleChange}
          // onKeyDown={handleKeyDown}
          // onKeyUp={handleKeyUp}
          // rows={3}
          // select={true}
          style={{
            margin: 0,
            fontWeight: "bold",
            color: "black",
          }}
          // value={email}
        >
          {children}
        </RHTextField>

        <TailwindTextField
          name="email"
          variant={myvar}
          label="Email"
          margin={mymar}
          defaultValue="tailwind"
          helperText="helper text"
          required={true}
          type="email"
          placeholder="placeholder"
          //*error={true}
          //* disabled={true}
          // autoFocus={true}
          // className=""
          // data-testid="my-testid"
          // dropdowntype={true}
          fullWidth={true}
          id="id-email"
          inputProps={{
            // className: "",
            // "data-testid": "my-0di",
            // id: "",
            // min: 0,
            // max: 99,
            // maxLength: 21,
            style: {
              background: theme.palette.background.default,
              boxSizing: "border-box",
              height: 20,
              minWidth: "300px",
              width: 300,
            },
          }}
          InputProps={{
            // autoComplete: "off",
            // classes: "",
            // className: "",
            // endAdornment: "end",
            // value: "search text",
            // startAdornment: "start",
            style: {
              padding: 20,
              background: "transparent",
              textTransform: "uppercase",
            },
          }}
          // maskType=""
          //* multiline={true}
          // onBlur={handleBlur}
          // onChange={handleChange}
          // onKeyDown={handleKeyDown}
          // onKeyUp={handleKeyUp}
          // rows={3}
          // select={true}
          style={{
            margin: 0,
            fontWeight: "bold",
            color: "black",
          }}
          // value={email}
        >
          {children}
        </TailwindTextField>
      </div>
    </>
  );
}

export default App;
