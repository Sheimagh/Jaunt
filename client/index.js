import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "./index.css";
import App from "./App";
import "./assets/scss/mdb.scss"

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render( <App /> , document.getElementById('root'));

registerServiceWorker();