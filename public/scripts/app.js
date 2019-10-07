'use strict';

console.log('App.js is running!');

// JSX - JavaScript XML

var app = {
    title: 'My Indecision App',
    subtitle: 'An Aweseom React Experience',
    options: []
};

function getOptions(opns) {
    if (opns.length > 0) {
        return React.createElement(
            'p',
            null,
            'Here are your options: ',
            app.options
        );
    }
    return React.createElement(
        'p',
        null,
        'No options'
    );
}

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        'p',
        null,
        app.subtitle
    ),
    React.createElement(
        'p',
        null,
        app.options.length > 0 ? 'Here are your options' : 'No options'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item one'
        ),
        React.createElement(
            'li',
            null,
            'Item two'
        )
    )
);

var user = {
    name: 'Folke Westergren',
    age: 37,
    location: 'Philadelphia'
};

function getLocation(location) {
    if (location) {
        return React.createElement(
            'p',
            null,
            'Location: ',
            location
        );
    }
}

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name ? user.name : 'Anonymous'
    ),
    user.age && user.age >= 18 && React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    getLocation(user.location)
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
