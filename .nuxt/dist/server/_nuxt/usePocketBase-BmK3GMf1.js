import { ref } from "vue";
import PocketBase from "pocketbase";
import "./event-bus-1ebWZuYj.js";
const pb = new PocketBase("https://db.alejos.dev");
const isLoggedIn = ref(false);
const user = ref(null);
const usePocketBase = () => {
  const start = async () => {
  };
  const login = async (email, password) => {
    try {
      const authData = await pb.collection("internal_users").authWithPassword(email, password);
      isLoggedIn.value = true;
      user.value = authData.record;
    } catch (error) {
      isLoggedIn.value = false;
      user.value = null;
      throw error;
    }
  };
  const logout = async () => {
    pb.authStore.clear();
    isLoggedIn.value = false;
    user.value = null;
  };
  return {
    isLoggedIn,
    user,
    login,
    logout,
    pb,
    start
  };
};
export {
  usePocketBase as u
};
//# sourceMappingURL=usePocketBase-BmK3GMf1.js.map
