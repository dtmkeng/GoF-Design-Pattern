import { CustomerApi } from "./customerApi";

export class CustomerWrappedApi implements CustomerApi {
  private api: CustomerApi;
  constructor(private _api: CustomerApi) {
    this.api = _api;
  }

  get(): any {
    const customer = this.api.get();
    return {
      status: 'ok',
      data: {
        customer: customer
      }
    }
  }
}
