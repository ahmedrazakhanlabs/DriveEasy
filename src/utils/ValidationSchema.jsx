import * as Yup from "yup";

export const validationSchema = Yup.object({
  firstName: Yup.string()
    .trim()
    .min(2, "First name must be at least 2 characters long")
    .max(50, "First name cannot exceed 50 characters")
    .required("First name is required"),

  lastName: Yup.string()
    .trim()
    .min(2, "Last name must be at least 2 characters long")
    .max(50, "Last name cannot exceed 50 characters")
    .required("Last name is required"),

  postalCode: Yup.string()
    .trim()
    .min(2, "Postal Code must be at least 2 characters long")
    .max(15, "Postal Code cannot exceed 15 characters")
    .required("Postal Code is required"),

  phoneNumber: Yup.string()
    .matches(/^\d+$/, "Must be a valid number")
    .min(10, "Phone number must be at least 10 digits long")
    .max(15, "Phone number cannot exceed 15 digits")
    .required("Mobile number is required"),

  emailAddress: Yup.string()
    .trim()
    .email("Invalid email address")
    .max(255, "Email address cannot exceed 255 characters")
    .required("Email is required"),
  selectedLesson: Yup.string().trim().required("Please select a lesson type."),
  cardNumber: Yup.string()
    .required("Card number is required")
    .matches(/^[0-9]{13,19}$/, "Card number must be between 13 and 19 digits"),

  expiryDate: Yup.string()
    .required("Expiry date is required")
    .matches(
      /^(0[1-9]|1[0-2])\/?([0-9]{2})$/,
      "Invalid expiry date (MM/YY format)"
    ), // MM/YY format

  cvv: Yup.string()
    .required("CVV is required")
    .matches(/^[0-9]{3,4}$/, "CVV must be 3 or 4 digits"),

  cardName: Yup.string()
    .required("Cardholder name is required")
    .matches(
      /^[a-zA-Z\s]+$/,
      "Cardholder name can only contain letters and spaces"
    ),
});
