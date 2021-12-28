const CommentsApp = {
    mounted() {
        this.getComments();
    },
    data() {
        return {
            commentsHeader: "Loading Comments...",
            comments: []
        };
    },
    methods: {
        async getComments() {
            let url = 'https://sufianfirstazurefunctionapp.azurewebsites.net/api/httptrigger1';
            try {
                let res = await fetch(url);
                this.comments = await res.json();
                this.commentsHeader = "All Comments";
            } catch (error) {
                console.log(error);
            }
        }
    },
};

Vue.createApp(CommentsApp).mount('#page-content');
