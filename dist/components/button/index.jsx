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
import { Container } from "./styles";
import { buttonSize, border } from "./theme";
export function Button(_a) {
    var props = __rest(_a, []);
    var borderRadius = border[props.border];
    var padding = buttonSize[props.buttonSize];
    var style = {
        padding: padding,
        borderRadius: borderRadius,
    };
    return (<Container props={props} style={style}>
      {props.label}
    </Container>);
}
//# sourceMappingURL=index.jsx.map