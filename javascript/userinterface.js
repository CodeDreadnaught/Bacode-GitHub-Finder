class UserInterface {
    constructor() {
        this.profile = document.querySelector(".user-profile");
    }
    displayUserProfile(user) {
        this.profile.innerHTML = `
            <div class="current-user d-flex res-d-block gray-border gen-border-rad mb-1rem">
                <div class="current-user-profile-img res-width-100">
                    <section class="current-user-profile-img-wrapper">
                    <img class="img-fluid" src="${user.avatar_url}" />
                    </section>
                    <button class="view-profile-button text-a-c background-bacode-light-blue width-100 gen-border-rad transition"><a href="${user.html_url}" target="_blank" class="d-block text-d-none color-bacode-white">View Profile</a></button>
                </div>
                <div class="current-user-profile-info res-width-100">
                    <section class="current-user-stats d-flex">
                        <span class="badge color-bacode-white">Public Repositories: ${user.public_repos}</span>
                        <span class="badge color-bacode-white background-bacode-gray">Public Gists: ${user.public_gists}</span>
                        <span class="badge color-bacode-white background-bacode-green">Followers: ${user.followers}</span>
                        <span class="badge color-bacode-white">Following: ${user.following}</span>
                    </section>
                    <ul class="current-user-particulars">
                        <li class="current-user-particulars-items">Company: ${user.company}</li>
                        <li class="current-user-particulars-items">Website/Blog: ${user.blog}</li>
                        <li class="current-user-particulars-items">Location: ${user.location}</li>
                        <li class="current-user-particulars-items">Member Since: ${user.created_at}</li>
                    </ul>
                </div>
            </div>
            <h3 class="recent-repositories mb-1rem">Recent Repositories</h3>
            <div class="user-repositories"></div>
        `;
    }
    displayNoUserProfile() {
        this.profile.innerHTML = `
            <div class="no-user text-a-c gen-border-rad mb-1rem">
            <h4>Oops, we could not find anyone with this username.</h4>
            <p>Try a new keyword or phrase.</p>
            </div>
        `;
    }
    clearUserProfile() {
        this.profile.innerHTML = "";
    }
    displayUserRepository(repository) {
        let obtainedRepository = "";

        repository.forEach(current => {
            obtainedRepository += `
                <div class="current-user-repositories">
                    <div class="individual-repository d-flex res-d-block gray-border gen-border-rad mb-1rem">
                        <div class="repository-link d-flex ai-c res-width-100">
                            <a href="${current.html_url}" target="_blank" class="text-d-none transition">${current.name}</a>
                        </div>
                        <div class="repository-info d-flex res-width-100">
                        <span class="repository-badge color-bacode-white d-flex ai-c">Stars: ${current.stargazers_count}</span>
                        <span class="repository-badge color-bacode-white d-flex ai-c background-bacode-green">Forks: ${current.forks_count}</span>
                        <span class="repository-badge color-bacode-white d-flex ai-c background-bacode-orange">Watchers: ${current.watchers_count}</span>
                        </div>
                    </div>
                </div>
            `;
        });

        const userRepositories = document.querySelector(".user-repositories");

        userRepositories.innerHTML = obtainedRepository;
    }
    displayUIAlert(alertMessage, alertNotificationType) {
        this.clearUIAlert();

        const notificationSection = document.createElement("div"),
        notificationMessage = document.createTextNode(alertMessage),
        appWrapper = document.querySelector(".app-wrapper"),
        searchTextWrapper = document.querySelector(".search-text-wrapper");

        notificationSection.appendChild(notificationMessage);
        notificationSection.className = `notification-section ${alertNotificationType} text-a-c gen-border-rad center color-bacode-white width-100 transition`;

        appWrapper.insertBefore(notificationSection, searchTextWrapper);

        setTimeout(() => {
            this.clearUIAlert();
        }, 2500);
    }
    clearUIAlert() {
        const notificationSection = document.querySelector(".notification-section");

        if (notificationSection) {
            notificationSection.remove();
        }
    }
}

export { UserInterface };