import React from "react";
import ReactDOM from "react-dom";

const HeaderComponent = () => {

};

const BodyComponent = () => {

};

const FooterComponent = () => {

};

const AppComponent = () => {
    return (
        <div>
            <HeaderComponent />
            <BodyComponent />
            <FooterComponent />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppComponent />);


