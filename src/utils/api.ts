import config from './config';

export interface Post {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  vote_average: string;
  genre_ids: (number | string)[] | [];
  overview: string;
}

interface PostData {
  page: number
  results: Post[]
  total_pages: number
}

interface Genres {
  [key: string | number]: string
}

const api = {
  getPostData: (page: number, query: string): Promise<PostData> => fetch(
    `${config.url}search/movie/?api_key=${config.api_key}&query=${query}&page=${page}`,
  ).then((data) => {
    if (!data.ok) { throw new Error('Error when searching movies'); }
    return data.json();
  }).then((data) => data),

  getGenre: (): Promise<Genres> => fetch(`${config.url}genre/movie/list?api_key=${config.api_key}`, {
  }).then((data) => {
    if (!data.ok) { throw new Error('Error when searching genres'); }
    return data.json();
  })
    .then((data: { genres: Genres[] }) => data.genres.reduce((acc: Genres, item) => {
      acc[item.id] = item.name;
      return acc;
    }, {})),

  getPosts: async (page: number, searchValue: string) => {
    const post = await api.getPostData(page, searchValue);
    const genres = await api.getGenre();
    const newPost = post.results.map((item) => {
      const ids: string[] = [];
      item.genre_ids.slice(0, 2).forEach((id) => {
        ids.push(genres[id]);
      });
      return { ...item, genre_ids: ids };
    });

    return { ...post, results: newPost };
  },

};

export default api;
