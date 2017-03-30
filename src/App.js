// Инструкция import используется для импорта функций, объектов или примитивов. (реализация - ECMAScript 6)
// подробнее - https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/import
import React, { Component } from 'react'; // переменная React ссылается на весь модуль, Component отдельно - только для удобства. React.Component === Componet
import logo from './logo.svg';
import './App.css'; // 

// class, extends - ECMAScript 6
// подробнее - http://2ality.com/2015/02/es6-classes-final.html
class App extends Component { // oбьявление компонента App - почти тоже самое что: let App = React.CreateClass({...}) Отличия можно посмотреть: https://toddmotto.com/react-create-class-versus-component/
  // что значит такая запись: "render() { .."почему не "render: function() {" (если попробовать посл. - будет ошибка)
  // это тоже часть ECMAScript 6, "shorthand method syntax" - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions
  render() {
    // JSX выражение. Круглые скобки для того, чтобы наверняка вернуть все выражение, и для удобочитаемости. Если выражение в одну строку - они не обязательны
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          Hello world!
        </p>
      </div>
    )
  }
}

// export, default, - ECMAScript 6
// подробнее : https://24ways.org/2014/javascript-modules-the-es6-way/
// http://exploringjs.com/es6/ch_modules.html#sec_importing-exporting-details
export default App;
