import axios from "axios";
import {AlertPop} from '../components/alert';

export const getData = async(url) =>{
  let response = await axios.get(url);

  if(response?.data?.status === 'ok'){
    return response.data;
  }
  else AlertPop();
}