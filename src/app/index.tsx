import './index.scss';

import createHistory from 'history/createBrowserHistory';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import App from './containers/App';
import IHotModule from './core/models/hot-module.model';
import configureStore from './core/store';

const history = createHistory();
const store = configureStore(history);

const render = (Component: React.ComponentType) => {
    ReactDOM.render(
        <AppContainer>
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <Component />
                </ConnectedRouter>
            </Provider>
        </AppContainer>,
        document.getElementById('root') as HTMLElement,
    );
};

render(App);

declare const module: IHotModule;

if (module.hot) {
    module.hot.accept('./containers/App', () => render(App));
}
