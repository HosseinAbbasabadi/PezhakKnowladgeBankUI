import { Injectable } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";

@Injectable()
export class GetRouteValuesService {
  id: any;
  expression: any;

  constructor(private readonly route: ActivatedRoute) {
    
  }

  getId(): number {
    this.route.params.subscribe((params: ParamMap) => {
      this.id = Number.parseInt(params["id"]);
    });
    const id = this.id;
    if (!isNaN(id))
      return id;
    return 0;
  }

  getSearchExpression(): string {
    this.route.params.subscribe((params: ParamMap) => {
      this.expression = params["expression"];
    });
    const expression = this.expression;
    return expression;
  }
}
