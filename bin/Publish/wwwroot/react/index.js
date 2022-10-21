import React from 'react';
import { render } from 'react-dom';
import Table from './Table';

const App = () => (
    <React.Fragment>
        <h1>React in ASP.NET MVC!</h1>
        <div>Hello React World</div>
        <Table />
    </React.Fragment>
);

render(<App />, document.getElementById('app'));
