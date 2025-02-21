import { useEffect, useState } from 'react';
import './favoritos.css';

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
    };

    return (
        <div className='meus-filmes'>
            <h1>Favoritos</h1>

            {filmes.length === 0 ? (
                <p>Você não tem nenhum filme salvo.</p>
            ) : (
                <ul>
                    {filmes.map((filme) => (
                        <li key={filme.id}>
                            <span>{filme.nome}</span>
                            <div>
                                
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Favorito;