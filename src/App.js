import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Components
import Header from "./components/Header";
import Feed from "./components/Feed";
import LeftNav from "./components/LeftNav";
import LeftNavMenuItem from "./components/LeftNavMenuItem";
import SearchResultVideoCard from "./components/SearchResultVideoCard";
import SearchResult from "./components/SearchResult";
import SuggestionVideoCard from "./components/SuggestionVideoCard";
import VideoCard from "./components/VideoCard";
import VideoDetails from "./components/VideoDetails";

import { AppContext } from "./context/contextAPI";

function App() {
	return (
		<AppContext>
			<BrowserRouter>
				<div className="flex flex-col h-full">
					<Header />
					<Routes>
						<Route path="/" exact element={<Feed />} />
						<Route
							path="/searchResult/:searchQuery"
							element={<SearchResult />}
						/>
						<Route path="/video/:id" element={<VideoDetails />} />
					</Routes>
				</div>
			</BrowserRouter>
		</AppContext>
	);
}

export default App;
