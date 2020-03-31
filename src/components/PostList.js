import React from 'react';
import { Component } from 'react';
import PostItem from './PostItem';

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: 'Joao Victor Farias',
          avatar:
            'https://scontent.fjdo10-1.fna.fbcdn.net/v/t1.0-9/p960x960/68947146_2291277810941987_6462399958988357632_o.jpg?_nc_cat=101&_nc_sid=85a577&_nc_oc=AQl6a0PDESkntj8NR5PKKICwZ3FbZmN9d-tWwRBbwPPwcpDlcczilkQ9iKITUGcSHPkypMwNxKStKgqsunYCzAVD&_nc_ht=scontent.fjdo10-1.fna&_nc_tp=6&oh=dfd8642744272f4e37cfc88f88cc9d0f&oe=5EAAD45A',
        },
        date: new Date(),
        subject: 'Testando a qualidade dos posts',
        comments: [
          {
            id: 1,
            author: {
              name: 'Nizokashi',
              avatar:
                'https://instagram.fjdo10-1.fna.fbcdn.net/v/t51.2885-19/s150x150/88925642_891212234673887_7390209617587863552_n.jpg?_nc_ht=instagram.fjdo10-1.fna.fbcdn.net&_nc_ohc=uNawzM9OHhAAX8yilyY&oh=77c2c58086ac7f1258e04408dcc31020&oe=5EAB80E5',
            },
            comment: 'Mas é lindo esse meu bb <3',
          },
        ],
      },
    ],
  };

  render() {
    return (
      <div className="post-list">
        {this.state.posts.map(post => (
          <PostItem key={post.id} {...post} />
        ))}
      </div>
    );
  }
}
export default PostList;
