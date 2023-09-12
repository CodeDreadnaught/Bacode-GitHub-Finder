import { currentUser, currentUserUI } from "./app.js";

function getSearchInputData(e) {
    const searchInputData = e.target.value,
    APIMaxRateExceededDocumentationUrl = "https://docs.github.com/rest/overview/resources-in-the-rest-api#rate-limiting";

    if (searchInputData !== "") {
        currentUser.getUserProfile(searchInputData)
        .then(data => {
            if (data.userProfileData.documentation_url === APIMaxRateExceededDocumentationUrl) {
                currentUserUI.displayUIAlert("An error occurred, please try again later.", "error-notification");
            } else if (data.userProfileData.message === "Not Found") {
                currentUserUI.displayNoUserProfile();
            } else {
                currentUserUI.displayUserProfile(data.userProfileData);
                currentUserUI.displayUserRepository(data.userRepositoryData);
            }
        })
        .catch(() =>{
            currentUserUI.displayUIAlert("Your internet connection might be unavailable, do check and try again.", "error-notification");
        });
    } else {
        currentUserUI.clearUserProfile();
    }
}

export { getSearchInputData };