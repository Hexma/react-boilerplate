import React from 'react'
import Loadable from 'react-loadable';
import Loading from '../../components/loading';

export class LazyBar extends React.Component {

  render() {
    const LoadBar = Loadable({
      loader: () =>
        import ('./bar'),
      loading: Loading
    })

    return <LoadBar />
  }
}

export class LazyFoo extends React.Component {
  render() {
    const LoadFoo = Loadable({
      loader: () =>
        import ('./foo'),
      loading: Loading
    })
    return <LoadFoo />
  }
}
