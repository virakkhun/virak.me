import { Route, Routes } from '@solidjs/router';
import { IndexPage } from './pages/index.page';

export const HomeRoutes = () => {
	return (
		<>
			<Routes>
				<Route path="/" component={IndexPage} />
			</Routes>
		</>
	);
};
