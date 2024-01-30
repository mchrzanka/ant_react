import React from 'react';

export default function Items() {
	return (
		<div
			style={{
				padding: 24,
				textAlign: 'center',
			}}
		>
			<p>long content</p>
			{
				// indicates very long content
				Array.from(
					{
						length: 100,
					},
					(_, index) => (
						<React.Fragment key={index}>
							{index % 20 === 0 && index ? 'items' : '...'}
							<br />
						</React.Fragment>
					)
				)
			}
		</div>
	);
}
