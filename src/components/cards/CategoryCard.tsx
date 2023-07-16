import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ categories }) => {
  return (
    <>
        <h1 className={'header bold my-8'}>
            Top Categories
        </h1>
      <div className="myGrid">
        {categories.map((category) => (
          <div
            className="bg-white gridCenter border-2 shadow-xl"
            key={category._id}
          >
              <img
                  style={{maxWidth: '150px', minHeight: '150px'}}
                  className={'rounded-full'}
                  loading="lazy"
                  src={category.image}
                  alt={category.name}
              />
              <p className="slate">{category.description}</p>
              <Link
                to={`category/${category._id}`}
                className="font-bold text-xl bgTeal text-white w-fit p-3">
                Shop {category.name}
              </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default CategoryCard;