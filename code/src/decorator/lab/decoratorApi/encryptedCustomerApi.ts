import { CustomerApi } from "./customerApi";

export class EncryptedCustomerApi implements CustomerApi {
  private api: CustomerApi;
  constructor(private _api: CustomerApi) {
    this.api = _api;
  }

  get(): any {
    const customer = this.api.get();
    return {
      name: `encrypted ${customer.name}` ,
      lastName: `encrypted ${customer.lastName}`,
      age: 0
    };
  }
}
