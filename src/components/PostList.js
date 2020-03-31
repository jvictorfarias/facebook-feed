import React from 'react';
import { Component } from 'react';

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: 'Joao Victor Farias',
          avatar: '',
        },
        date: new Date(),
        subject: 'Testando a qualidade dos posts',
        comments: [
          {
            id: 1,
            author: 'Pedrinho',
            comment: 'Tudo ok!',
          },
        ],
      },
    ],
  };
}
export default PostList;
