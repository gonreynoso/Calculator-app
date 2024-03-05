import Display from "@/Components/display/display";

const Home = () => {

  const state = {
    total:null,
    next:null,
    operator:null
  }


  return (
    <>
      <Display value={state.next || state.total || "0"} />
    
    </>
  );
}

export default Home;
