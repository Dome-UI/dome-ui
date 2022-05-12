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
/* eslint-disable react/button-has-type */
import React from "react";
var theme = {
    colors: {
        primary: {
            x050: "#FFE8D9",
            x100: "#FFD0B5",
            x200: "#FFB088",
            x300: "#FF9466",
            x400: "#F9703E",
            x500: "#F35627",
            x600: "#DE3A11",
            x700: "#C52707",
            x800: "#AD1D07",
            x900: "#841003",
        },
        accent: {
            x050: "#FFE3EC",
            x100: "#FFB8D2",
            x200: "#FF8CBA",
            x300: "#F364A2",
            x400: "#E8368F",
            x500: "#DA127D",
            x600: "#BC0A6F",
            x700: "#A30664",
            x800: "#870557",
            x900: "#620042",
        },
        neutral: {
            x000: "#FFFFFF",
            x050: "#F7F7F7",
            x100: "#E1E1E1",
            x200: "#CFCFCF",
            x300: "#B1B1B1",
            x400: "#9E9E9E",
            x500: "#7E7E7E",
            x600: "#626262",
            x700: "#515151",
            x800: "#3B3B3B",
            x900: "#222222",
            x999: "#111111",
        },
        positive: {
            x050: "#E3F9E5",
            x100: "#C1F2C7",
            x200: "#91E697",
            x300: "#51CA58",
            x400: "#31B237",
            x500: "#18981D",
            x600: "#0F8613",
            x700: "#0E7817",
            x800: "#07600E",
            x900: "#014807",
        },
        negative: {
            x050: "#FFE3E3",
            x100: "#FFBDBD",
            x200: "#FF9B9B",
            x300: "#F86A6A",
            x400: "#EF4E4E",
            x500: "#E12D39",
            x600: "#CF1124",
            x700: "#AB091E",
            x800: "#8A041A",
            x900: "#610316",
        },
        warning: {
            x050: "#FFFBEA",
            x100: "#FFF3C4",
            x200: "#FCE588",
            x300: "#FADB5F",
            x400: "#F7C948",
            x500: "#F0B429",
            x600: "#DE911D",
            x700: "#CB6E17",
            x800: "#B44D12",
            x900: "#8D2B0B",
        },
    },
};
var buttonVariantToStyle = {
    primary: "filled",
    secondary: "outlined",
    tertiary: "ghost",
};
var buttonStyles = {
    filled: function (_a) {
        var mainColor = _a.mainColor, contrastColor = _a.contrastColor, mainColorStrong = _a.mainColorStrong;
        return ({
            backgroundColor: mainColor,
            border: "none",
            borderColor: mainColor,
            color: contrastColor,
            hover: {
                backgroundColor: mainColorStrong,
            },
            focus: {
                backgroundColor: mainColorStrong,
            },
        });
    },
    outlined: function (_a) {
        var mainColor = _a.mainColor, contrastColor = _a.contrastColor;
        return ({
            color: mainColor,
            border: "1px solid",
            borderColor: mainColor,
            backgroundColor: "transparent",
            hover: {
                color: contrastColor,
                backgroundColor: mainColor,
            },
            focus: {
                color: contrastColor,
                backgroundColor: mainColor,
            },
        });
    },
    ghost: function (_a) {
        var mainColor = _a.mainColor, mainColorLight = _a.mainColorLight, contrastColor = _a.contrastColor;
        return ({
            color: mainColor,
            borderColor: "transparent",
            backgroundColor: "transparent",
            hover: {
                color: contrastColor,
                backgroundColor: mainColorLight,
            },
            focus: {
                color: contrastColor,
                backgroundColor: mainColorLight,
            },
        });
    },
};
var border = {
    none: "0",
    small: "4px",
    medium: "10px",
    full: "10000px",
};
var buttonSizes = {
    xsmall: {
        padding: "4px 8px",
    },
    small: {
        padding: "8px 10px",
    },
    medium: {
        padding: "10px 12px",
    },
    large: {
        padding: "10px 14px",
    },
    xlarge: {
        padding: "14px 20px",
    },
};
export function Button(_a) {
    var label = _a.label, fullWidth = _a.fullWidth, props = __rest(_a, ["label", "fullWidth"]);
    var borderRadius = border[props.border];
    var buttonSize = __rest(buttonSizes[props.size], []);
    var colorSet = (function () {
        var currentColorVariant = theme.colors.primary;
        return {
            mainColor: currentColorVariant.x500,
            mainColorLight: currentColorVariant.x400,
            mainColorStrong: currentColorVariant.x600,
            contrastColor: theme.colors.neutral.x000,
        };
    })();
    var buttonStyle = buttonStyles[buttonVariantToStyle[props.variant]](colorSet);
    return (<button style={__assign(__assign({ borderRadius: borderRadius, width: fullWidth ? "100%" : "auto" }, buttonSize), buttonStyle)}>
      {label}
    </button>);
}
Button.defaultProps = {
    variant: "primary",
    border: "small",
    size: "medium",
};
//# sourceMappingURL=button.jsx.map