/*
根据pathname返回分层级的样式类包裹
*/

import React from 'react'

class AppWrapper extends React.Component {
  render() {
    const classNames = this.props.pathname.split('/')

    function genEle(className, children) {
      return React.createElement('div', { className }, children)
    }

    const resultEle = classNames.reverse().reduce((children, className) => {
      return (className && /^\D/.test(className)) ? genEle(className, children) : children
    }, this.props.children)

    return resultEle.length ? <div className="home">{resultEle}</div> : resultEle
  }

}

export default AppWrapper
