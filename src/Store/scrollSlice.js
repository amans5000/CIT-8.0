import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  targetId: null, // To store the ID of the section to scroll to
};

const scrollSlice = createSlice({
  name: "scroll",
  initialState,
  reducers: {
    setScrollTarget: (state, action) => {
      state.targetId = action.payload;

      // Smooth scrolling to the section
      const element = document.getElementById(action.payload);

      if (element) {
        console.log(action.payload);
        window.scrollTo({ top: element.offsetTop, behavior: "smooth" });
      } else {
        console.warn(`No element found with ID: ${action.payload}`);
      }
    },
  },
});

export const { setScrollTarget } = scrollSlice.actions;
export default scrollSlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   targetId: null,
// };

// const scrollSlice = createSlice({
//   name: "scroll",
//   initialState,
//   reducers: {
//     setScrollTarget: (state, action) => {
//       state.targetId = action.payload;
//       console.log(action.payload);
//       window.location.href = `#${action.payload}`;
//     },
//   },
// });

// export const { setScrollTarget } = scrollSlice.actions;
// export default scrollSlice.reducer;
