import axios from 'axios';
import { fetchJobFeeds, fetchJobFeedsSuccess ,fetchJobFailed} from './actions';

const API_URL = 'https://stagenode.hirist.com/jobfeed/0/cat/12?pageNo=0'; 
export default function getJobFeeds() {
  return (dispatch) => {
    dispatch(fetchJobFeeds());
    axios.get(`${API_URL}`)
      .then((json) => {
        dispatch(fetchJobFeedsSuccess(json.data.jobs));
        return json.data.jobs;
      }).catch((err) => {
        dispatch(fetchJobFailed(err.message));
      })
  }
}
