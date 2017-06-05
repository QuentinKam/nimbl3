import { createSelector } from 'reselect';

/**
 * Direct selector to the orders state domain
 */
const selectOrdersDomain = () => (state) => state.get('orders');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Orders
 */

const makeSelectOrders = () => createSelector(
  selectOrdersDomain(),
  (substate) => substate.toJS()
);

export default makeSelectOrders;
export {
  selectOrdersDomain,
};
