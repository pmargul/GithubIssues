export enum Languages {
    polish = "pl",
    english = "en"
}; 

export enum SearchSettings {
    onlyUsers,
    onlyRepos,
    all
}; 

export const GET_API_GITHUB_USERS_URL = "https://api.github.com/users";
export const GET_API_GITHUB_REPOS_URL = "https://api.github.com/repositories";