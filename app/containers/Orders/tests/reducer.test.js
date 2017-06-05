
import { fromJS } from 'immutable';
import ordersReducer from '../reducer';

describe('ordersReducer', () => {
  it('returns the initial state', () => {
    expect(ordersReducer(undefined, {})).toEqual(fromJS({}));
  });
});
