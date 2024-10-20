import React from "react";
var CreditCardIcon = function (props) {
    switch (props.type) {
        case "amex":
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "40", height: "40", viewBox: "0 0 40 40" },
                React.createElement("title", null, "AMEX"),
                React.createElement("rect", { x: "8", y: "12", width: "24", height: "16", rx: "2.3", ry: "2.3", fill: "#00adef" }),
                React.createElement("path", { d: "M18.3,21.2l-1.4-3.1H15.2v4.4l-2-4.4H11.8l-2,4.6H11l.4-1h2.2l.4,1h2.3V19.3l1.5,3.4h1l1.5-3.3v3.3h1.1V18.2H19.7l-1.4,3.1Zm-5.8-.5h-.7l.7-1.6h0l.7,1.5Z", fill: "#fff", fillRule: "evenodd" }),
                React.createElement("path", { d: "M28.4,20.4l.8-.9,1.2-1.3H29l-1.3,1.4-1.3-1.4H22.1v4.5h4.3l1.3-1.5L29,22.7h1.4l-1.2-1.4Zm-2.7,1.4H23.2v-.9h2.5V20H23.2v-.8h2.5L27,20.4Z", fill: "#fff" })));
        case "mastercard":
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "40", height: "40", viewBox: "0 0 40 40" },
                React.createElement("title", null, "mastercard"),
                React.createElement("rect", { x: "8", y: "12", width: "24", height: "16", rx: "2.3", ry: "2.3", fill: "#192169" }),
                React.createElement("circle", { cx: "16.2", cy: "20", r: "5", fill: "#ff0016" }),
                React.createElement("path", { d: "M23.8,15A5,5,0,0,0,20,16.7l-.6.8h1.1a5,5,0,0,1,.4,1H19a4.9,4.9,0,0,0-.2,1h2.4a4.8,4.8,0,0,1,0,.5,5,5,0,0,1,0,.5H18.8a4.9,4.9,0,0,0,.2,1h2a5,5,0,0,1-.4,1H19.4l.6.8A5,5,0,1,0,23.8,15Z", fill: "#ffa916" })));
        case "mastercardAlt":
            return (React.createElement("svg", { width: "28", height: "18", viewBox: "0 0 28 18" },
                React.createElement("title", null, "Financial/Mastercard"),
                React.createElement("g", { id: "Phase-2", stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd" },
                    React.createElement("g", { id: "Order-Detail", transform: "translate(-250.000000, -2563.000000)" },
                        React.createElement("rect", { id: "Rectangle", fill: "#FFFFFF", x: "0", y: "0", width: "1200", height: "3228" }),
                        React.createElement("g", { id: "Group", transform: "translate(250.000000, 2563.000000)", fillRule: "nonzero" },
                            React.createElement("g", { id: "_Group_" },
                                React.createElement("rect", { id: "Rectangle", fill: "#FF5F00", x: "10", y: "2", width: "8", height: "14" }),
                                React.createElement("path", { d: "M10.6949786,9.00124998 C10.6921478,6.2391663 11.9109486,3.62922017 14,1.92386081 C10.4521594,-0.976080827 5.35731801,-0.55367925 2.29599343,2.89421307 C-0.765331144,6.34210539 -0.765331144,11.6578946 2.29599343,15.1057869 C5.35731801,18.5536792 10.4521594,18.9760808 14,16.0761392 C11.9116132,14.3713212 10.6928868,11.7624564 10.6949786,9.00124998 L10.6949786,9.00124998 Z", id: "_Path_", fill: "#EB001B" }),
                                React.createElement("path", { d: "M28,9.00124985 C28,12.4466681 26.1083587,15.5895962 23.1286622,17.0952205 C20.1489658,18.6008448 16.6042619,18.2048333 14,16.0753734 C16.0872859,14.3692927 17.3059932,11.761057 17.3059932,9 C17.3059932,6.23894296 16.0872859,3.63070728 14,1.92462662 C16.6042619,-0.204833256 20.1489658,-0.60084484 23.1286622,0.904779502 C26.1083587,2.41040385 28,5.55333194 28,8.99875015 L28,9.00124985 Z", id: "Path", fill: "#F79E1B" })))))));
        case "visa":
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "40", height: "40", viewBox: "0 0 40 40" },
                React.createElement("title", null, "visa"),
                React.createElement("rect", { x: "8", y: "15", width: "24", height: "10", fill: "#fff" }),
                React.createElement("path", { d: "M29.7,12H10.3A2.3,2.3,0,0,0,8,14.3H8V15H32v-.7A2.3,2.3,0,0,0,29.7,12Z", fill: "#0a5296" }),
                React.createElement("path", { d: "M8,25.7A2.3,2.3,0,0,0,10.3,28H29.7A2.3,2.3,0,0,0,32,25.7V25H8Z", fill: "#f4a428" }),
                React.createElement("polygon", { points: "16.6 23 17.6 17 19.2 17 18.2 23 16.6 23", fill: "#00589f" }),
                React.createElement("path", { d: "M23.9,17.2,22.5,17c-1.6,0-2.7.8-2.7,1.9s.8,1.3,1.4,1.6.8.5.8.7-.5.6-.9.6a3.3,3.3,0,0,1-1.5-.3h-.2l-.2,1.3A5,5,0,0,0,21,23c1.7,0,2.7-.8,2.8-2s-.4-1.2-1.3-1.6-.9-.4-.9-.7.3-.5.9-.5l1.2.2h.1l.2-1.3", fill: "#00589f" }),
                React.createElement("path", { d: "M28,17H26.8a.9.9,0,0,0-.8.6L23.6,23h1.7l.3-.9h2l.2.9h1.5L28,17m-2,4a8.9,8.9,0,0,0,.6-1.7l.2-.6v.6a16.9,16.9,0,0,0,.4,1.7Z", fill: "#00589f" }),
                React.createElement("path", { d: "M15.3,17l-1.6,4-.2-.8a4.5,4.5,0,0,0-2.2-2.4L12.8,23h1.6L17,17H15", fill: "#00589f" }),
                React.createElement("path", { d: "M12,17H9.7v.2a5.3,5.3,0,0,1,3.8,3.1L13,17.5a.7.7,0,0,0-.7-.5", fill: "#f9a51a" })));
        case "discover":
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "40", height: "40", viewBox: "0 0 40 40" },
                React.createElement("title", null, "discover"),
                React.createElement("path", { d: "M32,14.3A2.3,2.3,0,0,0,29.7,12H10.3A2.3,2.3,0,0,0,8,14.3H8V25.7A2.3,2.3,0,0,0,10.3,28h4.1A51,51,0,0,0,32,19.3Z", fill: "#efefef" }),
                React.createElement("path", { d: "M32,25.7V19.3A51,51,0,0,1,14.3,28H29.7A2.3,2.3,0,0,0,32,25.7Z", fill: "#f48120" }),
                React.createElement("circle", { cx: "20", cy: "20", r: "4.6", fill: "#f48120" })));
        default:
            return null;
    }
};
export default CreditCardIcon;
