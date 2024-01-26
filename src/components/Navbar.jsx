import React, { useState } from 'react';

//icons
import {
	AppstoreOutlined,
	MailOutlined,
	SettingOutlined,
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
		getItem('Option 5', '5'),
		getItem('Option 6', '6'),
	]),
	getItem('Shop', 'sub3', <SettingOutlined />, [
		getItem('Option 9', '9'),
		getItem('Option 10', '10'),
		getItem('Option 11', '11'),
		getItem('Option 12', '12'),
	]),
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
	return (
		<Menu
			mode='inline'
			openKeys={openKeys}
			onOpenChange={onOpenChange}
			style={{
				width: 256,
			}}
			items={items}
		/>
	);
}
