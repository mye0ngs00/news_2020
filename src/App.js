import React from 'react'
import NewsList from './components/NewsList'
import Categories from './components/Categories'
/*
  const [data, setData] = useState(null);
  const onClick = async () => {
    try{
      const response = await axios.get(
        'https://newsapi.org/v2/top-headlines?country=kr&apiKey=609c7b0693df4df1a31f3569a8b142e3'
      );
      setData(response.data);
    }catch(e){
      console.log(e);
    }
  };
  */
function App() {
  return (
    <>
      <Categories />
      <NewsList />
    </>
  );
}

export default App;
