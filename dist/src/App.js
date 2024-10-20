var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
import { RHTextField } from "components/RHTextField/RHTextField";
import React, { useState } from "react";
import { useTheme } from "@material-ui/core";
import { TailwindTextField } from "components/TailwindTextField";
function App() {
    var theme = useTheme();
    var _a = __read(useState(""), 2), email = _a[0], setEmail = _a[1];
    function handleChange(e) {
        if (e.target.name === "email") {
            setEmail(e.target.value);
        }
    }
    function handleBlur() {
        console.log("ohoosdj ias");
    }
    function handleKeyUp() { }
    var handleKeyDown = function () { };
    var children = (React.createElement("option", { "data-testid": "registry-list-option-item", value: "0" }, "Select one"));
    return (React.createElement(React.Fragment, null,
        React.createElement(RHTextField
        // autoFocus={true}
        //%className=""
        //data-testid="my-testid"
        //%defaultValue="hello"
        //% disabled={true}
        // dropdowntype={true}
        //% error={true}
        //% fullWidth={true}
        //%helperText={"helper text hai bro"}
        //%id="id-email"
        , { 
            // autoFocus={true}
            //%className=""
            //data-testid="my-testid"
            //%defaultValue="hello"
            //% disabled={true}
            // dropdowntype={true}
            //% error={true}
            //% fullWidth={true}
            //%helperText={"helper text hai bro"}
            //%id="id-email"
            inputProps: {
                className: "",
                "data-testid": "my-0di",
                id: "",
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
            }, InputProps: {
                autoComplete: "off",
                classes: "",
                className: "",
                //%endAdornment: "end",
                value: "search text",
                //%startAdornment: "start",
                style: {
                    padding: 20,
                    background: "transparent",
                    textTransform: "uppercase",
                },
            }, 
            //%label="Email"
            margin: "none" }, children)));
}
export default App;
