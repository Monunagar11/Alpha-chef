import React, { useEffect } from "react";

function Button1({ name }) {
  useEffect(() => {
    const toggleButton = document.getElementById("toggleButton");
    const box = document.getElementById("box");
    const box1 = document.getElementById("box1");

    if (!toggleButton || !box) return; // Safety check

    console.log("Button text:", toggleButton.textContent);

    toggleButton.addEventListener("mouseover", () => {
      console.log("Button clicked");

      // Toggle hidden state
      if (box.classList.contains("hidden") && !box1.classList.contains("hidden")) {
        box.classList.remove("hidden");
        box.classList.remove("-translate-y-8", "opacity-0");
      } else {
        box.classList.add("-translate-y-8", "opacity-0");

        // Wait for transition to finish
        box.addEventListener(
          "transitionend",
          () => {
            box.classList.add("hidden");
          },
          { once: true }
        );
      }
    });

    toggleButton.addEventListener("transitionstart",()=>{
        console.log("mouse leave")
         box.classList.remove("hidden");
        box.classList.remove("-translate-y-8", "opacity-0");
    })
  }, []);

  return (
    <>
      {/* Example hover button */}
      <div className="inline-block border p-4 bg-amber-300 group duration-300 transition overflow-hidden">
        <div>
          <span className="inline-block group-hover:-translate-y-8 group-hover:hidden">
            btn-1
          </span>
          <span className="hidden group-hover:inline-block transition">
            btn-2
          </span>
        </div>
      </div>

      {/* Toggle example */}
      <div className="flex flex-col items-center mt-6">
        <button
          id="toggleButton"
          className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
        >
          Toggle Animation
        </button>

        <div
          id="box"
          className="mt-8 rounded-lg bg-gray-200 p-8 shadow-md transition-all duration-500 ease-in-out"
        >
          <p>This box will translate and disappear.</p>
        </div>
        <div
          id="box1"
          className="mt-8 rounded-lg bg-gray-200 p-8 shadow-md transition-all duration-500 ease-in-out"
        >
          <p>This box will translate and apperar.</p>
        </div>
      </div>
    </>
  );
}

export default Button1;
