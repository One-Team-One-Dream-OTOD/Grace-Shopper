import React from 'react'
import {connect} from 'react-redux'
import {getOrders} from '../store/history'

class History extends React.Component {
  componentDidMount() {
    this.props.getOrders()
  }

  render() {
    console.log(this.props.history)
    console.log(this.props.history.length)
    if (this.props.history.length === 0) {
      return <div className="orderhistory">No Previous Orders</div>
    } else {
      let orderList = {}

      this.props.history.forEach(element => {
        if (orderList[element.orderId]) {
          orderList[element.orderId].push(element)
        } else {
          orderList[element.orderId] = [element]
        }
      })

      let totals = {}
      Object.keys(orderList).map(key => {
        let total = orderList[key].reduce((acc, cv) => acc + cv.price, 0)
        totals[key] = total
      })

      return (
        <div className="orderhistory">
          <h1 className="orders">Order History</h1>
          {Object.keys(orderList).map(key => (
            <div key={key} className="single-order">
              <h3>Order #{key}</h3>
              {orderList[key].map(book => (
                <div key={book.price} className="order-items">
                  <img
                    src={book.book.imageUrl}
                    className="order-history-bookImg"
                  />
                  <div>{book.book.name}</div>
                  <div>{book.quantity}</div>
                  <div>${book.price / 100}</div>
                </div>
              ))}
              <div>Total Price: ${totals[key] / 100}</div>
            </div>
          ))}
        </div>
      )
    }
  }
}

const mapStateToProps = state => {
  return {
    history: state.history
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getOrders: () => dispatch(getOrders())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(History)
