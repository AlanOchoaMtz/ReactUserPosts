import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import PostsScreen from './screens/Posts';
import DetailScreen from './screens/Detail';
import UsersScreen from './screens/Users';

const AppNavigator = createStackNavigator({
  Users: {
    screen: UsersScreen,
  },
  Posts: {
    screen: PostsScreen,
  },
  Detail: {
    screen: DetailScreen,
  }
}, {
  initialRouteName: 'Users',
})

export default createAppContainer(AppNavigator)

