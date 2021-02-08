import  axios from 'axios'

// const axios = require('axios');

export const getProducts = async() => {

     return await axios.get('https://jsonplaceholder.typicode.com/todos/1')
                .then(response => response.data )
                .catch(err => console.log(err))
}

// export const getProducts = async() => {
//      let req = await fetch('https://jsonplaceholder.typicode.com/todos/1') as any;
//      let data : any = await req.then((response : any) =>{ return response.json()} );
//      let dataE : any = await data.then((e : any) =>{console.log(e);
//      } );
//      await req.catch((err : any ) => console.log(err));
//      return await   data;
// }