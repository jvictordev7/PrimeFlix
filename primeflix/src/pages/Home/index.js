import { use, useEffect, useState } from "react";
import api from '../../services/api';

function Home() {

  const [filmes, setFilmes] = useState([]);

useEffect(()=>{

  async function loadFilmes(){
    const response = await api('movie/now_playing', {
      params: {
        api_key: '8a36b0002b7735bf9dd16abdd4091422',
        language: 'pt-BR',
        page : 1,
      }
    });

    console.log(response.data.results);

  }

  loadFilmes();

}, {})

  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}


export default Home;