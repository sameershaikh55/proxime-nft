import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import ComingSoon from "./components/ComingSoon/ComingSoon.jsx";
// import ContactUs from "./components/Contact/ContactUs";
import Landing from "./pages/Landing/Landing";
import Explore from "./pages/Explore/Explore";
import LeaderBoard from "./pages/LeaderBoard/LeaderBoard";
import Blogs from "./pages/Blogs/Blogs";
import BlogDetails from "./pages/BlogDetails/BlogDetails";
import FAQs from "./pages/FAQs/FAQs";
import Profile from "./pages/Profile/Profile";
import Cart from "./pages/Cart/Cart";
import ProtectedRoute from "./Authentication/ProtectedRoute";
import CreateNewItem from "./pages/CreateNewItem/CreateNewItem";
import Listing from "./pages/Listing/Listing";

function App() {
	return (
		<Router>
			<Switch>
				{/* <Route exact path="/" component={ComingSoon} />
        <Route exact path="/contact" component={ContactUs} /> */}

				<Route exact path="/" component={Landing} />
				<Route exact path="/explore" component={Explore} />
				<Route exact path="/leader-board" component={LeaderBoard} />
				<Route exact path="/blogs" component={Blogs} />
				<Route exact path="/blog-details" component={BlogDetails} />
				<Route exact path="/faqs" component={FAQs} />

				<ProtectedRoute
					exact
					path="/create-new-item"
					component={CreateNewItem}
				/>
				<ProtectedRoute exact path="/listing" component={Listing} />
				<ProtectedRoute exact path="/listing/:id" component={Listing} />
				<ProtectedRoute exact path="/profile" component={Profile} />
				<ProtectedRoute exact path="/cart" component={Cart} />
			</Switch>
		</Router>
	);
}

export default App;
