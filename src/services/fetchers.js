import axios from 'axios'

export const fetchMessage = async function (){
  const response = await axios
    .get('/db')
    .then((response) => {
        console.log(response);
       // this.res = JSON.stringify(response.data);
    })
    .catch((errors) => {
        console.log(errors);
    });
  return response
}