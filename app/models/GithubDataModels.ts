export interface IGithubRecord {
    id: number;
};

export class GithubUser implements IGithubRecord {
    id!: number;
    login: string | undefined;
    avatar_url: string | undefined;
    html_url: string | undefined;
    followers_url: string | undefined;

    constructor(id: number, login: string | undefined, avatar_url: string | undefined, html_url: string | undefined, followers_url: string | undefined){
        this.id = id;
        this.login = login;
        this.avatar_url = avatar_url;
        this.html_url = html_url;
        this.followers_url = followers_url;    
    }
};

export class GithubRepositorium implements IGithubRecord {
    id!: number;
    name: string | undefined;
    full_name: string | undefined;
    description: string | undefined;
    owner: GithubUser | undefined;
    
    constructor(id: number, name: string | undefined, full_name: string | undefined, description: string | undefined, owner: GithubUser | undefined){
        this.id = id;
        this.name = name;
        this.full_name = full_name;
        this.description = description;
        this.owner = owner;    
    }
};