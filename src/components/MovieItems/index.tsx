import React from 'react';

import MovieItem from '../MovieItem';
import styles from './MovieItems.module.css';
import { Post } from '../../utils/api';
import LoadingItem from '../MovieItem/LoadingItem';

interface MovieItemsProps {
  posts: Post[] | [] | null;

}
const MovieItems: React.FC<MovieItemsProps> = ({ posts }) => (

  <>
    {/* eslint-disable-next-line react/no-array-index-key */}
    {posts === null && Array(20).fill(null).map((el, index) => <LoadingItem key={index} />)}
    {posts?.length === 0 && (<div className={styles.space}><h2>not found</h2></div>)}
    {posts && posts.map((item) => <MovieItem key={item.id} post={item} />)}
  </>
);

export default MovieItems;
