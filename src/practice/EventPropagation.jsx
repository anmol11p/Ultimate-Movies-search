import React from "react";

const EventPropagation = () => {
  const handleGrandparent = () => {
    console.log("Grandparent clicked");
  };

  const handleParent = () => {
    console.log("Parent clicked");
  };

  const handleChild = (e) => {
    // e.stopPropagation();              /*  for stoping the propagation from bubbling it is not going to parent then grandparents*/
    console.log("Child clicked");
    console.log(e.target);
    console.log(e);
  };

  return (
    <>
      <section className="main-div bg-red-500 grid mt-10 h-60 w-80 ml-96 place-items-center">
        <div
          className="g-div bg-green-600 w-3/4 h-3/4 flex items-center justify-center"
          onClickCapture={handleGrandparent}
        >
          <div
            className="p-div bg-yellow-300 w-3/4 h-3/4 flex items-center justify-center"
            onClickCapture={handleParent}
          >
            <button
              className="c-div bg-slate-600 w-3/4 h-3/4 text-white flex items-center justify-center"
              onClickCapture={handleChild}
            >
              Child div
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default EventPropagation;
