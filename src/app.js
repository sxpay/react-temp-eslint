/*eslint-disable*/
import React from 'react';
import { render } from 'react-dom';
import router from 'routers';
import { BrowserRouter } from 'react-router-dom';
import 'assets/styles/scss/main.scss';
import fetchinit from "utils/FetchInit"
import fastClick from 'fastclick';

fastClick.attach(document.body);
fetchinit();
const renders = Component =>
	render(
		<BrowserRouter>
			<Component />
		</BrowserRouter>,
		document.getElementById('root')
	);
renders(router);
