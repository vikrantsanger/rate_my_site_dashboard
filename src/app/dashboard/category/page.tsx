'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { DataTable } from '@/components/data-table';
// import data from '../data.json';

const Categoty = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCategories = async () => {
    try {
      const response = await axios.get(`${process.env.BASE_URL}/categories`, {
        params: { role: 'backend' },
      });
      setData(response.data.categories);
    } catch (error) {
      console.error('Failed to fetch categories:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);
  return (
    <>
      {loading ? (
        <p className="text-center py-10">Loading...</p>
      ) : (
        <DataTable data={data} />
      )}
    </>
  );
};

export default Categoty;
