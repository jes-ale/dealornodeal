import mitt from 'file:///home/jes/dealornodeal_web/node_modules/mitt/dist/mitt.mjs';
import { ref } from 'file:///home/jes/dealornodeal_web/node_modules/vue/index.mjs';
import PocketBase from 'file:///home/jes/dealornodeal_web/node_modules/pocketbase/dist/pocketbase.es.mjs';

const EventBus = mitt();

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

export { EventBus as E, usePocketBase as u };
//# sourceMappingURL=usePocketBase-BmK3GMf1.mjs.map
