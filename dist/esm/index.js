import React from 'react';

var _excluded = ["label", "fullWidth"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
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
      x900: "#841003"
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
      x900: "#620042"
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
      x999: "#111111"
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
      x900: "#014807"
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
      x900: "#610316"
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
      x900: "#8D2B0B"
    }
  }
};
var buttonVariantToStyle = {
  primary: "filled",
  secondary: "outlined",
  tertiary: "ghost"
};
var buttonStyles = {
  filled: function filled(_ref) {
    var mainColor = _ref.mainColor,
        contrastColor = _ref.contrastColor,
        mainColorStrong = _ref.mainColorStrong;
    return {
      backgroundColor: mainColor,
      border: "none",
      borderColor: mainColor,
      color: contrastColor,
      hover: {
        backgroundColor: mainColorStrong
      },
      focus: {
        backgroundColor: mainColorStrong
      }
    };
  },
  outlined: function outlined(_ref2) {
    var mainColor = _ref2.mainColor,
        contrastColor = _ref2.contrastColor;
    return {
      color: mainColor,
      border: "1px solid",
      borderColor: mainColor,
      backgroundColor: "transparent",
      hover: {
        color: contrastColor,
        backgroundColor: mainColor
      },
      focus: {
        color: contrastColor,
        backgroundColor: mainColor
      }
    };
  },
  ghost: function ghost(_ref3) {
    var mainColor = _ref3.mainColor,
        mainColorLight = _ref3.mainColorLight,
        contrastColor = _ref3.contrastColor;
    return {
      color: mainColor,
      borderColor: "transparent",
      backgroundColor: "transparent",
      hover: {
        color: contrastColor,
        backgroundColor: mainColorLight
      },
      focus: {
        color: contrastColor,
        backgroundColor: mainColorLight
      }
    };
  }
};
var border = {
  none: "0",
  small: "4px",
  medium: "10px",
  full: "10000px"
};
var buttonSizes = {
  xsmall: {
    padding: "4px 8px"
  },
  small: {
    padding: "8px 10px"
  },
  medium: {
    padding: "10px 12px"
  },
  large: {
    padding: "10px 14px"
  },
  xlarge: {
    padding: "14px 20px"
  }
};
function Button(_ref4) {
  var label = _ref4.label,
      fullWidth = _ref4.fullWidth,
      props = _objectWithoutProperties(_ref4, _excluded);

  var borderRadius = border[props.border];

  var buttonSize = _extends({}, buttonSizes[props.size]);

  var colorSet = function () {
    var currentColorVariant = theme.colors.primary;
    return {
      mainColor: currentColorVariant.x500,
      mainColorLight: currentColorVariant.x400,
      mainColorStrong: currentColorVariant.x600,
      contrastColor: theme.colors.neutral.x000
    };
  }();

  var buttonStyle = buttonStyles[buttonVariantToStyle[props.variant]](colorSet);
  return /*#__PURE__*/React.createElement("button", {
    style: _objectSpread(_objectSpread({
      borderRadius: borderRadius,
      width: fullWidth ? "100%" : "auto"
    }, buttonSize), buttonStyle)
  }, label);
}
Button.defaultProps = {
  variant: "primary",
  border: "small",
  size: "medium"
};

export { Button };
//# sourceMappingURL=index.js.map
