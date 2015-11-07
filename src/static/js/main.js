function App() {}

var data = [
    { author: 'Captain Lou', text: 'Cindy Lauper is very nice in person!'},
    { author: 'Dr. Steve', text: 'Don\'t be a dangus you dingus!' }
];

App.prototype = {
    initialize: function () {
        var CommentBox = React.createClass({
            getInitialState: function () {
                return { data: [{ author: 'Stinky Stephan', text: 'who broke the microwave oven?!?' }] };
            },
            loadComments: function () {
                var commentBox = this;

                $.ajax({
                    url: this.props.url,
                    method: 'GET',
                    dataType: 'json',
                    success: function (data) {
                        commentBox.setState({ data: data });
                    },
                    error: function (data) {
                        throw new Error(data);
                    }
                });
            },
            componentDidMount: function () {
                this.loadComments();
                window.setInterval(this.loadComments, this.props.interval);
            },
            render: function () {
                return (
                    <div className="commentBox">
                        <h1>Hello Danny</h1>
                        <CommentList data={ this.state.data } />
                        <CommentForm />
                    </div>
                );
            }
        });
        var CommentList = React.createClass({
            render: function () {
                var commentNodes = this.props.data.map(function (comment, i) {
                    return (
                        <Comment author={ comment.author } key={ i }>
                            { comment.text }
                        </Comment>
                    );
                });
                return (
                    <div className="commentList">
                        { commentNodes }
                    </div>
                );
            }
        });
        var Comment = React.createClass({
            rawMarkup: function (text) {
                var rawMarkup = marked(text, { sanitize: true });

                return { __html: rawMarkup };
            },
            render: function () {
                return (
                    <div className="comment">
                        <h2 className="commentAuthor">
                            { this.props.author }
                        </h2>
                        <span dangerouslySetInnerHTML={ this.rawMarkup(this.props.children.toString()) } />
                    </div>
                );
            }
        });
        var CommentForm = React.createClass({
            render: function () {
                return (
                    <div className="commentForm">
                        Hello Bobby
                    </div>
                );
            }
        });
        ReactDOM.render(
            <CommentBox url="./js/dummy-data.json" interval={2000} />,
            document.getElementById('content')
        );
    }
};

window.app = new App();

$(document).ready(function () {
    window.app.initialize();
});

