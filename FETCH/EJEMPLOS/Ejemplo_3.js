const axios = require('axios');

const getNameAxios = async (idPost) => {
    try {
        const URL = "https://jsonplaceholder.typicode.com/"
        let rePost = await axios(`${URL}posts/${idPost}`)
        console.log(rePost.data);

        let reUser = await axios(`${URL}users/${rePost.data.userId}`)
        console.log(`El posteo fue publicado por ${reUser.data.name}, el cual vive en ${reUser.data.address.city}`);
    }
    
    catch (error){
        console.log(error);
    }
}

getNameAxios(18);