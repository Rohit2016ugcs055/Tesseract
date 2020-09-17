import { FETCH_JOB_FEEDS, FETCH_JOB_FEEDS_SUCCESS,FETCH_JOB_FAILED } from './action-types';

export const fetchJobFeeds = () => ({
  type: FETCH_JOB_FEEDS,
});

export const fetchJobFeedsSuccess = jobFeed => ({
  type: FETCH_JOB_FEEDS_SUCCESS,
  payload: {
    jobFeed,
  }
});

export const fetchJobFailed=error=>({
  type:FETCH_JOB_FAILED,
  payload:error
});
