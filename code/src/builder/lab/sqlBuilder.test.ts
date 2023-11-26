import { SQLQueryBuilder } from "./sqlQueryBuilder";

describe('[Builder] - SQL builder', () => {
  it('should build example SQL query', () => {
    const query = new SQLQueryBuilder();
    const expected = 'SELECT * FROM users';

    const sql = query
      .select('*')
      .from('users')
      .build();

    expect(sql).toEqual(expected);
  })
});
