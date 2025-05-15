const getNameAsync = async (idPost) => {
    try {
        const URL = "https://jsonplaceholder.typicode.com/"

        let rePost = await fetch(`${URL}posts/${idPost}`)
        let post = await rePost.json()
        console.log(`El posteo se titula: ${JSON.stringify(post, null, 2)}`);

        let reUser = await fetch(`${URL}users/${post.userId}`)
        let user = await reUser.json()
        console.log(`El posteo fue publicado por: ${JSON.stringify(user.name)}`);
    }

    catch (error) {
        console.log(error);
    }
}

getNameAsync(20);