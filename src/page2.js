import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import $ from 'jquery';

window.React = React;
var clist = {
    name:"comments",
    comments:[{
        index:1,
        comment:"asdfasdf1"
    },
    {
        index:2,
        comment:"asdfasdf2"
    },
    {
        index:3,
        comment:"asdfasdf3"
    },
    {
        index:4,
        comment:"asdfasdf4"
    },
    {
        index:5,
        comment:"asdfasdf5"
    },
    {
        index:6,
        comment:"asdfasdf6"
    },
    {
        index:7,
        comment:"asdfasdf7"
    }
    ]
}

export class CommentList extends Component {
  render() {
    let commentNodes = this.props.data.map(function(comment, index) {
      return (
        <div key={index}>{comment.comment}</div>
      );
    });
    var comment =  this.props.data;
    return (
      <div id="project-comments" className="commentList">
        <ul>
          {commentNodes}
        </ul>
      </div>
    );
  }
};

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      clist: clist,
      offset: 0
    }
  }

//   handlePageClick = (data) => {
//     let selected = data.selected;
//     let offset = Math.ceil(selected * this.props.perPage);

//     this.setState({offset: offset}, () => {
//       this.loadComments();
//     });
//   };

  render() {
    return (
      <div className="commentBox">
        <CommentList data={this.state.clist.comments} />
        <ReactPaginate previousLabel={"previous"}
                       nextLabel={"next"}
                       breakLabel={<a href="">...</a>}
                       breakClassName={"break-me"}
                       pageCount={this.state.pageCount}
                       marginPagesDisplayed={2}
                       pageRangeDisplayed={5}
                       onPageChange={this.handlePageClick}
                       containerClassName={"pagination"}
                       subContainerClassName={"pages pagination"}
                       activeClassName={"active"} />
      </div>
    );
  }
};

ReactDOM.render(
  <App perPage={5} />,
  document.getElementById('react-paginate')
);