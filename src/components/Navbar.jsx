import React, { useState } from 'react';
import { Link } from 'react-router-dom';

//icons
import {
	AppstoreOutlined,
	MailOutlined,
	SettingOutlined,
	ShopFilled,
} from '@ant-design/icons';

//components
import { Menu } from 'antd';

//create a menu object that takes params
function getItem(label, key, icon, children, type) {
	return {
		key,
		icon,
		children,
		label,
		type,
	};
}

//array that represents all of the menu items. Each item is created using the getItem function.
const items = [
	getItem('Dashboard', 'sub1', <MailOutlined />),
	getItem('Earn', 'sub2', <AppstoreOutlined />, [
		getItem('Surveys', '1'),
		getItem('Quizzes', '2'),
		getItem('Events', '3'),
	]),
	getItem('Shop', 'sub3', <ShopFilled />, [
		getItem('Items', '4'),
		getItem('Raffles', '5'),
		getItem('Offers', '6'),
		getItem('Sign-in', '7'),
		getItem('Barcodes', '8'),
		getItem('Transactions', '9'),
	]),
	getItem('Promotions', 'sub4', <SettingOutlined />, [
		getItem('Vouchers', '10'),
		getItem('Promos', '11'),
	]),
	getItem('Announcements', 'sub5', <SettingOutlined />),
	getItem('Templates', 'sub6', <SettingOutlined />),
	getItem('Community', 'sub7', <SettingOutlined />),
	getItem('Support', 'sub8', <SettingOutlined />),
	getItem('Settings', 'sub9', <SettingOutlined />),
	getItem('Logout', 'sub10', <SettingOutlined />),
];

const rootSubmenuKeys = ['sub1', 'sub2', 'sub3'];

export default function Navbar() {
	//keeps track of the last opened menu item. Starts with sub1 opened, which also helps the code further on not mess up (for example if i was to put null)
	const [openKeys, setOpenKeys] = useState(['sub1']);

	//triggered when submenu is open or closed. keys array isn't passed by me but is part of the event data when the submenus are interacted with.
	const onOpenChange = (keys) => {
		//uses the find method to iterate over the keys array (contains keys of the submenus that are currently opened). It finds the key that is not present in the current 'openKeys' state.
		const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
		console.log('currently opened: ' + latestOpenKey);
		console.log('last opened: ' + openKeys);

		//indexOf returns the index of the first occurence of a specified value (in this case, latestOpenKey). If the value is not found, indexOf returns -1.
		if (latestOpenKey && rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
			setOpenKeys(keys);
		} else {
			setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
		}
	};

	//use react-router-dom Link to wrap each menu item so that it can be navigated to. If a menu has children (submenus), it's wrapped in a Menu.SubMenu, with each of the submenu's Items wrapped in a Link. Else, if the menu item does not have children, it's wrapped directly as a menu item and then a link.
	return (
		<Menu
			mode='inline'
			openKeys={openKeys}
			onOpenChange={onOpenChange}
			className='custom-sidenav'
		>
			{items.map((item) => {
				if (item.items) {
					return (
						<Menu.SubMenu key={item.key} title={item.label} icon={item.icon}>
							{item.items.map((childItem) => (
								<Menu.Item key={childItem.key}>
									<Link to={`/${childItem.label}`}>{childItem.label}</Link>
								</Menu.Item>
							))}
						</Menu.SubMenu>
					);
				} else {
					return (
						<Menu.Item key={item.key} icon={item.icon}>
							<Link to={item.label === 'Dashboard' ? '/' : `/${item.label}`}>
								{item.label}
							</Link>
						</Menu.Item>
					);
				}
			})}
		</Menu>
	);
}
