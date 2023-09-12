import { getSearchInputData } from "./script.js";
import { APIRequest } from "./api.js";
import { UserInterface } from "./userinterface.js";

const userSearchInput = document.querySelector(".user-search-input"),
currentUser = new APIRequest(),
currentUserUI = new UserInterface();

(function loadAllEventListners() {
    userSearchInput.addEventListener("keyup", getSearchInputData);
}) ();

export { currentUser, currentUserUI };
