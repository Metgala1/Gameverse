import Header from './Header';
import Navbar from './Navbar';

function Store() {
  return (
    <div className="store">
      <Header />
      <Navbar />
      <h1>Store</h1>
      <p>Welcome to the store! Here you can find various items for sale.</p>
    </div>
  );
}

export default Store;
