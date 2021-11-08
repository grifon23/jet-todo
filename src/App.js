import React, { useEffect, useState } from "react";
import { Page } from "./modules/root/components/Page";
import "./assets/stylesGlobal/style.css";
import { getAuth } from "@firebase/auth";
import { FormEnter } from "./modules/auth/component/FormEnter";

function App() {
  const [user, setUser] = useState(null);
  const auth = getAuth();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      const user = {
        email: userAuth,
      };
      if (userAuth) {
        setUser(user);
      } else {
        setUser(null);
      }
      return unsubscribe;
    });
  }, [auth]);

  return (
    <div className="App">
      {user ? <Page user={user} setUser={setUser} /> : <FormEnter />}
    </div>
  );
}

export default App;
