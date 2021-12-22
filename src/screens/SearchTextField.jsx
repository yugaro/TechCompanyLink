import React, { useState, useEffect } from 'react';
import ListItem from '../components/ListItem';

const products = [
  'apple',
  'banana',
  'orange',
  'cheese cake',
  'banana cake',
  'apple juice',
  'orange juice',
];

export default function SearchTextField() {
  const [keyword, setKeyword] = useState('');
  const [showLists, setShowLists] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    if (keyword === '') {
      setFilteredProducts(products);
    }

    const searchKeywords = keyword
      .trim()
      .toLowerCase()
      .match(/[^\s]+/g);

    if (searchKeywords === null) {
      setFilteredProducts(products);
    }

    // eslint-disable-next-line max-len
    const result = products.filter((product) => searchKeywords.every((kw) => product.toLowerCase().indexOf(kw) !== -1));

    setFilteredProducts(result.length ? result : ['No Item Found']);
  }, [keyword]);

  return (
    <div>
      <form>
        <input
          label="enter keywords"
          onChange={(e) => setKeyword(e.target.value)}
          onClick={() => setShowLists(true)}
        />
      </form>
      <div>{keyword}</div>
      {
        showLists
        && filteredProducts.map((text) => <ListItem text={text} />)
      }
    </div>

  );
}
