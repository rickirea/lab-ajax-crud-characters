const apiCall = axios.create();

class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {

    // return new Promise((resolve, reject) =>{
    //   let url = this.BASE_URL + '/characters';
    //   fetch(url)
    //   .then(res=>{
    //     if(!res.ok) return reject(res.statusText);
    //       return res.json();
    //   })
    //   .then(data=>{
    //     console.log(data);
    //     resolve(data);
    //   });
    // });

    return apiCall.get(this.BASE_URL + "/characters");
    // .then((response) => {
    //   console.log(response.data);
    //   return response.data;
    // })
    // .catch((error) => {
    //   console.log(error);
    // });
  }

  getOneRegister (id) {
    console.log(this.BASE_URL + "/characters/" + id);
    return apiCall.get(this.BASE_URL + "/characters/" + id);
  }

  createOneRegister (characterInfo) {
    return apiCall.post(this.BASE_URL + "/characters", characterInfo);
  }

  updateOneRegister (id, characterInfo ) {
    return apiCall.put(this.BASE_URL + "/characters/" + id, characterInfo);
  }

  deleteOneRegister (id) {
    return apiCall.delete(this.BASE_URL + "/characters/" + id);
  }
}
