export function NavigationBar() {
	return (
		<nav>
			<ul>
				{/* <li>
					<a href="/">Home</a>
				</li>
				<li>
					<a href="/">Gallery</a>
				</li>
				<li>
					<a href="/">About Us</a>
				</li> */}
				<NavLink>Home</NavLink>
				<NavLink>Gallery</NavLink>
				<NavLink>About Us</NavLink>
			</ul>
		</nav>
	);
}

function NavLink(props) {
	console.log(props);
	const name = props.children;
	return (
		<li className="nav-link">
			<a
				href="/"
				// style="color:red; background:blue;"
			>
				{name}
			</a>
		</li>
	);
}
