"use client";
import { Provider } from "react-redux";
import { store, persistor } from "../../redux/store";
import { PersistGate } from "redux-persist/integration/react";

const Layou = ({ children }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
};

export default Layou;
