import AsyncStorage from "@react-native-async-storage/async-storage";

export function useStorage() {
  const STORAGE_KEY = "@pass";

  async function getItem() {
    try {
      const passwords = await AsyncStorage.getItem(STORAGE_KEY);
      return JSON.parse(passwords || "[]");
    } catch (error) {
      console.log("Error getting data", error);
      return [];
    }
  }

  async function saveItem(passwords: any[]) {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(passwords));
    } catch (error) {
      console.log("Error saving data", error);
    }
  }

  async function removeItem(id: string) {
    try {
      const passwords = await getItem();
      const newPasswords = passwords.filter((item: any) => item.id !== id);
      await saveItem(newPasswords);
      return newPasswords;
    } catch (error) {
      console.log("Error removing data", error);
      return [];
    }
  }

  return {
    getItem,
    saveItem,
    removeItem,
  };
}
