import React, { useState, useRef } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";

// Import your custom shield icon (SVG or Image)
import ShieldIcon from "../assets/icons/ShieldIcon";

// Import updated styles
import styles from "../styles/OTP.styles";

const OTPAuthenticationScreen = () => {
  // State for handling OTP input
  const [otp, setOtp] = useState(Array(6).fill(""));
  // State to toggle between OTP view and success screen
  const [isVerified, setIsVerified] = useState(false);

  // Create refs for each of the 6 OTP inputs
  const inputRefs = useRef([]);

  const handleChange = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    // Move focus to the next input if a digit is entered
    if (text && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  // Render 6 OTP inputs
  const renderOTPInputs = () =>
    otp.map((value, i) => (
      <TextInput
        key={i}
        ref={(ref) => (inputRefs.current[i] = ref)}
        style={styles.otpBox}
        value={value}
        onChangeText={(text) => handleChange(text, i)}
        maxLength={1}
        keyboardType="numeric"
        placeholder="-"
        placeholderTextColor="#477EE6"
      />
    ));

  // Handler for the "Verify & Continue" button on the OTP screen
  const handleVerifyPress = () => {
    // In a real-world scenario, do API verification before setting isVerified true.
    setIsVerified(true);
  };

  // Success Screen UI after verification
  if (isVerified) {
    return (
      <View style={styles.container}>
        {/* Success "card" */}
        <View style={styles.contentWrapper}>
          {/* Tick icon wrapped in a white circle */}
          <View style={styles.tickContainer}>
            <Image
              source={require("../assets/tick.png")}
              style={styles.tickIcon}
              resizeMode="contain"
            />
          </View>

          <Text style={styles.successTitle}>Verification Successful!</Text>
          <Text style={styles.successSubtitle}>
            Your email has been successfully verified.{"\n"}
            You can now continue your design.
          </Text>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Verify & Continue</Text>
          </TouchableOpacity>
        </View>

        {/* Logo at the very bottom */}
        <Image
          source={require("../assets/CallLoom.png")}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
    );
  }

  // OTP input UI
  return (
    <View style={styles.container}>
      {/* “Card” in the center */}
      <View style={styles.contentWrapper}>
        {/* Shield icon */}
        <ShieldIcon style={styles.shieldIcon} />

        {/* Title & Subtitle */}
        <Text style={styles.title}>OPT Authentication</Text>
        <Text style={styles.subtitle}>
          Enter the 6 digits sent to your email.
        </Text>

        {/* OTP Fields */}
        <View style={styles.otpContainer}>{renderOTPInputs()}</View>

        {/* Verify Button */}
        <TouchableOpacity style={styles.button} onPress={handleVerifyPress}>
          <Text style={styles.buttonText}>Verify & Continue</Text>
        </TouchableOpacity>

        {/* Resend */}
        <Text style={styles.resendWrapper}>
          Don’t receive code? <Text style={styles.resendText}>Request again</Text>
        </Text>
      </View>

      {/* Logo at the very bottom */}
      <Image
        source={require("../assets/CallLoom.png")}
        style={styles.logo}
        resizeMode="contain"
      />
    </View>
  );
};

export default OTPAuthenticationScreen;
