import React from 'react';
import { Rate } from 'antd';
import styles from './MovieItem.module.css';
import { Post } from '../../utils/api';
import { getDate, shortText, voteCalc } from '../../utils';
import config from '../../utils/config';

interface MovieItemProps {
  post: Post
}

const emptyImg = 'https://cdn.dribbble.com/users/55871/screenshots/2158022/media/8f2a4a2c9126a9f265fb9e1023b1698a.jpg?compress=1&resize=400x300';

class MovieItem extends React.Component<MovieItemProps, any> {
  onRate = () => {
    const { post } = this.props;
    const rate = localStorage.getItem(JSON.stringify(post));
    return rate ? +rate : 0;
  };

  onChangeRate = (rate: number) => {
    const { post } = this.props;
    localStorage.setItem(JSON.stringify(post), rate.toString());
  };

  render() {
    const { post } = this.props;
    const imagePath = post.poster_path === null ? emptyImg : config.imgUrl + post.poster_path;
    return (
      <section className={styles.frame}>
        <img className={styles.frameImage} alt="movie" src={imagePath} />

        <div className={styles.frameInfo}>
          <span
            style={{ borderColor: voteCalc(+post.vote_average) }}
            className={styles.vote}
          >
            {post.vote_average}
          </span>
          <h2 className={styles.frameTitle}>{post.title}</h2>
          <time className={styles.frameDate}>{getDate(post.release_date)}</time>
          <div className={styles.genres}>
            {post.genre_ids.map((item) => <span key={item}>{item}</span>)}
          </div>
          <p className={styles.frameText}>
            {shortText(post.overview)}
          </p>
          <div className={styles.rate}>
            <Rate onChange={this.onChangeRate} allowHalf count={10} defaultValue={this.onRate()} />
          </div>
        </div>
      </section>
    );
  }
}

export default MovieItem;
