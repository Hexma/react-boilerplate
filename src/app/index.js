import React from 'react'
import { withRouter, Switch, Route } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { LOCATION_CHANGE } from 'react-router-redux'
import { connect } from 'react-redux'
import './style.less'
import routes from '../routes'
import Header from '../components/header'
import Footer from '../components/footer'
import AppWrapper from './wrapper'

class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {

    const { location, app, history } = this.props
    const effectName = history.action === 'PUSH' ? 'page-forward' : 'page-back'

    return (
      <TransitionGroup component="div" className={effectName}>
        <CSSTransition 
          key={location.pathname} 
          timeout={{ enter: 300, exit: 200 }} 
          classNames="page-animation">
          <div className="page">
            <AppWrapper pathname={location.pathname}>
              <Header />
              <section className="section">
                <Switch location={location}>
                  {routes.map(route => (
                    <Route exact key={route.path||'notfound'} {...route}/>
                  ))}
                </Switch>
              </section>
              <Footer />
              {app.loading &&
              <div className="mask">
                <img src="http://jxnblk.com/loading/loading-bars.svg"/>
              </div>
              }
              {app.error &&
                <div className="error">request error</div>
              }
            </AppWrapper>
          </div>
        </CSSTransition>
      </TransitionGroup>
    )
  }

}

const mapStateToProps = state => ({ route: state.route, app: state.app })
const connectApp = connect(mapStateToProps)(App)

export default withRouter(connectApp)
