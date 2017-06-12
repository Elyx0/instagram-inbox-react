import { cloneDeep } from 'lodash';
import * as inboxActions from '../actions/inboxActions';

const initialState = {
  user: {},
  accounts: {},
  feeds: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case inboxActions.LOGIN_SUCCESS: {
      const { data: { user, token, feeds } } = action;
      user.token = token;

        // Differentiate accounts / feeds received.
      const newFeeds = {};
      const newAccounts = { [user.id]: {
        username: user.name,
        id: Number(user.id),
        picture: user.avatar,
      } };
      feeds.forEach(({ accounts, items, id }) => {
        const participants = accounts.map(acc => acc.id);
        accounts.forEach((acc) => {
          if (!(acc.id in newAccounts)) newAccounts[acc.id] = acc;
        });
        newFeeds[id] = {
          items,
          participants,
        };
      });

      const newState = { user, accounts: newAccounts, feeds: newFeeds };
      return newState;
    }
    case inboxActions.RECEIVED_FEED: {
      const { data, id } = action;
      const newState = cloneDeep(state);
      newState.feeds[id].items = data.reverse();
      newState.feeds[id].lastFetchTime = +(new Date());
      return newState;
    }
    case inboxActions.LOGOUT: {
      return initialState;
    }
    default:
      return state;
  }
};
