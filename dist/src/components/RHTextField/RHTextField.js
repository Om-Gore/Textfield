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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
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
import React, { useState } from "react";
import { useUID } from "react-uid";
import { createStyles, makeStyles, TextField, useTheme, } from "@material-ui/core";
import RHDropdownIcon from "../RHDropdownIcon/index";
import CreditCardIcon from "../RHCreditCardIcon/index";
/**************************************************************************/
var useInputBaseStyles = makeStyles(function (theme) { return ({
    root: {
        "&$disabled": {
            backgroundColor: theme.palette.common.white,
            color: "inherit",
        },
    },
    disabled: {
        color: "inherit",
        backgroundColor: theme.palette.common.white,
    },
}); });
var useLabelStyles = makeStyles(function (theme) { return ({
    root: {
        "&$disabled": {
            opacity: 0.75,
        },
    },
    outlined: {},
    shrink: {},
    disabled: {
        opacity: 0.75,
    },
}); });
var useSelectStyles = makeStyles(function (theme) { return ({
    root: {
        fontSize: 13,
        "&$disabled": {
            opacity: 0.75,
        },
    },
    disabled: {
        opacity: 0.75,
    },
}); });
/**************************************************************************/
import classNames from "classnames";
import { TelMask, CreditCardMask, MMYYMask, CurrencyMask } from "./Masks";
import merge from "lodash/merge";
var useStyles = makeStyles(function (theme) {
    return createStyles({
        focusVisibleStyle: {
            marginTop: 6,
            marginBottom: 0,
            "&.keyboard-focused .MuiOutlinedInput-notchedOutline": {
                border: "2px solid #1976d2 !important",
            },
        },
    });
});
export var RHTextField = function (_a) {
    var _b, _c;
    var children = _a.children, maskType = _a.maskType, inputProps = _a.inputProps, rows = _a.rows, 
    //@ts-ignore
    _errorMessages = _a.errorMessages, rest = __rest(_a, ["children", "maskType", "inputProps", "rows", "errorMessages"]);
    var _d = __read(React.useState(""), 2), creditCardType = _d[0], setCreditCardType = _d[1];
    var uid = useUID();
    var inputRef = React.useRef(null);
    var theme = useTheme();
    var labelClasses = useLabelStyles();
    var selectClasses = useSelectStyles();
    var inputBaseClasses = useInputBaseStyles();
    var classes = useStyles();
    var _e = __read(useState(false), 2), isKeyboardFocused = _e[0], setIsKeyboardFocused = _e[1];
    var isMouseDown = React.useRef(false);
    var InputProps = {
        tel: {
            inputComponent: TelMask,
            inputProps: __assign(__assign({}, inputProps), { inputRef: inputRef }),
        },
        creditCard: {
            inputComponent: CreditCardMask,
            inputProps: __assign(__assign({}, inputProps), { inputRef: inputRef, handleTypeChange: function (type) {
                    setCreditCardType(type);
                } }),
            startAdornment: creditCardType ? (React.createElement(CreditCardIcon, { type: creditCardType })) : null,
        },
        MMYY: {
            inputComponent: MMYYMask,
            inputProps: __assign(__assign({}, inputProps), { inputRef: inputRef }),
        },
        currency: {
            inputComponent: CurrencyMask,
            inputProps: __assign(__assign({}, inputProps), { inputRef: inputRef }),
        },
    };
    var props = __assign(__assign({}, rest), { FormHelperTextProps: __assign({ style: { marginLeft: 0 } }, rest === null || rest === void 0 ? void 0 : rest.FormHelperTextProps), InputLabelProps: __assign({ shrink: !!rest.placeholder || ((_b = rest.value) !== null && _b !== void 0 ? _b : "") !== "" }, rest.InputLabelProps), inputProps: __assign({}, inputProps), InputProps: __assign(__assign({}, rest.InputProps), InputProps[maskType !== null && maskType !== void 0 ? maskType : ""]), SelectProps: __assign({ native: true, IconComponent: RHDropdownIcon }, rest.SelectProps) });
    var mergedProps = merge({
        variant: "outlined",
        margin: "normal",
        select: true,
        InputLabelProps: {
            classes: {
                root: labelClasses.root,
                outlined: labelClasses.outlined,
                shrink: labelClasses.shrink,
                disabled: labelClasses.disabled,
            },
        },
        InputProps: {
            classes: {
                root: inputBaseClasses.root,
                disabled: inputBaseClasses.disabled,
            },
        },
        SelectProps: {
            IconComponent: RHDropdownIcon,
            native: true,
            classes: {
                root: selectClasses.root,
                disabled: selectClasses.disabled,
            },
        },
    }, props);
    return (React.createElement(TextField, __assign({ inputRef: inputRef, id: rest.id ? rest.id : uid, rows: rows }, ((props === null || props === void 0 ? void 0 : props.dropdowntype) ? mergedProps : props), { 
        // This fixes run-time Error/Warning in development
        dropdowntype: (props === null || props === void 0 ? void 0 : props.dropdowntype) ? "".concat(props === null || props === void 0 ? void 0 : props.dropdowntype) : null, InputProps: __assign(__assign({}, props.InputProps), { className: "".concat(((_c = props.InputProps) === null || _c === void 0 ? void 0 : _c.className) || "", " bg-[rgba(0,0,0,0)]") }), inputProps: __assign(__assign({}, props.inputProps), { style: __assign({ backgroundColor: "inherit" }, props.inputProps.style) }), className: classNames([
            props === null || props === void 0 ? void 0 : props.className,
            "".concat(classes.focusVisibleStyle, " ").concat(isKeyboardFocused ? "keyboard-focused" : ""),
        ]), onBlur: function (event) {
            if (rest.onBlur) {
                rest.onBlur(event);
            }
            setIsKeyboardFocused(false);
            isMouseDown.current = false;
        }, onFocus: function (event) {
            var _a;
            if (rest.onFocus) {
                rest.onFocus(event);
            }
            setIsKeyboardFocused(!isMouseDown.current && ((_a = rest === null || rest === void 0 ? void 0 : rest.select) !== null && _a !== void 0 ? _a : false));
        }, onKeyDown: function (event) {
            if (rest.onKeyDown) {
                rest.onKeyDown(event);
            }
            setIsKeyboardFocused(false);
        }, onMouseDown: function (event) {
            if (rest.onMouseDown) {
                rest.onMouseDown(event);
            }
            isMouseDown.current = true;
        } }), children));
};
RHTextField.defaultProps = {
    variant: "outlined",
    margin: "normal",
};
// export { default as RHFormTextField } from "./RHFormTextField";
