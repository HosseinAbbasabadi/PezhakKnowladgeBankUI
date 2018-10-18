import { isUndefined } from "util";

export class ServiceBase {
    public controller: string = "";
    public ajaxUrl: string = "";

    constructor(ajaxUrl: string, controller: string){
        this.ajaxUrl = ajaxUrl;
        this.controller = controller;
    }

    public pathFactory(action?: string){
        if(isUndefined(action)){
            return this.ajaxUrl + this.controller;
        }
        return this.ajaxUrl + this.controller + "/" + action;
    }
}