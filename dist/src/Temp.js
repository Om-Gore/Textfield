var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
import { TextField, InputAdornment, makeStyles, IconButton, } from "@material-ui/core";
import classNames from "classnames";
import MyTextField from "./components/TailwindTextField/TextField/TextField";
import AccountCircle from "@material-ui/icons/AccountCircle";
import React from "react";
import { clsx } from "clsx";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import tempStyle from "./tempStyle.module.css";
var useStyles = makeStyles(function (theme) { return ({
    root: {
        display: "flex",
        flexWrap: "wrap",
    },
    margin: {
        margin: theme.spacing(1),
    },
    withoutLabel: {
        marginTop: theme.spacing(3),
    },
    textField: {
        width: "25ch",
    },
}); });
export default (function () {
    var classes = useStyles();
    var currencies = [
        {
            value: "USD",
            label: "$",
        },
        {
            value: "EUR",
            label: "€",
        },
        {
            value: "BTC",
            label: "฿",
        },
        {
            value: "JPY",
            label: "¥",
        },
    ];
    var _a = __read(React.useState("EUR"), 2), value = _a[0], setValue = _a[1];
    var handleValueChange = function (event) {
        setValue(event.target.value);
    };
    var _b = __read(React.useState({
        amount: "",
        password: "",
        weight: "",
        weightRange: "",
        showPassword: false,
    }), 2), values = _b[0], setValues = _b[1];
    var handleChange = function (prop) { return function (event) {
        var _a;
        setValues(__assign(__assign({}, values), (_a = {}, _a[prop] = event.target.value, _a)));
    }; };
    var handleClickShowPassword = function () {
        setValues(__assign(__assign({}, values), { showPassword: !values.showPassword }));
    };
    var handleMouseDownPassword = function (event) {
        event.preventDefault();
    };
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { style: { display: "flex", justifyContent: "center" } },
            React.createElement("div", { className: "".concat(tempStyle["styled-container"]) },
                React.createElement(TextField, { id: "standard-basic", label: "Standard" }),
                React.createElement(TextField, { id: "filled-basic", label: "Filled", variant: "filled" }),
                React.createElement(TextField, { id: "outlined-basic", label: "Outlined", variant: "outlined" }),
                React.createElement(TextField, { required: true, id: "standard-required", label: "Required", defaultValue: "Hello World" }),
                React.createElement(TextField, { disabled: true, id: "standard-disabled", label: "Disabled", defaultValue: "Hello World" }),
                React.createElement(TextField, { id: "standard-password-input", label: "Password", type: "password", autoComplete: "current-password" }),
                React.createElement(TextField, { id: "standard-read-only-input", label: "Read Only", defaultValue: "Hello World", InputProps: {
                        readOnly: true,
                    } }),
                React.createElement(TextField, { id: "standard-number", label: "Number", type: "number", InputLabelProps: {
                        shrink: true,
                    } }),
                React.createElement(TextField, { id: "standard-search", label: "Search field", type: "search" }),
                React.createElement(TextField, { id: "standard-helperText", label: "Helper text", defaultValue: "Default Value", helperText: "Some important text" }),
                React.createElement(TextField, { required: true, id: "filled-required", label: "Required", defaultValue: "Hello World", variant: "filled" }),
                " ",
                React.createElement(TextField, { disabled: true, id: "filled-disabled", label: "Disabled", defaultValue: "Hello World", variant: "filled" }),
                React.createElement(TextField, { id: "filled-password-input", label: "Password", type: "password", autoComplete: "current-password", variant: "filled" }),
                React.createElement(TextField, { id: "filled-read-only-input", label: "Read Only", defaultValue: "Hello World", InputProps: {
                        readOnly: true,
                    }, variant: "filled" }),
                React.createElement(TextField, { id: "filled-number", label: "Number", type: "number", InputLabelProps: {
                        shrink: true,
                    }, variant: "filled" }),
                React.createElement(TextField, { id: "filled-search", label: "Search field", type: "search", variant: "filled" }),
                React.createElement(TextField, { id: "filled-helperText", label: "Helper text", defaultValue: "Default Value", helperText: "Some important text", variant: "filled" }),
                React.createElement(TextField, { required: true, id: "outlined-required", label: "Required", defaultValue: "Hello World", variant: "outlined" }),
                React.createElement(TextField, { disabled: true, id: "outlined-disabled", label: "Disabled", defaultValue: "Hello World", variant: "outlined" }),
                React.createElement(TextField, { id: "outlined-password-input", label: "Password", type: "password", autoComplete: "current-password", variant: "outlined" }),
                React.createElement(TextField, { id: "outlined-read-only-input", label: "Read Only", defaultValue: "Hello World", InputProps: {
                        readOnly: true,
                    }, variant: "outlined" }),
                React.createElement(TextField, { id: "outlined-number", label: "Number", type: "number", InputLabelProps: {
                        shrink: true,
                    }, variant: "outlined" }),
                React.createElement(TextField, { id: "outlined-search", label: "Search field", type: "search", variant: "outlined" }),
                React.createElement(TextField, { id: "outlined-helperText", label: "Helper text", defaultValue: "Default Value", helperText: "Some important text", variant: "outlined" }),
                React.createElement(TextField, { error: true, id: "standard-error", label: "Error", defaultValue: "Hello World" }),
                React.createElement(TextField, { error: true, id: "standard-error-helper-text", label: "Error", defaultValue: "Hello World", helperText: "Incorrect entry." }),
                React.createElement(TextField, { error: true, id: "filled-error", label: "Error", defaultValue: "Hello World", variant: "filled" }),
                React.createElement(TextField, { error: true, id: "filled-error-helper-text", label: "Error", defaultValue: "Hello World", helperText: "Incorrect entry.", variant: "filled" }),
                React.createElement(TextField, { error: true, id: "outlined-error", label: "Error", defaultValue: "Hello World", variant: "outlined" }),
                React.createElement(TextField, { error: true, id: "outlined-error-helper-text", label: "Error", defaultValue: "Hello World", helperText: "Incorrect entry.", variant: "outlined" }),
                React.createElement(TextField, { id: "standard-multiline-flexible", label: "Multiline", multiline: true, maxRows: 4, value: value, onChange: handleValueChange }),
                React.createElement(TextField, { id: "standard-textarea", label: "Multiline Placeholder", placeholder: "Placeholder", multiline: true }),
                React.createElement(TextField, { id: "standard-multiline-static", label: "Multiline", multiline: true, rows: 4, defaultValue: "Default Value" }),
                React.createElement(TextField, { id: "filled-multiline-flexible", label: "Multiline", multiline: true, maxRows: 4, value: value, onChange: handleValueChange, variant: "filled" }),
                React.createElement(TextField, { id: "filled-textarea", label: "Multiline Placeholder", placeholder: "Placeholder", multiline: true, variant: "filled" }),
                React.createElement(TextField, { id: "filled-multiline-static", label: "Multiline", multiline: true, rows: 4, defaultValue: "Default Value", variant: "filled" }),
                React.createElement(TextField, { id: "outlined-multiline-flexible", label: "Multiline", multiline: true, maxRows: 4, value: value, onChange: handleValueChange, variant: "outlined" }),
                React.createElement(TextField, { id: "outlined-textarea", label: "Multiline Placeholder", placeholder: "Placeholder", multiline: true, variant: "outlined" }),
                React.createElement(TextField, { id: "outlined-multiline-static", label: "Multiline", multiline: true, rows: 4, defaultValue: "Default Value", variant: "outlined" }),
                React.createElement(TextField, { className: classes.margin, id: "input-with-icon-textfield", label: "TextField", InputProps: {
                        startAdornment: (React.createElement(InputAdornment, { position: "end" },
                            React.createElement(AccountCircle, null))),
                    } }),
                React.createElement(TextField, { label: "With normal TextField", id: "standard-start-adornment", className: clsx(classes.margin, classes.textField), InputProps: {
                        startAdornment: (React.createElement(InputAdornment, { position: "start" }, "Kg")),
                    } }),
                React.createElement(TextField, { id: "standard-adornment-password", label: "Password", type: values.showPassword ? "text" : "password", value: values.password, onChange: handleChange("password"), InputProps: {
                        endAdornment: (React.createElement(InputAdornment, { position: "end" },
                            React.createElement(IconButton, { "aria-label": "toggle password visibility", onClick: handleClickShowPassword, onMouseDown: handleMouseDownPassword }, values.showPassword ? React.createElement(Visibility, null) : React.createElement(VisibilityOff, null)))),
                    } }),
                React.createElement(TextField, { id: "standard-adornment-amount", value: values.amount, label: "Amount", onChange: handleChange("amount"), InputProps: {
                        startAdornment: (React.createElement(InputAdornment, { position: "start" }, "$")),
                    } }),
                React.createElement(TextField, { id: "standard-adornment-password", label: "Password", type: values.showPassword ? "text" : "password", value: values.password, onChange: handleChange("password"), variant: "filled", InputProps: {
                        endAdornment: (React.createElement(InputAdornment, { position: "end" },
                            React.createElement(IconButton, { "aria-label": "toggle password visibility", onClick: handleClickShowPassword, onMouseDown: handleMouseDownPassword }, values.showPassword ? React.createElement(Visibility, null) : React.createElement(VisibilityOff, null)))),
                    } }),
                React.createElement(TextField, { id: "standard-adornment-amount", value: values.amount, label: "Amount", onChange: handleChange("amount"), variant: "filled", InputProps: {
                        startAdornment: (React.createElement(InputAdornment, { position: "start" }, "$")),
                    } }),
                React.createElement(TextField, { id: "standard-full-width", label: "Label", style: { margin: 8 }, placeholder: "Placeholder", helperText: "Full width!", fullWidth: true, margin: "normal", InputLabelProps: {
                        shrink: true,
                    } }),
                React.createElement(TextField, { label: "None", id: "margin-none", defaultValue: "Default Value", className: classes.textField, helperText: "Some important text" }),
                React.createElement(TextField, { label: "Dense", id: "margin-dense", defaultValue: "Default Value", className: classes.textField, helperText: "Some important text", margin: "dense" }),
                React.createElement(TextField, { label: "Normal", id: "margin-normal", defaultValue: "Default Value", className: classes.textField, helperText: "Some important text", margin: "normal" }),
                React.createElement(TextField, { id: "filled-full-width", label: "Label", style: { margin: 8 }, placeholder: "Placeholder", helperText: "Full width!", fullWidth: true, margin: "normal", InputLabelProps: {
                        shrink: true,
                    }, variant: "filled" }),
                React.createElement(TextField, { label: "None", id: "filled-margin-none", defaultValue: "Default Value", className: classes.textField, helperText: "Some important text", variant: "filled" }),
                React.createElement(TextField, { label: "Dense", id: "filled-margin-dense", defaultValue: "Default Value", className: classes.textField, helperText: "Some important text", margin: "dense", variant: "filled" }),
                React.createElement(TextField, { label: "Normal", id: "filled-margin-normal", defaultValue: "Default Value", className: classes.textField, helperText: "Some important text", margin: "normal", variant: "filled" }),
                React.createElement(TextField, { id: "outlined-full-width", label: "Label", style: { margin: 8 }, placeholder: "Placeholder", helperText: "Full width!", fullWidth: true, margin: "normal", InputLabelProps: {
                        shrink: true,
                    }, variant: "outlined" }),
                React.createElement(TextField, { label: "None", id: "outlined-margin-none", defaultValue: "Default Value", className: classes.textField, helperText: "Some important text", variant: "outlined" }),
                React.createElement(TextField, { label: "Dense", id: "outlined-margin-dense", defaultValue: "Default Value", className: classes.textField, helperText: "Some important text", margin: "dense", variant: "outlined" }),
                React.createElement(TextField, { label: "Normal", id: "outlined-margin-normal", defaultValue: "Default Value", className: classes.textField, helperText: "Some important text", margin: "normal", variant: "outlined" })),
            React.createElement("div", { className: "".concat(tempStyle["styled-container"]) },
                React.createElement(MyTextField, { id: "standard-basic", label: "Standard", variant: "standard" }),
                React.createElement(MyTextField, { id: "filled-basic", label: "Filled", variant: "filled" }),
                React.createElement(MyTextField, { id: "outlined-basic", label: "Outlined", variant: "outlined" }),
                React.createElement(MyTextField, { required: true, id: "standard-required", label: "Required", defaultValue: "Hello World" }),
                React.createElement(MyTextField, { disabled: true, id: "standard-disabled", label: "Disabled", defaultValue: "Hello World" }),
                React.createElement(MyTextField, { id: "standard-password-input", label: "Password", type: "password", autoComplete: "current-password" }),
                React.createElement(MyTextField, { id: "standard-read-only-input", label: "Read Only", defaultValue: "Hello World", InputProps: {
                        readOnly: true,
                    } }),
                React.createElement(MyTextField, { id: "standard-number", label: "Number", type: "number", InputLabelProps: {
                        shrink: true,
                    } }),
                React.createElement(MyTextField, { id: "standard-search", label: "Search field", type: "search" }),
                React.createElement(MyTextField, { id: "standard-helperText", label: "Helper text", defaultValue: "Default Value", helperText: "Some important text" }),
                React.createElement(MyTextField, { required: true, id: "filled-required", label: "Required", defaultValue: "Hello World", variant: "filled" }),
                " ",
                React.createElement(MyTextField, { disabled: true, id: "filled-disabled", label: "Disabled", defaultValue: "Hello World", variant: "filled" }),
                React.createElement(MyTextField, { id: "filled-password-input", label: "Password", type: "password", autoComplete: "current-password", variant: "filled" }),
                React.createElement(MyTextField, { id: "filled-read-only-input", label: "Read Only", defaultValue: "Hello World", InputProps: {
                        readOnly: true,
                    }, variant: "filled" }),
                React.createElement(MyTextField, { id: "filled-number", label: "Number", type: "number", InputLabelProps: {
                        shrink: true,
                    }, variant: "filled" }),
                React.createElement(MyTextField, { id: "filled-search", label: "Search field", type: "search", variant: "filled" }),
                React.createElement(MyTextField, { id: "filled-helperText", label: "Helper text", defaultValue: "Default Value", helperText: "Some important text", variant: "filled" }),
                React.createElement(MyTextField, { required: true, id: "outlined-required", label: "Required", defaultValue: "Hello World", variant: "outlined" }),
                React.createElement(MyTextField, { disabled: true, id: "outlined-disabled", label: "Disabled", defaultValue: "Hello World", variant: "outlined" }),
                React.createElement(MyTextField, { id: "outlined-password-input", label: "Password", type: "password", autoComplete: "current-password", variant: "outlined" }),
                React.createElement(MyTextField, { id: "outlined-read-only-input", label: "Read Only", defaultValue: "Hello World", InputProps: {
                        readOnly: true,
                    }, variant: "outlined" }),
                React.createElement(MyTextField, { id: "outlined-number", label: "Number", type: "number", InputLabelProps: {
                        shrink: true,
                    }, variant: "outlined" }),
                React.createElement(MyTextField, { id: "outlined-search", label: "Search field", type: "search", variant: "outlined" }),
                React.createElement(MyTextField, { id: "outlined-helperText", label: "Helper text", defaultValue: "Default Value", helperText: "Some important text", variant: "outlined" }),
                React.createElement(MyTextField, { error: true, id: "standard-error", label: "Error", defaultValue: "Hello World" }),
                React.createElement(MyTextField, { error: true, id: "standard-error-helper-text", label: "Error", defaultValue: "Hello World", helperText: "Incorrect entry." }),
                React.createElement(MyTextField, { error: true, id: "filled-error", label: "Error", defaultValue: "Hello World", variant: "filled" }),
                React.createElement(MyTextField, { error: true, id: "filled-error-helper-text", label: "Error", defaultValue: "Hello World", helperText: "Incorrect entry.", variant: "filled" }),
                React.createElement(MyTextField, { error: true, id: "outlined-error", label: "Error", defaultValue: "Hello World", variant: "outlined" }),
                React.createElement(MyTextField, { error: true, id: "outlined-error-helper-text", label: "Error", defaultValue: "Hello World", helperText: "Incorrect entry.", variant: "outlined" }),
                React.createElement(MyTextField, { id: "standard-multiline-flexible", label: "Multiline", multiline: true, maxRows: 4, value: value, onChange: handleValueChange }),
                React.createElement(MyTextField, { id: "standard-textarea", label: "Multiline Placeholder", placeholder: "Placeholder", multiline: true }),
                React.createElement(MyTextField, { id: "standard-multiline-static", label: "Multiline", multiline: true, rows: 4, defaultValue: "Default Value" }),
                React.createElement(MyTextField, { id: "filled-multiline-flexible", label: "Multiline", multiline: true, maxRows: 4, value: value, onChange: handleValueChange, variant: "filled" }),
                React.createElement(MyTextField, { id: "filled-textarea", label: "Multiline Placeholder", placeholder: "Placeholder", multiline: true, variant: "filled" }),
                React.createElement(MyTextField, { id: "filled-multiline-static", label: "Multiline", multiline: true, rows: 4, defaultValue: "Default Value", variant: "filled" }),
                React.createElement(MyTextField, { id: "outlined-multiline-flexible", label: "Multiline", multiline: true, maxRows: 4, value: value, onChange: handleValueChange, variant: "outlined" }),
                React.createElement(MyTextField, { id: "outlined-textarea", label: "Multiline Placeholder", placeholder: "Placeholder", multiline: true, variant: "outlined" }),
                React.createElement(MyTextField, { id: "outlined-multiline-static", label: "Multiline", multiline: true, rows: 4, defaultValue: "Default Value", variant: "outlined" }),
                React.createElement(MyTextField, { className: classes.margin, id: "input-with-icon-textfield", label: "TextField", InputProps: {
                        startAdornment: (React.createElement(InputAdornment, { position: "start" },
                            React.createElement(AccountCircle, null))),
                    } }),
                React.createElement(MyTextField, { label: "With normal TextField", id: "standard-start-adornment", className: clsx(classes.margin, classes.textField), InputProps: {
                        startAdornment: (React.createElement(InputAdornment, { position: "start" }, "Kg")),
                    } }),
                React.createElement(MyTextField, { id: "standard-adornment-password", label: "Password", type: values.showPassword ? "text" : "password", value: values.password, onChange: handleChange("password"), InputProps: {
                        endAdornment: (React.createElement(InputAdornment, { position: "end" },
                            React.createElement(IconButton, { "aria-label": "toggle password visibility", onClick: handleClickShowPassword, onMouseDown: handleMouseDownPassword }, values.showPassword ? React.createElement(Visibility, null) : React.createElement(VisibilityOff, null)))),
                    } }),
                React.createElement(MyTextField, { id: "standard-adornment-amount", value: values.amount, label: "Amount", onChange: handleChange("amount"), InputProps: {
                        startAdornment: (React.createElement(InputAdornment, { position: "start" }, "$")),
                    } }),
                React.createElement(MyTextField, { id: "standard-adornment-password", label: "Password", type: values.showPassword ? "text" : "password", value: values.password, onChange: handleChange("password"), variant: "filled", InputProps: {
                        endAdornment: (React.createElement(InputAdornment, { position: "end" },
                            React.createElement(IconButton, { "aria-label": "toggle password visibility", onClick: handleClickShowPassword, onMouseDown: handleMouseDownPassword }, values.showPassword ? React.createElement(Visibility, null) : React.createElement(VisibilityOff, null)))),
                    } }),
                React.createElement(MyTextField, { id: "standard-adornment-amount", value: values.amount, label: "Amount", onChange: handleChange("amount"), variant: "filled", InputProps: {
                        style: {
                            paddingLeft: 0,
                        },
                        startAdornment: (React.createElement(InputAdornment, { position: "start", style: {
                                marginTop: "16px",
                            } }, "$")),
                    } }),
                React.createElement(MyTextField, { id: "standard-full-width", label: "Label", style: { margin: 8 }, placeholder: "Placeholder", helperText: "Full width!", fullWidth: true, margin: "normal", InputLabelProps: {
                        shrink: true,
                    } }),
                React.createElement(MyTextField, { label: "None", id: "margin-none", defaultValue: "Default Value", className: classes.textField, helperText: "Some important text" }),
                React.createElement(MyTextField, { label: "Dense", id: "margin-dense", defaultValue: "Default Value", className: classes.textField, helperText: "Some important text", margin: "dense" }),
                React.createElement(MyTextField, { label: "Normal", id: "margin-normal", defaultValue: "Default Value", className: classes.textField, helperText: "Some important text", margin: "normal" }),
                React.createElement(MyTextField, { id: "filled-full-width", label: "Label", style: { margin: 8 }, placeholder: "Placeholder", helperText: "Full width!", fullWidth: true, margin: "normal", InputLabelProps: {
                        shrink: true,
                    }, variant: "filled" }),
                React.createElement(MyTextField, { label: "None", id: "filled-margin-none", defaultValue: "Default Value", className: classes.textField, helperText: "Some important text", variant: "filled" }),
                React.createElement(MyTextField, { label: "Dense", id: "filled-margin-dense", defaultValue: "Default Value", className: classes.textField, helperText: "Some important text", margin: "dense", variant: "filled" }),
                React.createElement(MyTextField, { label: "Normal", id: "filled-margin-normal", defaultValue: "Default Value", className: classes.textField, helperText: "Some important text", margin: "normal", variant: "filled" }),
                React.createElement(MyTextField, { id: "outlined-full-width", label: "Label", style: { margin: 8 }, placeholder: "Placeholder", helperText: "Full width!", fullWidth: true, margin: "normal", InputLabelProps: {
                        shrink: true,
                    }, variant: "outlined" }),
                React.createElement(MyTextField, { label: "None", id: "outlined-margin-none", defaultValue: "Default Value", className: classes.textField, helperText: "Some important text", variant: "outlined" }),
                React.createElement(MyTextField, { label: "Dense", id: "outlined-margin-dense", defaultValue: "Default Value", className: classes.textField, helperText: "Some important text", margin: "dense", variant: "outlined" }),
                React.createElement(MyTextField, { label: "Normal", id: "outlined-margin-normal", defaultValue: "Default Value", className: classes.textField, helperText: "Some important text", margin: "normal", variant: "outlined" })))));
});
