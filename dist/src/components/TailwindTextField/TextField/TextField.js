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
import React, { useEffect, useRef, useState } from "react";
import standardStyles from "./StandardStyles.module.css";
import filledStyles from "./FilledStyles.module.css";
import outlinedStyles from "./OutlinedStyles.module.css";
import rootStyles from "./RootStyles.module.css";
import classNames from "classnames";
var TextField = function (_a) {
    var _b, _c, _d, _e, _f, _g, _h, _j;
    var id = _a.id, name = _a.name, label = _a.label, _k = _a.variant, variant = _k === void 0 ? "standard" : _k, _l = _a.defaultValue, defaultValue = _l === void 0 ? "" : _l, _m = _a.disabled, disabled = _m === void 0 ? false : _m, _o = _a.required, required = _o === void 0 ? false : _o, _p = _a.type, type = _p === void 0 ? "text" : _p, autoComplete = _a.autoComplete, _q = _a.InputProps, InputProps = _q === void 0 ? {} : _q, //~!Why? if I don't set Input props default value as {} it is causing error
    _r = _a.InputLabelProps, //~!Why? if I don't set Input props default value as {} it is causing error
    InputLabelProps = _r === void 0 ? {} : _r, _s = _a.helperText, helperText = _s === void 0 ? "" : _s, error = _a.error, multiline = _a.multiline, value = _a.value, onChange = _a.onChange, onFocus = _a.onFocus, onBlur = _a.onBlur, _t = _a.placeholder, placeholder = _t === void 0 ? "" : _t, _u = _a.rows, rows = _u === void 0 ? 1 : _u, style = _a.style, _v = _a.className, className = _v === void 0 ? "" : _v, _w = _a.margin, margin = _w === void 0 ? "none" : _w, _x = _a.fullWidth, fullWidth = _x === void 0 ? false : _x;
    var variantStylesMap = {
        standard: standardStyles,
        filled: filledStyles,
        outlined: outlinedStyles,
    };
    var variantStyles = variantStylesMap[variant];
    //for input
    var _y = __read(useState(defaultValue), 2), inputValue = _y[0], setInputValue = _y[1];
    var _z = __read(useState(false), 2), isInputFocused = _z[0], setIsInputFocused = _z[1];
    var handleInputChange = function (e) {
        setInputValue(e.target.value);
    };
    var handleInputFocus = function () {
        setIsInputFocused(true);
    };
    var handleInputBlur = function () {
        setIsInputFocused(false);
    };
    //for textarea
    var visibleTextareaRef = useRef(null);
    var hiddenTextareaRef = useRef(null);
    var autoSize = function () {
        var hiddenTextarea = hiddenTextareaRef.current;
        var visibleTextarea = visibleTextareaRef.current;
        if (hiddenTextarea && visibleTextarea && !rows) {
            hiddenTextarea.value = visibleTextarea.value;
            hiddenTextarea.style.width = getComputedStyle(visibleTextarea).width;
            var newHeight = hiddenTextarea.scrollHeight;
            visibleTextarea.style.height = "".concat(newHeight, "px");
        }
    };
    useEffect(function () {
        var handleResize = function () {
            autoSize();
        };
        window.addEventListener("resize", handleResize);
        return function () {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    useEffect(function () {
        autoSize();
    }, [inputValue]);
    label = required ? label + " *" : label;
    InputLabelProps.shrink =
        InputLabelProps.shrink ||
            !!InputProps.startAdornment ||
            !!inputValue ||
            !!value ||
            isInputFocused;
    // if (label === "Password") {
    //   console.log("InputLabelProps.shrink: ", InputLabelProps.shrink);
    //   console.log("InputProps.startAdornment: ", !!InputProps.startAdornment);
    //   console.log("InputProps.endAdornment: ", !!InputProps.endAdornment);
    //   console.log("inputValue: ", !!inputValue);
    //   console.log("value: ", !!value);
    //   console.log("isInputFocused: ", isInputFocused);
    // }
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: classNames(rootStyles.div1, (_b = {},
                _b[rootStyles["div1-full-width"]] = fullWidth,
                _b[variantStyles["div1-margin-".concat(margin)]] = margin,
                _b), className), style: style },
            React.createElement("label", { className: classNames(rootStyles.label, variantStyles.label, (_c = {},
                    _c[variantStyles["label-shrink"]] = InputLabelProps === null || InputLabelProps === void 0 ? void 0 : InputLabelProps.shrink,
                    _c[variantStyles["label-margin-".concat(margin)]] = !(InputLabelProps === null || InputLabelProps === void 0 ? void 0 : InputLabelProps.shrink),
                    _c[rootStyles["label-focus"]] = isInputFocused && !error,
                    _c[rootStyles["label-error"]] = error,
                    _c)), "data-shrink": "false", htmlFor: id, id: "".concat(id, "-label") }, label),
            React.createElement("div", { className: classNames(rootStyles.div2, variantStyles.div2, (_d = {},
                    _d[rootStyles["div2-focus"]] = isInputFocused && !error,
                    _d[rootStyles["div2-disabled"]] = disabled,
                    _d[variantStyles["div2-disabled"]] = disabled,
                    _d[variantStyles["div2-hover"]] = !disabled && !isInputFocused,
                    _d[rootStyles["div2-error"]] = error,
                    _d[variantStyles["div2-multiline"]] = !!multiline,
                    _d[variantStyles["div2-startAdornment"]] = !!InputProps.startAdornment,
                    _d)) },
                InputProps.startAdornment,
                !multiline ? (React.createElement(React.Fragment, null,
                    React.createElement("input", { "aria-invalid": "false", autoComplete: autoComplete, id: id, name: name, type: type, className: classNames(rootStyles.input, variantStyles.input, (_e = {},
                            _e[rootStyles["input-focus"]] = isInputFocused,
                            _e[variantStyles["input-margin-".concat(margin)]] = margin,
                            _e)), value: value !== null && value !== void 0 ? value : inputValue, onChange: onChange !== null && onChange !== void 0 ? onChange : handleInputChange, onFocus: onFocus !== null && onFocus !== void 0 ? onFocus : handleInputFocus, onBlur: onBlur !== null && onBlur !== void 0 ? onBlur : handleInputBlur, required: required, disabled: disabled, readOnly: InputProps.readOnly, placeholder: placeholder, style: InputProps.style }))) : (React.createElement(React.Fragment, null,
                    React.createElement("textarea", { "aria-invalid": "false", id: id, name: name, ref: visibleTextareaRef, rows: rows, value: value !== null && value !== void 0 ? value : inputValue, onChange: onChange !== null && onChange !== void 0 ? onChange : handleInputChange, onFocus: onFocus !== null && onFocus !== void 0 ? onFocus : handleInputFocus, onBlur: onBlur !== null && onBlur !== void 0 ? onBlur : handleInputBlur, className: classNames(rootStyles.textarea, (_f = {},
                            _f[rootStyles["textarea-focus"]] = isInputFocused,
                            _f)), placeholder: isInputFocused && !value && !inputValue && placeholder }),
                    React.createElement("textarea", { ref: hiddenTextareaRef, className: classNames(rootStyles["hidden-textarea"]), readOnly: true, tabIndex: -1, "aria-hidden": "true" }))),
                InputProps.endAdornment,
                variant === "outlined" && (React.createElement("fieldset", { "aria-hidden": "true", className: classNames(variantStyles.fieldset, (_g = {},
                        _g[variantStyles["fieldset-focus"]] = isInputFocused,
                        _g[variantStyles["fieldset-error"]] = error,
                        _g)) },
                    React.createElement("legend", { className: classNames(variantStyles.legend, (_h = {},
                            _h[variantStyles["legend-value-focus"]] = isInputFocused || !!inputValue,
                            _h)) },
                        React.createElement("span", null, label))))),
            !!helperText && (React.createElement("p", { className: classNames(rootStyles["helper-text"], variantStyles["helper-text"], (_j = {},
                    _j[rootStyles["helper-text-error"]] = error,
                    _j[variantStyles["helper-text-margin-".concat(margin)]] = margin,
                    _j)), id: "".concat(id, "-helper-text") }, helperText)))));
};
export default TextField;
