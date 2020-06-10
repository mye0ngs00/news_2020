import React, {useState} from 'react';
import axios from 'axios';
import NewsList from './components/NewsList';

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
    <NewsList />
  );
}

export default App;
