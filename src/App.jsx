import { SearchForm } from "./SearchForm";
import { ThemeToggle } from "./ThemeToggle";
import { Gallery } from "./Gallery";
const App = () => {
  
  return <>
<div className="title">Unsplash Images</div>
<div className="title-underline"></div>
<ThemeToggle/>
<SearchForm/>
<Gallery />
  </>
};
export default App;
