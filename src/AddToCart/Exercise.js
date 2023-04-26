import { useState } from "react";
import "./styles.css";

//Attempt 1:

// const itemList = [
//   {
//     itemId: 1,
//     itemName: "Bread",
//     itemPrice: 20
//   },
//   {
//     itemId: 2,
//     itemName: "Butter",
//     itemPrice: 32
//   },
//   {
//     itemId: 3,
//     itemName: "Milk",
//     itemPrice: 21
//   },
//   {
//     itemId: 4,
//     itemName: "Eggs",
//     itemPrice: 45
//   },
//   {
//     itemId: 5,
//     itemName: "Maida",
//     itemPrice: 18
//   }
// ];

// // function List({ id, name, price, qty, setCartItem }) {
// function List({ item, setCartItem, cartItem }) {
//   const [isadded, setIsadded] = useState(false);

//   return (
//     <li className="productInfo">
//       <div>
//         {item.itemName}: Rs.
//         <span>
//           <strong>{item.itemPrice}</strong>
//         </span>
//       </div>
//       <AddToCart
//         item={item}
//         setCartItem={setCartItem}
//         isadded={isadded}
//         setIsadded={setIsadded}
//         cartItem={cartItem}
//       />
//     </li>
//   );
// }

// function TotalCartValue({ cartItem }) {
//   let total = 0;
//   return (
//     <strong>
//       {cartItem.length
//         ? cartItem.map((item, i) => {
//             console.log(total, i, item.itemPrice);
//             if (i === cartItem.length - 1) {
//               total = total + item.itemPrice * item.itemQty;
//               return total;
//             } else {
//               total = total + item.itemPrice * item.itemQty;
//             }
//           })
//         : 0}
//     </strong>
//   );
// }

// function Cart({ cartItem }) {
//   return (
//     <div>
//       <h1>Your Cart</h1>
//       <div>
//         <span>
//           Total Cart Price: <TotalCartValue cartItem={cartItem} />
//         </span>
//       </div>
//       <ul>
//         {cartItem.map((item) => {
//           return (
//             <li className="productInfo" key={item.itemId}>
//               <div>
//                 {item.itemName}: Rs.
//                 <span>
//                   <strong>{item.itemPrice}</strong>
//                 </span>
//               </div>
//               <div>Added Qty: {item.itemQty}</div>
//             </li>
//           );
//         })}
//       </ul>
//     </div>
//   );
// }

// function AddToCart({ item, setCartItem, isadded, setIsadded, cartItem }) {
//   return (
//     <button
//       onClick={() => {
//         if (isadded) {
//           let newCartItems = cartItem.map((citem) => {
//             if (citem.itemId === item.itemId) {
//               return {
//                 itemId: item.itemId,
//                 itemName: citem.itemName,
//                 itemPrice: citem.itemPrice,
//                 itemQty: citem.itemQty + 1
//               };
//             } else {
//               return citem;
//             }
//           });
//           setCartItem(newCartItems);
//         } else {
//           setCartItem((cartItem) => [
//             ...cartItem,
//             {
//               itemId: item.itemId,
//               itemName: item.itemName,
//               itemPrice: item.itemPrice,
//               itemQty: 1
//             }
//           ]);
//           setIsadded(true);
//         }
//       }}
//     >
//       Add to Cart
//     </button>
//   );
// }

// export function Exercise() {
//   const [cartItem, setCartItem] = useState([]);
//   return (
//     <div className="Exercise7">
//       <h1>Products</h1>
//       <ul>
//         {itemList.map((item) => {
//           return (
//             <List
//               key={item.itemId}
//               item={item}
//               setCartItem={setCartItem}
//               cartItem={cartItem}
//             />
//           );
//         })}
//       </ul>
//       <hr />
//       <Cart cartItem={cartItem} />
//     </div>
//   );
// }

//Attempt 2:

//database
const itemsList = [
  { id: "id1001", title: "Maggie", price: 12, qtyAvl: 0, qtyCart: 0 },
  { id: "id1002", title: "Butter", price: 30, qtyAvl: 10, qtyCart: 0 },
  { id: "id1003", title: "Sugar", price: 20, qtyAvl: 10, qtyCart: 0 },
  { id: "id1004", title: "Eggs", price: 40, qtyAvl: 10, qtyCart: 0 }
];

function ShopItem({
  id,
  title,
  index,
  price,
  cartItems,
  setCartItems,
  qtyAvl,
  qtyCart
}) {
  const [isAdded, setAddedFlag] = useState(false);

  function addToCart({ item }) {
    if (isAdded) {
      setCartItems({
        ...cartItems,
        [id]: {
          title,
          price,
          qtyAvl: qtyAvl - 1,
          qtyCart: cartItems[id].qtyCart + 1
        }
      });
    } else {
      setCartItems({
        ...cartItems,
        [id]: {
          title,
          price,
          qtyAvl: qtyAvl - 1,
          qtyCart: 1
        }
      });
      setAddedFlag(true);
    }
    itemsList[index].qtyAvl = itemsList[index].qtyAvl - 1;
  }
  return (
    <li key={id}>
      <div>
        {title} : Rs.{price}
      </div>
      <button
        onClick={(e) => addToCart({ id, title, price, qtyAvl, qtyCart })}
        disabled={qtyAvl ? false : true}
      >
        Add to Cart
      </button>
    </li>
  );
}

function Cart({ cartItems }) {
  console.log(cartItems);
  function cartItemsPrint() {
    const ids = Object.keys(cartItems);
    return ids.map((id) => {
      return (
        <li key={id}>
          <div>
            {cartItems[id].title}:{cartItems[id].price}
          </div>
          <div>Qty Added:{cartItems[id].qtyCart}</div>
        </li>
      );
    });
  }
  return (
    <div style={{ backgroundColor: "lightblue" }}>
      <h1>Cart</h1>
      <ul>{cartItemsPrint()}</ul>
    </div>
  );
}
//{
//   itemid: {
//     title: itemTitle,
//   }
// }
function Shop() {
  const [cartItems, setCartItems] = useState({});
  return (
    <div>
      <div style={{ backgroundColor: "pink" }}>
        <h1>Shop Now</h1>
        <ul>
          {itemsList.map(({ id, title, price, qtyAvl, qtyCart }, index) => {
            return (
              <ShopItem
                key={id}
                id={id}
                index={index}
                title={title}
                price={price}
                cartItems={cartItems}
                setCartItems={setCartItems}
                qtyAvl={qtyAvl}
                qtyCart={qtyCart}
              />
            );
          })}
        </ul>
      </div>
      <Cart cartItems={cartItems} />
    </div>
  );
}

export function Exercise() {
  return (
    <div className="Exercise7">
      <Shop />
    </div>
  );
}
