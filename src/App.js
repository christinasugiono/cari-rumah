import PropertyForm from "./components/NewProperty/PropertyForm";

const DUMMY_SETTINGS = {
  area: "Kedungu",
  land: "3_500_000",
  build: "5_000_000",
  pool: "5_000_000",
  road: "1_000_000",
  others: "0"
};

function App() {
  return (
    <div>
      <h1>Hitung rumah anda</h1>
      <PropertyForm/>
    </div>
  );
}

export default App;
