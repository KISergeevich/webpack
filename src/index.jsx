import * as $ from 'jquery';
import Post from '@models/Post';
// import json from './assets/json';
// import xml from './assets/data.xml';
// import csv from './assets/data.csv';
import WebpackLogo from '@/assets/webpack-logo.png';
import React from 'react';
import {render} from 'react-dom';
import './styles/styles.css';
import './styles/less.less';
import './babel.js'

const post = new Post('Webpack Post Title', WebpackLogo)

//$('pre').addClass('code').html(post.toString())



// console.log('JSON:', json)
// console.log('XML:', xml)
// console.log('CSV:', csv)