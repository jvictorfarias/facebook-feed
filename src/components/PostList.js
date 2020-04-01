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
        subject: 'Novo post!',
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
          {
            id: 2,
            author: {
              name: 'Nizokashi',
              avatar:
                'https://instagram.fjdo10-1.fna.fbcdn.net/v/t51.2885-19/s150x150/88925642_891212234673887_7390209617587863552_n.jpg?_nc_ht=instagram.fjdo10-1.fna.fbcdn.net&_nc_ohc=uNawzM9OHhAAX8yilyY&oh=77c2c58086ac7f1258e04408dcc31020&oe=5EAB80E5',
            },
            comment: 'Para tudo e vá assistir Rave cmg',
          },
        ],
      },
      {
        id: 2,
        author: {
          name: 'Jamerson Aguiar',
          avatar:
            'https://scontent.fjdo10-1.fna.fbcdn.net/v/t1.0-9/s960x960/67286140_533507243854558_5369056247846797312_o.jpg?_nc_cat=108&_nc_sid=85a577&_nc_oc=AQlykDM_TfRjp-Yd3C3F_W6-l1RinfM0dwgkQfN4x_VIgdn5oq17lvI7jWojh4wVWISCXIeOwyFbzesLVTkjxG8C&_nc_ht=scontent.fjdo10-1.fna&_nc_tp=7&oh=8cafebb1948f4d89b592c2664c6a83fd&oe=5EA7FF89',
        },
        date: new Date(),
        subject:
          'Galera, help\nTela do notebook não liga mais, só consigo usar com um monitor externo, e o próprio SO (Ubuntu e W10) não reconhecem a tela do notebook, somente a externa\n\
        Alguém sabe o que possa ter acontecido?\n\
        Edit: Valeu galera, vou verificar esse cabo Flat',
        comments: [
          {
            id: 1,
            author: {
              name: 'Jose Henry',
              avatar:
                'https://scontent.fjdo10-1.fna.fbcdn.net/v/t1.0-9/p960x960/90330168_2713795595542192_6557517588920795136_o.jpg?_nc_cat=110&_nc_sid=85a577&_nc_oc=AQnL61qYjxeYvKrfHMRLESsnqn3MJKK13wtNbQz3vWykZ_qKteXkXaRLJiZjtd4T-48guunnmb0IyUR30r_QENYW&_nc_ht=scontent.fjdo10-1.fna&_nc_tp=6&oh=aa5546c0d3b8bbc431309b03106eb663&oe=5EA94161',
            },
            comment:
              'AC - TO COM O MESMO PROBLEMA, quando postei a galera só tirou sarro',
          },
          {
            id: 2,
            author: {
              name: 'Carlos Eduardo',
              avatar:
                'https://scontent.fjdo10-2.fna.fbcdn.net/v/t1.0-1/c23.23.484.484a/32257877_225735311359629_7213913321894838272_n.jpg?_nc_cat=109&_nc_sid=dbb9e7&_nc_oc=AQlr79Yg3IlLFTQ7nkxYX7okPthuD_MQgLfgehOTCASQnVIIlH4ZAIMDhNOBeTITVE8GvGCM-W6TIhaTORhIt6Wn&_nc_ht=scontent.fjdo10-2.fna&oh=588549ccacaab2a3477b0a24b5ad4b9c&oe=5EA9B6E4',
            },
            comment: 'Deve ser o flat que liga a tela na placa mãe',
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
