class APIRequest {
    constructor() {
        this.client_id = "d9308aacf8b204d361fd";
        this.client_secret = "84969aeef73956f4ec9e8716d1840532802bb81b";
        this.repository_count = 5;
        this.repository_sort = "created: asc";
    }
    async getUserProfile(user) {
        const userProfileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`),
        userProfileData = await userProfileResponse.json();

        const userRepositoryResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repository_count}&sort=${this.repository_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`),
        userRepositoryData = await userRepositoryResponse.json();

        return {
            userProfileData,
            userRepositoryData
        }
    }
}

export { APIRequest };