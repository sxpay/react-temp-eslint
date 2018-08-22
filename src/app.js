/*eslint-disable*/
import React from 'react';
import { render } from 'react-dom';
import router from 'routers';
import { BrowserRouter } from 'react-router-dom';
import 'assets/styles/scss/main.scss';

const renders = Component =>
	render(
		<BrowserRouter>
			<Component />
		</BrowserRouter>,
		document.getElementById('root')
	);
renders(router);
