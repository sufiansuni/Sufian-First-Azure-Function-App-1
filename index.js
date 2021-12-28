async function getComments() {
    let url = 'https://sufianfirstazurefunctionapp.azurewebsites.net/api/httptrigger1';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

async function renderComments() {
    let comments = await getComments();
    let html = '';
    comments.forEach(comment => {
        let htmlSegment =   `<div class="comment list-group-item">
                                <h4>${comment.name}</h4>
                                <div class="email">
                                    <a href="mailto:${comment.email}">${comment.email}</a>
                                </div>
                                <p>${comment.body}</p>
                            </div>`;

        html += htmlSegment;
    });

    let container = document.querySelector('#comments-container');
    container.innerHTML = html;
}

renderComments();
