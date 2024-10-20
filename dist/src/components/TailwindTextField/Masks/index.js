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
import React from "react";
import Cleave from "cleave.js/react";
export var TelMask = function (_a) {
    var inputRef = _a.inputRef, rest = __rest(_a, ["inputRef"]);
    return (React.createElement(Cleave, __assign({ ref: inputRef, options: {
            phone: true,
            phoneRegionCode: "US",
            delimiter: "-",
        } }, rest)));
};
export var CreditCardMask = function (_a) {
    var inputRef = _a.inputRef, handleTypeChange = _a.handleTypeChange, rest = __rest(_a, ["inputRef", "handleTypeChange"]);
    return (React.createElement(Cleave, __assign({ ref: inputRef, options: {
            creditCard: true,
            onCreditCardTypeChanged: handleTypeChange,
        } }, rest)));
};
export var MMYYMask = function (_a) {
    var inputRef = _a.inputRef, handleTypeChange = _a.handleTypeChange, rest = __rest(_a, ["inputRef", "handleTypeChange"]);
    return (React.createElement(Cleave, __assign({ ref: inputRef, options: {
            date: true,
            datePattern: ["m", "y"],
        } }, rest)));
};
export var CurrencyMask = function (_a) {
    var inputRef = _a.inputRef, handleTypeChange = _a.handleTypeChange, rest = __rest(_a, ["inputRef", "handleTypeChange"]);
    return (React.createElement(Cleave, __assign({ ref: inputRef, options: {
            numeral: true,
            numeralThousandsGroupStyle: "thousand",
        } }, rest)));
};
