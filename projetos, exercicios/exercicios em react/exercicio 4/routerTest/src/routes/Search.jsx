import { useSearchParams, Link } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';

const Search = () => {
    const [searchParams] = useSearchParams();
    const searchTerm = searchParams.get("q") || "";
    const { data: allItems } = useFetch("http://localhost:3000/products");
    

    // Filtro manual (garante que funciona mesmo se o JSON Server falhar)
    
    const filteredItems = allItems?.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <h1>Resultados para "{searchTerm}"</h1>
            <ul className="products">
                {filteredItems && filteredItems.length > 0 ? (
                    filteredItems.map((product) => (
                        <li key={product.id}>
                            <h2>{product.name}</h2>
                            <p>R$: {product.price}</p>
                            <Link to={`/products/${product.id}`}>Detalhes</Link>
                        </li>
                    ))
                ) : (
                    <p>Nenhum produto encontrado.</p>
                )}
            </ul>
        </div>
    );
};

export default Search;

// import { useSearchParams, Link } from "react-router-dom";

// import { useFetch } from "../hooks/useFetch";

// const Search = () => {
//   let [searchParams] = useSearchParams();

//   const url = "http://localhost:3000/products?" + searchParams;

//   const { data: items } = useFetch(url);

//   return (
//     <div>
//       <h1>Resultados disponíveis:</h1>
//       <ul className="products">
//         {items &&
//           items.map((product) => (
//             <li key={product.id}>
//               <h2>{product.name}</h2>
//               <p>R$: {product.price}</p>
//               <Link to={`/products/${product.id}`}>Detalhes</Link>
//             </li>
//           ))}
//       </ul>
//     </div>
//   );
// };

// export default Search;