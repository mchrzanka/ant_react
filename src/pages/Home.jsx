import React from 'react';
import { Button } from 'antd';

export default function Home() {
	return (
		<div>
			<h1>Home</h1>
			<Button type='primary'>Create New</Button>
			<Button>View Logs</Button>
		</div>
	);
}
