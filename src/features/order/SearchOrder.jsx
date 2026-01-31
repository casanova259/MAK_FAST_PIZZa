import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function SearchOrder() {

    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();

        const trimmedQuery = query.trim();
        if (!trimmedQuery) return;
        navigate(`/order/${trimmedQuery}`);
        setQuery("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
            className='rounded-full bg-yellow-100 text-sm px-4 py-2 placeholder:text-stone-400 w-28 sm:w-64 focus:w-72 transition-all duration-300'
            placeholder='Search Order #' 
            value={query} 
            onChange={e => setQuery(e.target.value)} 
            />
        </form>
    )
}
