import React from 'react';

import { HomeOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Button, Flex } from 'antd';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
	const location = useLocation();
	const pathSnippets = location.pathname.split('/').filter((i) => i); //split the pathname into individual parts using /
	console.log(pathSnippets);

	const breadcrumbItems = pathSnippets.map((_, index) => {
		const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
		console.log(url);
		return {
			href: url,
			title: index === 0 ? <HomeOutlined /> : url,
			breadcrumbName: _,
		};
	});

	return (
		<Flex justify='space-between' align='middle'>
			<Breadcrumb
				separator='>'
				items={[
					{
						title: 'Home',
					},
					{
						title: 'Application Center',
						href: '',
					},
					{
						title: 'Application List',
						href: '',
					},
				]}
			/>
			<Button type='link'>Docs</Button>
		</Flex>
	);
}
