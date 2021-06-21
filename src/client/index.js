import "./styles/base.scss";
import "./styles/typography.scss";
import "./styles/elements.scss";
import "./styles/modal.scss";

import renderTrips from "./js/renderTrips";
import checkModals from "./js/modal";
import onload from "./js/onload";
import saveTrip from "./js/saveTrip";
import "./js/addTrip";

import postData from "./js/postData";
import handleSubmit from "./js/handleSubmit";
// import { handleOpen, handleClose } from './js/modal';

export { checkModals, renderTrips, postData, handleSubmit, saveTrip };
window.onload = onload;
