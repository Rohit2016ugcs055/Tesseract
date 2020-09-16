import { FETCH_JOB_FEEDS, FETCH_JOB_FEEDS_SUCCESS } from './actions/action-types';

const initialState = {
  jobFeed:[], //was string
  isJobLoading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_JOB_FEEDS:
      return {
        ...state,
        isJobLoading: true,
      }

    case FETCH_JOB_FEEDS_SUCCESS:
      return {
        ...state,
        isJobLoading: false,
       // jobFeed: [ ...state.jobFeed, ...action.payload.jobFeed ],
       jobFeed:action.payload.jobFeed
      }

    default:
      return state;
  }
}
