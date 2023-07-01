"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const DebounceButton = ({ children }) => {
    return <react_native_1.Pressable>{children}</react_native_1.Pressable>;
};
exports.default = DebounceButton;
