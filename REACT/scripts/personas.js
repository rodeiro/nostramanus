/**
 * This file provided by Facebook is for non-commercial testing and evaluation purposes only.
 * Facebook reserves all rights not expressly granted.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
 * ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

var Comment = React.createClass({
  render: function() {
    var rawMarkup = marked(this.props.children.toString(), {sanitize: true});
    return (
      <div className="comment">
      
       <h3 className="commentAuthor">
          {this.props.author} {this.props.apellido1} {this.props.apellido2}
          
        </h3>
        <span>
          {this.props.dni} {this.props.fechaNacimiento} {this.props.password} {this.props.children}
        </span>
       

      </div>
    );
  }
});

//        <span dangerouslySetInnerHTML={{__html: rawMarkup}} />


var CommentBox = React.createClass({
  loadCommentsFromServer: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  handleCommentSubmit: function(comment) {
    var comments = this.state.data;
    comments.push(comment);
    this.setState({data: comments}, function() {
      // `setState` accepts a callback. To avoid (improbable) race condition,
      // `we'll send the ajax request right after we optimistically set the new
      // `state.
      $.ajax({
        url: this.props.url,
        dataType: 'json',
        type: 'POST',
        data: comment,
        success: function(data) {
          this.setState({data: data});
        }.bind(this),
        error: function(xhr, status, err) {
          console.error(this.props.url, status, err.toString());
        }.bind(this)
      });
    });
  },
  getInitialState: function() {
    return {data: []};
  },
  componentDidMount: function() {
    this.loadCommentsFromServer();
    setInterval(this.loadCommentsFromServer, this.props.pollInterval);
  },
  render: function() {
    return (
      <div className="commentBox">
        <h1>Personas</h1>

        <CommentList data={this.state.data} />
        
        <h2>INSERTAR NUEVO</h2>
        <CommentForm onCommentSubmit={this.handleCommentSubmit} />
      </div>
    );
  }
});

var CommentList = React.createClass({
  render: function() {
    var commentNodes = this.props.data.map(function(comment, index) {
      return (
        // `key` is a React-specific concept and is not mandatory for the
        // purpose of this tutorial. if you're curious, see more here:
        // http://facebook.github.io/react/docs/multiple-components.html#dynamic-children
        <Comment author={comment.author} apellido1 = {comment.apellido1} apellido2 = {comment.apellido2}
         dni={comment.dni} password = {comment.password} fechaNacimiento = {comment.fechaNacimiento} key={index} >
        {comment.email} 
        </Comment>
      );
    });
    return (
      <div className="commentList">
        {commentNodes}
      </div>
    );
  }
});

var CommentForm = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    var author = React.findDOMNode(this.refs.author).value.trim();
    var apellido1 = React.findDOMNode(this.refs.apellido1).value.trim();
    var apellido2 = React.findDOMNode(this.refs.apellido2).value.trim();
    var dni = React.findDOMNode(this.refs.dni).value.trim();
    var password = React.findDOMNode(this.refs.password).value.trim();
    var fechaNacimiento = React.findDOMNode(this.refs.fechaNacimiento).value.trim();
    var email = React.findDOMNode(this.refs.email).value.trim();
    /*if (!text || !author) {
      return;
    }*/
    this.props.onCommentSubmit({author: author, apellido1: apellido1, apellido2: apellido2, dni: dni, 
      password: password, fechaNacimiento: fechaNacimiento, email: email});
    React.findDOMNode(this.refs.author).value = '';
    React.findDOMNode(this.refs.apellido1).value = '';
    React.findDOMNode(this.refs.apellido2).value  = '';
    React.findDOMNode(this.refs.dni).value  = '';
    React.findDOMNode(this.refs.password).value = '';
    React.findDOMNode(this.refs.fechaNacimiento).value = '';
    React.findDOMNode(this.refs.email).value = '';
  },
  render: function() {
    return (

      <form className="commentForm" onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Nombre" ref="author" />
        <input type="text" placeholder="Primer Apellido" ref="apellido1" />
        <input type="text" placeholder="Segundo Apellido" ref="apellido2" />
        <input type="text" placeholder="DNI" ref="dni" />
        <input type="password" placeholder="Contraseña" ref="password" />
        <input type="date" placeholder="Fecha de Nacimiento" ref="fechaNacimiento"/>
        <input type="text" placeholder="Email" ref="email"/>

        <input type="submit" value="Post" />
      </form>
    );
  }
});
//comments.json
//192.168.1.34:3000/api/personas/
React.render(
  <CommentBox url="comments.json" pollInterval={20000} />,
  document.getElementById('content')
);
