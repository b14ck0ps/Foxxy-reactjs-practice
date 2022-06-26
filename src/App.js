import Header from "./components/Header";
import Card from "./components/Card";
import Links from "./components/Links";
import Feature from "./components/Feature";
import Footer from "./components/footer";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <Card />
      <Links />
      <Feature />
      <Footer />
    </div>
  );
}
export default App;
