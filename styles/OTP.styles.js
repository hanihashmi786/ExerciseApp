import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  // Overall screen container with dark background
  container: {
    flex: 1,
    backgroundColor: "#0D111D",
    // Space out the "card" and the logo
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 40,
  },
  // The central “card” area
  contentWrapper: {
    width: "90%",
    backgroundColor: "#0B101D", // Slightly different dark tone
    borderRadius: 12,
    paddingVertical: 30,
    paddingHorizontal: 20,
    alignItems: "center",

    // Shadow for an elevated look (works on iOS/Android differently)
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  // Shield icon styling
  shieldIcon: {
    marginTop: 80,
    marginBottom: 20,
    // If it's an SVG, you can set width/height here, e.g. width: 40, height: 40
  },
  // Title text
  title: {
    fontFamily: "Inter-SemiBold",
    fontSize: 20,
    color: "#FFFFFF",
    marginBottom: 10,
  },
  // Subtitle text
  subtitle: {
    fontFamily: "Inter-Light",
    fontSize: 14,
    color: "#A5A5A5",
    textAlign: "center",
    marginBottom: 30,
  },
  // Container for the 6 OTP boxes
  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 30,
  },
  // Individual OTP box
  otpBox: {
    width: 40,
    height: 50,
    borderWidth: 1,
    borderColor: "#477EE6",
    borderRadius: 8,
    textAlign: "center",
    fontSize: 20,
    color: "#FFFFFF",
    fontFamily: "Inter-SemiBold",
  },
  // "Verify & Continue" button
  button: {
    width: "100%",
    backgroundColor: "#477EE6",
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 20,
  },
  buttonText: {
    fontFamily: "Inter-SemiBold",
    fontSize: 16,
    color: "#FFFFFF",
  },
  // Resend code text
  resendWrapper: {
    fontFamily: "Inter-Light",
    fontSize: 14,
    color: "#FFFFFF",
  },
  resendText: {
    fontFamily: "Inter-SemiBold",
    color: "#477EE6",
  },
  // Call Loom logo at bottom
  logo: {
    width: 120,
    height: 40,
  },
  // ...
// White circle container around the tick icon
tickContainer: {
    marginTop: 80,
    marginBottom: 20,
    width: 40,
    height: 40,
    borderRadius: 50, // half of width/height to make a circle
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },
  
  // Tick icon inside the white circle
  tickIcon: {
    width: 60,
    height: 60,
  },
  
  // Success title
  successTitle: {
    fontFamily: "Inter-SemiBold",
    fontSize: 20,
    color: "#FFFFFF",
    marginBottom: 10,
  },
  
  // Success subtitle
  successSubtitle: {
    fontFamily: "Inter-Light",
    fontSize: 14,
    color: "#A5A5A5",
    textAlign: "center",
    marginBottom: 30,
  },
  
  
});

export default styles;
