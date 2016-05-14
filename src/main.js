import FastClick from 'fastclick';
import 'vux/vux.css';
import './styles/style.css';
FastClick.attach(document.body);

console.log(location.pathname);
switch (location.pathname) {
  case '/':
    require.ensure([], (require) => {
      require('./routes/Home');
    });
    break;
  case '/reward':
    require.ensure([], (require) => {
      require('./routes/Reward');
    });
    break;
  default:
    break;
}
