async function getComments() {
    let url = 'https://sufianfirstazurefunctionapp.azurewebsites.net/api/httptrigger1';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

async function createCommentsApp() {
    let comments = await getComments();
    const CommentsApp = {
        data() {
            return {
                commentsHeader: "All Comments",
                comments
            };
        }
    };
    Vue.createApp(CommentsApp).mount('body')
}

createCommentsApp();
