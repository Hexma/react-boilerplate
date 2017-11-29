import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { compose } from 'redux'
import injectReducer from '../../../utils/injectReducer'
import injectSaga from '../../../utils/injectSaga'
import { eventCreator, actionCreator } from '../../../utils/actionGenerator'
import saga from './saga'
import './style.less'

/* Action Controller */

const actionsConfig = {
  prefix: 'example/foo/',
  actions: ['plus', 'reduce', 'fetch', 'set']
}

export const EVENTS = eventCreator(actionsConfig);
export const ACTIONS = actionCreator(actionsConfig);

/* Reducer */
export const reducer = (state = { count: 0 }, action) => {

  const { type, payload } = action

  switch (type) {
    case EVENTS['plus']:
      return {...state, count: state.count + 1 };
    case EVENTS['set']:
      return {...state, count: payload.count };
    case EVENTS['reduce']:
      return {...state, count: state.count - 1 };
    default:
      return state;
  }
}

/* View */
class Foo extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    return (
      <div className="count-box">
        <p>FOO COUNT : <strong>{this.props.foo.count}</strong></p>
        <p>
          <a href="javascript:;" onClick={this.props.plus}>＋</a>
          <a href="javascript:;" onClick={this.props.reduce}>－</a>
        </p>
        <p>
          <a href="javascript:" onClick={this.props.fetch}>FETCH COUNT</a>
        </p>
      </div>
    )
  }
}

const mapStateToProps = state => ({ foo: state.foo })

/* Recommend */
const mapDispatchToProps = dispatch => ({
  dispatch,
  ...actionCreator({
    ...actionsConfig,
    dispatch
  })
})

/*
const mapDispatchToProps = {...ACTIONS}
*/

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'foo', reducer });

const withSaga = injectSaga({ key: 'foo', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Foo);
