import React from 'react';
import Fav from './components/restaurant/fav.jsx';

class ViewComponent extends React.Component {
    constructor() {
        super();
    }
    render() {
      return (
            <div>
              <Fav detail='update'/>
            </div>
        );
    }

}

module.exports = ViewComponent;
