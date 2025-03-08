import { useEffect, useState } from 'react';
import './favoritos.css';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

function Favorito() {
    const [filmes, setFilmes] = useState([]);

    useEffect(() => {
        const minhaLista = localStorage.getItem('@primeflix');
        setFilmes(JSON.parse(minhaLista) || []);
    }, []);

    const handleRemove = (id) => {
        const updatedFilmes = filmes.filter(filme => filme.id !== id);
        setFilmes(updatedFilmes);
        localStorage.setItem('@primeflix', JSON.stringify(updatedFilmes));
        toast.success('Filme removido com sucesso');
    };

    return (
        <div className='meus-filmes'>
            <h1>Favoritos</h1>

            {filmes.length === 0 ? (
                <p>Você não tem nenhum filme salvo.</p>
            ) : (
                <ul>
                    {filmes.map((item) => {
                        return (
                            <li key={item.id}>
                                <span>{item.title }</span>
                                <div>
                                    <Link to={`/filme/${item.id}`}>Ver detalhes</Link>
                                    <button className='button-remover' onClick={() => handleRemove(item.id)}>Remover</button>
                                </div>
                            </li>
                        )
                    }
                        
                    )}
                </ul>
            )}
        </div>
    );
}

export default Favorito;