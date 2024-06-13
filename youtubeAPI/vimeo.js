import axios from 'axios';

const API_KEY = '07959886a8609b7183ba123a42238ea2';

export const buscarVideosVimeo = async (query) => {
  try {
    const pesquisa = await axios.get('https://api.vimeo.com/videos', {
      params: {
        query: query,
        per_page: 10,
      },
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    });
    return pesquisa.data.data;
  } catch (erro) {
    console.error('Erro ao buscar vídeos no Vimeo:', erro);
    throw erro;
  }
};
