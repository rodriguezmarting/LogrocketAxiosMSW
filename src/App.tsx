import { useQuery } from "react-query";
import "./App.css";
import { api } from "./lib/api/api";

function App() {
  const query = useQuery(["todos"], async () => {
    const response = await api.pet.getPetById(1);
    return response;
  });

  if (query.error) return <div>Request Failed</div>;
  if (query.isLoading) return <div>Loading...</div>;

  return <div className="App">{JSON.stringify(query.data)}</div>;
}

export default App;
