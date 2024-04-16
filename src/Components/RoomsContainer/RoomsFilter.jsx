import React from "react";
import { useContext } from "react";

// import context
import { RoomContext } from "../../Context/Context";

// import components
import Title from "../Title/Title";

// get all unique values
const getUnique = (items, value) => {
  return [...new Set(items.map((item) => item[value]))];
};

export default function RoomFilter({ rooms }) {
  const context = useContext(RoomContext);

  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets,
  } = context;

  // get unique types
  let types = getUnique(rooms, "type");
  // add all
  types = ["all", ...types];
  // map to jsx
  types = types.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });

  // room guests filtering functionality
  let people = getUnique(rooms, "capacity");
  people = people.map((item, index) => {
    return (
      <option key={index} value={item}>
        {item}
      </option>
    );
  });

  return (
    <section className="filter-container">
      <Title title="search rooms" />
  
      <div className="form-container" style={{ paddingLeft: '10px', maxWidth: 'calc(100% - 20px)' }}>
        <form className="filter-form" style={{ display: 'flex', flexDirection: 'column' }}>
          {/* select type start */}
          <div className="form-group" >
            <label htmlFor="type">rooms type</label>
            <select
              name="type"
              id="type"
              value={type}
              className="form-control"
              onChange={handleChange}
              style={{ width: '100%' }}
            >
              {types}
            </select>
          </div>
          {/* select type end */}
  
          {/* guests type start */}
          <div className="form-group">
            <label htmlFor="capacity">guests</label>
            <select
              name="capacity"
              id="capacity"
              value={capacity}
              className="form-control"
              onChange={handleChange}
              style={{ width: '100%' }}
            >
              {people}
            </select>
          </div>
          {/* guests type end */}
  
          {/* room price start */}
          <div className="form-group" >
            <label htmlFor="price">room price ${price}</label>
            <input
              type="range"
              name="price"
              min={minPrice}
              max={maxPrice}
              id="price"
              value={price}
              onChange={handleChange}
              className="form-control"
              style={{ width: '100%' }}
            />
          </div>
          {/* room price end */}
  
          {/* size start */}
          <div className="form-group" >
            <label htmlFor="size">room size</label>
            <div className="size-inputs" style={{ display: 'flex' }}>
              <input
                type="number"
                name="minSize"
                id="minSize"
                value={minSize}
                onChange={handleChange}
                className="size-input"
                style={{ flex: '1', marginRight: '5px' }}
              />
              <input
                type="number"
                name="maxSize"
                id="maxSize"
                value={maxSize}
                onChange={handleChange}
                className="size-input"
                style={{ flex: '1', marginLeft: '5px' }}
              />
            </div>
          </div>
          {/* size end */}
  
          {/* extras start */}
          <div className="form-group">
            {/* breakfast checked */}
            <div className="single-extra" style={{ marginBottom: '5px' }}>
              <input
                type="checkbox"
                name="breakfast"
                id="breakfast"
                checked={breakfast}
                onChange={handleChange}
              />
              <label htmlFor="breakfast">breakfast</label>
            </div>
  
            {/* pets checked */}
            <div className="single-extra">
              <input
                type="checkbox"
                name="pets"
                id="pets"
                checked={pets}
                onChange={handleChange}
              />
              <label htmlFor="pets">pets</label>
            </div>
          </div>
          {/* extras end */}
        </form>
      </div>
    </section>
  );
  
  
  
  
}
