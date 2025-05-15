const getNameFetch = idPost => {
    const URL = "https://jsonplaceholder.typicode.com/"

    fetch(`${URL}posts/${idPost}`)
        .then ((res) => {
            return res.json();
        })
        .then ((post) => {
            fetch(`${URL}users/${post.userId}`)
                .then ((res) => {
                    return res.json();
                })
                .then ((user) => {
                    console.log(`${user.name}, que vive en ${user.address.street}, publicó el post con el título: ${post.title}`);
                })
        })
}

getNameFetch(8);