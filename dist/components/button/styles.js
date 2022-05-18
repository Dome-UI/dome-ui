var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from "styled-components";
export var Container = styled.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background: ", ";\n  width: ", ";\n  color: ", ";\n\n  transition: all 0.2s;\n  cursor: pointer;\n  border: none;\n\n  :hover {\n    ", ";\n  }\n\n  :active {\n    ", ";\n  }\n"], ["\n  background: ", ";\n  width: ", ";\n  color: ", ";\n\n  transition: all 0.2s;\n  cursor: pointer;\n  border: none;\n\n  :hover {\n    ", ";\n  }\n\n  :active {\n    ", ";\n  }\n"])), function (props) { return props.props.backgroundColor; }, function (props) { return (props.props.fullWidth ? "100%" : "auto"); }, function (props) { return props.props.color; }, function (props) {
    return props.props.hover
        ? "background: ".concat(props.props.hover)
        : "filter: brightness(0.9)";
}, function (props) {
    return props.props.clickColor
        ? "background: ".concat(props.props.clickColor)
        : "filter: brightness(0.7)";
});
var templateObject_1;
//# sourceMappingURL=styles.js.map