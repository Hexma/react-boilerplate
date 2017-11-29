import React from 'react'
import Loadable from 'react-loadable';
import Loading from '../../components/loading';

export const LazyFoo = Loadable({
  loader: () =>
    import ('./foo'),
  loading: Loading
})

export const LazyBar = Loadable({
  loader: () =>
    import ('./bar'),
  loading: Loading
})
