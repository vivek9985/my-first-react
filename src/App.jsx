import "./css/index.css"
const App = () => {
  return (
    <div className="bg-lime-200 rounded-xl text-center">
      <img className="w-60 h-48 rounded-2xl my-4 mx-auto" src="https://images.pexels.com/photos/12831255/pexels-photo-12831255.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="Cat" />
      <p className="font-medium px-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, a odit. Inventore vel tenetur.</p>
      <button className="btn btn-primary bg-black capitalize mx-auto my-4">Click me</button>
    </div>
  );
};
export default App;
