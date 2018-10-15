export class ServiceBase {
    public controller: string = "";

    constructor(controller: string){
        this.controller = controller;
    }

    public pathFactory(action?: string){
        return this.controller + "/" + action;
      }
}