function App() {}

var data = [
    { author: 'Captain Lou', text: 'Cindy Lauper is very nice in person!'},
    { author: 'Dr. Steve', text: 'Don\'t be a dangus you dingus!' }
];

App.prototype = {
    initialize: function () {
        var CommentBox = React.createClass({
            render: function () {
                return (
                    <div className="commentBox">
                        <h1>Hello Danny</h1>
                        <CommentList data={ data } />
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
            <CommentBox />,
            document.getElementById('content')
        );
    }
};

window.app = new App();

$(document).ready(function () {
    window.app.initialize();
});

