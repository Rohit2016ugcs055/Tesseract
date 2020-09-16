import axios from 'axios';
import { fetchJobFeeds, fetchJobFeedsSuccess } from './actions';

const API_URL = 'https://stagenode.hirist.com/jobfeed/0/cat/12?pageNo=0'; //http://angel.iimjobs.com/api7/catelist/13

export default function getJobFeeds() {
  return (dispatch) => {
    dispatch(fetchJobFeeds());
    axios.get(`${API_URL}`)
      .then((json) => {
        dispatch(fetchJobFeedsSuccess(json.data.jobs));
        return json.data.jobs;
      }).catch((err) => {
        console.log(err, '=======error====');
      })
  }
}
