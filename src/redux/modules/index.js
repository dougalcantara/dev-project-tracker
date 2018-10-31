import { combineReducers } from 'redux';
import ui from './ui.module';
import auth from './auth.module';

export default combineReducers({ ui, auth });
