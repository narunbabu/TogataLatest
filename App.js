// import * as React from 'react';
import React, {Component} from 'react';
import {Text} from 'react-native';
// import MeasanApp from './MeasanAuthApp_Orig/MeasanApp';
// import TwitNav from './drawer_app/TwitNav';
// import DrawerApp from './drawer_app/DrawerApp';
// import MApp from './drawer_app/MultiDrawer';
// import HybridApp from './drawer_app/Hybrid';
// import AllApp from './drawer_app/AllNav';
// import IconExample from './icon_app/IconApp';

// import FavApp from './drawer_app/FavApp';
// import Myfunc from './Navigation_app/index';
// import Myfunc from './Navigation_app/MyNav';
// import FApp from './MeasanAuthApp_Orig/app/formcomponents';
// import EnterHouseDetails from './MeasanAuthApp_Orig/app/scenes/home/EnterHouseDetails';
// import FormExampleApp from './FormExample/FormExampleApp';

import TApp from './TwitterApp/app/index';
import TogataApp from './TogataApp/App';
// import TCApp from './TwitterCloneApp/App';
// import FNApp from "./FancyDrawerApp/app/index";
import CDApp from './drawer_app/CustomDrawerApp';

import NavSvgApp from './NavSvgApp/App';


// export default  App;
// import { RootNavigator } from './TwitterCloneApp/src/rootNavigator';

export default function App() {
  // const [isLoading, setIsLoadingFromAsyncStorage] = useState(true);
  return <TogataApp />;
  return <TApp />;
  return <NavSvgApp />
  // return <AllApp />
  // return <MeasanApp />;
  // return <CDApp />;
  
}
