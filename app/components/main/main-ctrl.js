class MainCtrl {
    constructor($state) {
        /* @ngInject */
        this._$state = $state;
        this.welcome = 'Welcome to Angular 1.x with ES2015 and Webpack!';
        this.sweet = 'sweet huh?';
    }

    randomButton() {
        let msg = this.welcome;
        if (msg === 'Welcome to Angular 1.x with ES2015 and Webpack!') {
            // try out some new features like tempalte strings
            this.welcome = `It's pretty ${this.sweet}`;
        } else {
            this.welcome = 'Welcome to Angular 1.x with ES2015 and Webpack!';
        }
    }
}

export { MainCtrl };