import React from 'react';

function Header(props) {
  return (
    <div>
      <button>
        Cart ({props.itemCount})
      </button>
      {props.candy.map((data, i) => {
        return (
          <ul key={i}>
            <li>
              {data.name} {data.description} {data.price}
            </li>
          </ul>
        );
      })}
    </div>
  );
}

export default Header;
