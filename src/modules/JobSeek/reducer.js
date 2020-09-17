import { FETCH_JOB_FEEDS, FETCH_JOB_FEEDS_SUCCESS,FETCH_JOB_FAILED } from './actions/action-types';

const initialState = {
  jobFeed:[], //was string
  isJobLoading: false,
  error:''
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
       jobFeed:action.payload.jobFeed,
       error:''
      }
    case FETCH_JOB_FAILED:
      return {
        ...state,
        isJobLoading: false,
       // jobFeed: [ ...state.jobFeed, ...action.payload.jobFeed ],
       jobFeed:[],
       error:action.payload
      }
    default:
      return state;
  }
}
