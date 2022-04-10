import React from 'react';
import { Provider } from 'react-redux';
import MainNavigator from './system/navigation/MainNavigator';
import { LogBox } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { rootReduccer } from './system/redux/reducers/Index';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);

const store = createStore(rootReduccer, applyMiddleware(ReduxThunk));

const App = () => {
  return (
    <Provider store={store}>
          <MainNavigator/>
    </Provider>
  );
};

export default App;
