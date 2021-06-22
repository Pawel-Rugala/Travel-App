import "./styles/base.scss";
import "./styles/typography.scss";
import "./styles/elements.scss";
import "./styles/modal.scss";
import "./styles/loadAnim.scss";

import renderTrips from "./js/renderTrips";
import checkModals from "./js/modal";
import onload from "./js/onload";
import saveTrip from "./js/saveTrip";
import renderTrip from "./js/renderTrip";
import loadAnimation from "./js/loadAnim";
import "./js/addTrip";

import postData from "./js/postData";
import handleSubmit from "./js/handleSubmit";
// import { handleOpen, handleClose } from './js/modal';

checkModals();

export {
 renderTrips,
 postData,
 handleSubmit,
 saveTrip,
 renderTrip,
 checkModals,
 loadAnimation,
};
window.onload = onload;
