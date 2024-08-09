import Cards from "./Cards";

function CardsHolder() {
  return (
    <div>
      <div className="fixed top-0 left-0 z-10 w-full h-screen pt-16 ">
        <Cards />
      </div>
    </div>
  );
}

export default CardsHolder;
