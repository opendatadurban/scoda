import React from 'react';
import { storiesOf } from '@storybook/react';
import "../../../static/dist/css/main.min.css";
import App from './App';
import Hero from './Hero';

storiesOf("Chart", module).add("Bar", ()=> App)

storiesOf("Hero", module).add("Hero", ()=> Hero)