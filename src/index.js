import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Nimbus from './Nimbus';
import ProjectRishi from './ProjectRishi';
import PersonalProjects from './PersonalProjects';
import PersonalPortfolio from './PersonalPortfolio';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import './index.css';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const routing = (
  <div>
    <Router basename={process.env.PUBLIC_URL}>
      <Route render={({ location }) => (
        <TransitionGroup>
          <CSSTransition
            timeout={300}
            classNames='fade'
            key={location.key}
          >
            <Switch location={location}>
              <Route exact path="/" component={App} />
              <Route path="/nimbus" component={Nimbus} />
              <Route path="/prishi" component={ProjectRishi} />
              <Route path="/personal-projects" component={PersonalProjects} />
              <Route path="/personal-portfolio" component={PersonalPortfolio} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      )} />
    </Router>
  </div>
)

ReactDOM.render(routing, document.getElementById('root'));
