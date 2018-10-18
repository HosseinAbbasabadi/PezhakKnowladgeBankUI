export class ServiceBase {
    public controller: string = "";
    public ajaxUrl: string = "";

    constructor(ajaxUrl: string, controller: string){
        this.ajaxUrl = ajaxUrl;
        this.controller = controller;
    }

    public pathFactory(action?: string){
        return this.ajaxUrl + "/" + this.controller + "/" + action;
    }
}