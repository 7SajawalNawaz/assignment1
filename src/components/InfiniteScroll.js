import React, { useState, useEffect } from 'react';

const InfiniteScroll = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const fetchMoreItems = async () => {
    setLoading(true);
    // Simulate fetching more items from an API
    const response = await fetch(`your-api-endpoint?page=${page}`);
    const newItems = await response.json();
    setItems(prevItems => [...prevItems, ...newItems]);
    setPage(prevPage => prevPage + 1);
    setLoading(false);
  };

  useEffect(() => {
    fetchMoreItems();
  }, []); // Fetch initial items

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 100
      ) {
        fetchMoreItems();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [page]); // Fetch more items when page changes

  return (
    <div>
      {items.map((item, index) => (
        <div key={index} className="item">
          {item.name}
        </div>
      ))}
      {loading && <p>Loading...</p>}
    </div>
  );
};

export default InfiniteScroll;