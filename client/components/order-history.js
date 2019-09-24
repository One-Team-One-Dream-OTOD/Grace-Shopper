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

      // Object.keys(orderList).map(key => {
      //   orderList[key]
      // })
      // let total = 0.0

      return (
        <div className="orderhistory">
          <h1>OrderHistory</h1>
          {Object.keys(orderList).map(key => (
            <div key={key}>
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
                  {(total += book.price)}
                </div>
              ))}
              <div>Total Price: ${total / 100}</div>
              {(total = 0.0)}
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
