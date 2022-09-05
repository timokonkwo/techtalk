import { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import About from './About';
import Counter from "./Counter";
import Footer from "./Footer";
import Header from "./Header";
import Loading from "./Loading";
import PastEvent from "./PastEvents";
import Speakers from "./Speakers";
import Why from "./Why";

function App() {
const [loading,setLoading] = useState(true)
const fetchPage = async() =>{
setLoading(true)
}

useEffect(()=>{
fetchPage()
setLoading(false)
},[])

if (loading){
return (
<div className="App">
<Loading/>
</div>
)
}
return (
<Router>
<div className="App">
<header className="App-header">
<Header/>
<About/>
<Counter/>
<Why/>
<Speakers/>
<PastEvent/>
<Footer/>
</header>
<script>
    
</script>
</div>
</Router>
);
}
export default App;