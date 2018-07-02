import React from "react";

class Orders extends React.Component {
  render() {
  const { order, totalOrder, deleteItem, title } = this.props; 
    return (
      <div className="orders">
        <h1 className="orders__title">Your order is : </h1>
        {order.map(function(orderItem) {
          return (
            <div key={orderItem.id}>
              {`${orderItem.name}: ${orderItem.value} $`}
              <button 
                id={orderItem.id} 
                onClick={deleteItem}
                value={orderItem.value}
              >
                {title}
              </button>
            </div>
          )
        })}
        <h1>Your total is : </h1>
        <p className="orders__totalOrder">{totalOrder}</p>
      </div>
    );
  }
}

export default Orders;
