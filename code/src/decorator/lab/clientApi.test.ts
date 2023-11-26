
import { Customer } from './customer';
import { CustomerApi } from './decoratorApi/customerApi';
import { CustomerWrappedApi } from './decoratorApi/customerWrappedApi';
import { EncryptedCustomerApi } from './decoratorApi/encryptedCustomerApi';

describe('[Decorator - lab] Build Response', () => {
  it('should build response', () => {
    // given
    const api = new CustomerApi();

    // when
    const customer: Customer = api.get();

    // then
    expect(customer.name).toBe('John');
  });

  it('should build response with wrapped json and data', () => {
    // given
    const api = new CustomerApi();
    const wrappedApi  = new CustomerWrappedApi(api)
    const expectCustomer = new Customer('John', 'Doe', 30);
    const expectResponse = {
      status: 'ok',
      data: {
        customer: expectCustomer
      }
    }

    // when
    const result = wrappedApi.get();

    // then
    expect(result).toEqual(expectResponse);
  })

  it('shuold return response with encrypted data', () => {
    // given
    const api = new CustomerApi();
    const encryptedApi  = new EncryptedCustomerApi(api)
    const expectResponse = {
      name: 'encrypted John',
      lastName: 'encrypted Doe',
      age: 0
    }

    // when
    const result = encryptedApi.get();

    // then

    expect(result).toEqual(expectResponse);

  });

  it('should return response with encrypted data and wrapped json', () => {
    // given
    const api = new CustomerApi();
    const encryptedApi  = new EncryptedCustomerApi(api)
    const wrappedApi  = new CustomerWrappedApi(encryptedApi)
    const expectResponse = {
      status: 'ok',
      data: {
        customer: {
          name: 'encrypted John',
          lastName: 'encrypted Doe',
          age: 0
        }
      }
    }

    // when
    const result = wrappedApi.get();

    // then
    expect(result).toEqual(expectResponse);
  });
});
