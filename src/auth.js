import { auth, db, firestore } from "@/firebase";
import store from "@/store";
import router from "@/router";

auth().onAuthStateChanged(user => {
  if (user) {
    if (user.user) {
      user = user.user;
    }
    const setUser = {
      id: user.uid,
      name: user.displayName,
      image: user.photoURL,
      created_at: firestore.FieldValue.serverTimestamp()
    };
    db.collection("users")
      .doc(setUser.id)
      .set(setUser);
    store.commit("auth/setUser", setUser);
    router.push("/subreddits");
  } else {
    store.commit("auth/setUser", null);
    router.push("/#/");
  }
});
