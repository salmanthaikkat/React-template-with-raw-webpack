import React, { useEffect } from 'react';

export default function Demo(props) {
	useEffect(() => {
		props.fetchUsers();
	}, []);

	return (
		<div>
			{
				props.users.map((user) =>(
					<div key={user}>
						{user}
					</div>
				))
			}
		</div>
	);
}