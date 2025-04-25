import AsyncStorage from '@react-native-async-storage/async-storage';

// Save user info to AsyncStorage
export const saveUserInfo = async (newData) => {
  try {
    console.log("Saving user info:", newData);  // Check what data is being saved
    const existingData = await AsyncStorage.getItem('userInfo');
    const parsedData = existingData ? JSON.parse(existingData) : {};
    const updatedData = { ...parsedData, ...newData };
    await AsyncStorage.setItem('userInfo', JSON.stringify(updatedData));
    console.log('Data saved successfully:', updatedData);
  } catch (error) {
    console.error('Error saving user info:', error);
  }
};

// Get user info from AsyncStorage
export const getUserInfo = async () => {
  try {
    const userInfo = await AsyncStorage.getItem('userInfo');
    return userInfo ? JSON.parse(userInfo) : null;
  } catch (error) {
    console.error('Error retrieving user info:', error);
    return null;
  }
};
