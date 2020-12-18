import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import AllPosts from './pages/AllPosts';
import OnePosts from './pages/OnePosts';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route component={AllPosts} path='/' exact/>
        <Route component={OnePosts} path='/:slug' exact/>
      </div>
    </BrowserRouter>
  );
}

export default App;
