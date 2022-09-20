import React from 'react';
import './App.css';
import { Space } from 'antd';
import AppContext from './context';
import MovieItems from './components/MovieItems';
import api, { Post } from './utils/api';
import Search from './components/Search';
import Pagination from './components/Pagination';
import { errorAlert } from './utils';
import Tabs from './components/Tabs';

interface AppState {
  posts: [] | Post[] | null;
  currentPage: number;
  allPages: number;
  searchValue: string;
  postsLoading: boolean;
}

class App extends React.Component<any, AppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      posts: null,
      currentPage: 1,
      allPages: 0,
      postsLoading: false,
      searchValue: 'return',
    };
  }

  componentDidMount() {
    window.onoffline = () => {
      errorAlert('no internet connection');
    };

    this.fetchData();
  }

  setPostsState = (posts: AppState['posts']) => {
    this.setState({ posts, allPages: posts?.length || 0 });
  };

  fetchData = async (page?: number, search?: string) => {
    try {
      const { currentPage, searchValue } = this.state;

      this.setState({ postsLoading: true, posts: null });

      const newSearch = search || searchValue;
      const post = await api.getPosts(page || currentPage, newSearch);
      this.setState({
        posts: post.results,
        currentPage: post.page,
        allPages: post.total_pages,
        searchValue: newSearch,
      });

      this.setState({ postsLoading: false });
    } catch (e) {
      if (e instanceof Error) {
        errorAlert(e.message);
      }
    }
  };

  render() {
    const {
      posts, currentPage, allPages, searchValue, postsLoading,
    } = this.state;
    return (
      <div className="App">
        <Space />

        <AppContext.Provider
          value={{
            currentPage,
            postsLoading,
            allPages,
            fetchData: this.fetchData,
            searchValue,
            setPostsState: this.setPostsState,
          }}
        >
          <div className="container">
            <div className="fullWidth">
              <Tabs />
            </div>
            <div className="fullWidth search">
              <Search />
            </div>
            <MovieItems posts={posts} />
            <div className="fullWidth pagination">
              <Pagination />
            </div>
          </div>
        </AppContext.Provider>
      </div>
    );
  }
}

export default App;
