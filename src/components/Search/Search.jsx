import axios from "axios";
import { useEffect, useState } from "react";
import useDebounce from "../../hooks/useDebounce";
import css from './search.module.css'


const Search = () => {
  const [value, setValue] = useState('');
  const [results, setResults]= useState([]);
  const search = useDebounce(value, 500);

  useEffect (() => {
    const handleSearch = async() => {
      const { data } = await axios.get('http://localhost:3001/products',{
        params: {
          q: search
        },
      });
      setResults(data);
    };
    if(search.trim() !== ""){
      handleSearch();
    }
  }, [search]);

  return (
    <div className={css.search}>
      <input 
        className={css.input}
        type="search" 
        placeholder='  Search...'
        onChange={(e) => setValue(e.target.value)}
      />
      {!!results.length && (
        <div className={css.list}>
          {results.map((product) =>(
            <div key={product.id}>{product.title}</div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;