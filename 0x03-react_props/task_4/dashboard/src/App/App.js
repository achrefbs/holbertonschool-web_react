import React from 'react';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList'
import Proptypes from 'prop-types';

function App({ isLoggedIn }) {
  return (
  <React.Fragment>
    <Notifications></Notifications>
    <div className="App">
      <Header></Header>
      {isLoggedIn ? <CourseList></CourseList> : <Login></Login>}
      <Footer></Footer>
    </div>
  </React.Fragment>
  );
}

App.propTypes = {
  isLoggedIn: Proptypes.bool,
}

App.defaultProps = {
  isLoggedIn: false,
}

export default App;
