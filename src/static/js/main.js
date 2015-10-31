function App() {}

App.prototype = {
    initialize: function () {
        var CommentBox = React.createClass({
            render: function () {
                return (
                    <div className="commentBox">
                        <h1>Hello Danny</h1>
                        <CommentList />
                        <CommentForm />
                    </div>
                );
            }
        });
        var CommentList = React.createClass({
            render: function () {
                return (
                    <div className="commentList">
                        <Comment author="bobby budnick">This is a comment</Comment>
                        <Comment author="donkey lips">This is *another* comment</Comment>
                    </div>
                );
            }
        });
        var Comment = React.createClass({
            render: function () {
                return (
                    <div className="comment">
                        <h2 className="commentAuthor">
                            {this.props.author}
                        </h2>
                        {this.props.children}
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

