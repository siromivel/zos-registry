import React, { PureComponent } from 'react'
import { hot } from 'react-hot-loader'
import { Route, Switch, withRouter } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import { PackageListPage } from '~/components/pages/PackageListPage'
import { NavContainer } from '~/components/layout/Nav'
import { OtherPageContainer } from '~/components/pages/OtherPage'
import { FourOhFourContainer } from '~/components/pages/FourOhFour'

import * as routes from '~/../config/routes'

const App = class _App extends PureComponent {
  render () {
    return (
      <>
        <NavContainer />
        <div>
          <TransitionGroup>
            <CSSTransition
              key={this.props.location.key}
              timeout={{ enter: 700, exit: 200 }}
              classNames="layout"
              appear={true}
            >
              <Switch location={this.props.location}>
                <Route path={routes.OTHER_PAGE} component={OtherPageContainer} />
                <Route path={routes.HOME} component={PackageListPage} />

                <Route component={FourOhFourContainer} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        </div>
      </>
    )
  }
}

export const AppContainer = withRouter(hot(module)(App))
