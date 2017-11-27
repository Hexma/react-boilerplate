import React from 'react'
import { withRouter, Switch, Route } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import './style.less'
import routes from '../routes'
import Header from '../components/header'
import Footer from '../components/footer'
import AppWrapper from './wrapper'

class App extends React.Component {
  render() {
    const { location, app } = this.props

    return (
      <TransitionGroup component="div" className="main">
        <CSSTransition 
          key={location.pathname} 
          timeout={{ enter: 300000, exit: 200000 }} 
          classNames="ex-page">
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
