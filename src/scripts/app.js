import * as helperModule from './my-helper-module';
import * as _ from 'lodash';
import './sharedModule';
import './../styles/app.css';
import './../styles/appStyles.scss';

console.log('Welcome! Greetings from app.js');
console.log(helperModule.greetings);


var arr = [1, 2, 3];
_.each(arr, function (val) {
    console.log('Output from Lodash _.each for Element ' + val);
});
