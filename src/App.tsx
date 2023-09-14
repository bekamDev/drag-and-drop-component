import ImageUpload from "./components/uploadImage";

function App() {
  const handleImageUpload = (file: File) => {
    // Handle the uploaded image here
    console.log("Uploaded file:", file);
  };
  return <ImageUpload onImageUpload={handleImageUpload} />;
}

export default App;
