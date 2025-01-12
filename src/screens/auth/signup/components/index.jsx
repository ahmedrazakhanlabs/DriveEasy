import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import InputTwo from "../../../../components/InputTwo";
import ErrorMessage from "../../../../components/ErrorMessage";
import { validationSchema } from "../../../../utils/ValidationSchema";
import * as Yup from "yup";
import Confetti from "react-confetti"; // Import react-confetti
import { formatDate, postRequest } from "../../../../helpers/Functions";
import Loader from "../../../../components/Loader";
import {
  fakeInstructorData,
  signUpDropdownItems,
} from "../../../../utils/Data";
import Button from "../../../../components/Button";
import { ChevronLeft, ChevronRight, CornerUpLeft } from "lucide-react";
import Card from "../../../../components/Card";

import DropdownButton from "../../../../components/DropdownButton";
import { CalenderIcon2 } from "../../../../utils/Icons";
import Modal from "../../../../components/modals/Modal";
import CalendarComponent from "../../../../components/Calender";
import { format } from "date-fns";
import { stripePromise } from "../../../../helpers";
import {
  Elements,
  useStripe,
  useElements,
  CardElement,
} from "@stripe/react-stripe-js";
import { DebitCard } from "../../../../assets";

export const Section1 = ({ setFormData, formData, setIsNext }) => {
  const [isVisible, setIsVisible] = useState(false);

  const formik = useFormik({
    initialValues: formData,
    validationSchema: Yup.object({
      postalCode: validationSchema.fields.postalCode, // Use only the postalCode validation
    }),
    validateOnMount: true,
    onSubmit: (values) => {
      setFormData((prev) => ({ ...prev, ...values }));
    },
  });

  useEffect(() => {
    setIsVisible(true);
    formik.handleSubmit();
  }, []);

  useEffect(() => {
    // Check if there are any errors
    const isFormInvalid = Object.keys(formik.errors).length > 0;
    console.log("Form invalid:", !isFormInvalid);
    console.log("formik.errors:", formik.errors);

    // If there are any errors, set isNext to false, otherwise true
    setIsNext(!isFormInvalid);

    // Synchronize formData with parent component in real-time
    setFormData((prev) => ({ ...prev, ...formik.values }));
  }, [formik.errors, formik.values, setIsNext, setFormData]);

  return (
    <div
      className={`transition-all duration-700 transform ${
        isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full"
      }`}
    >
      <form className=" space-y-4" onSubmit={formik.handleSubmit}>
        {[{ label: "Postal Code", name: "postalCode", type: "number" }].map(
          ({ label, name, type }) => (
            <div key={name} className="space-y-2">
              <InputTwo
                label={label}
                type={type}
                placeholder={`Enter ${label.toLowerCase()}`}
                value={formik.values[name]}
                onChange={formik.handleChange}
                name={name}
              />
              {formik.errors[name] && formik.touched[name] && (
                <ErrorMessage ErrorMessage={formik.errors[name]} />
              )}
            </div>
          )
        )}
        <button type="submit" className="hidden">
          Submit
        </button>
      </form>
    </div>
  );
};
export const Section2 = ({ setFormData, formData, setIsNext }) => {
  const [isVisible, setIsVisible] = useState(false);
  const lessons = [
    { label: "I want to learn drive", value: "learnDrive" },
    { label: "I want refresher learner", value: "refresherLearner" },
    { label: "I have a test booked within 14 days", value: "testPreparation" },
  ];

  useEffect(() => {
    setIsVisible(true); // Trigger animation when component is mounted
  }, []);

  const formik = useFormik({
    initialValues: formData, // Make sure formData contains selectedLesson
    validationSchema: Yup.object({
      selectedLesson: validationSchema.fields.selectedLesson, // Use only the postalCode validation
    }),

    validateOnMount: true,
    onSubmit: (values) => {
      setFormData((prev) => ({ ...prev, ...values }));
    },
  });

  useEffect(() => {
    formik.handleSubmit();
  }, []);

  useEffect(() => {
    const isFormInvalid = Object.keys(formik.errors).length > 0;
    console.log("Form invalid:", !isFormInvalid);
    console.log("formik.errors:", formik.errors);
    setIsNext(!isFormInvalid);
    setFormData((prev) => ({ ...prev, ...formik.values }));
  }, [formik.errors, formik.values, setIsNext, setFormData]);

  const buttonClass = (lesson) => {
    return formik.values.selectedLesson === lesson
      ? "bg-purple-1 text-white"
      : "bg-purple-5 hover:bg-[#e9e3ff]";
  };

  return (
    <div
      className={`transition-all duration-700 transform ${
        isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full"
      }`}
    >
      <form className="space-y-4" onSubmit={formik.handleSubmit}>
        <div>
          <h1 className="text-lg font-Monsterrat font-bold mb-4">
            What type of lesson do you want?
          </h1>
          <div className="space-y-3">
            {lessons.map((lesson, index) => (
              <button
                key={index}
                type="button"
                className={`w-full text-left font-Monsterrat font-semibold text-[13px] p-4 rounded-lg transition-colors ${buttonClass(
                  lesson.value
                )}`}
                onClick={() =>
                  formik.setFieldValue("selectedLesson", lesson.value)
                } // Update Formik field value
              >
                {lesson.label}
              </button>
            ))}
            {formik.errors.selectedLesson && formik.touched.selectedLesson && (
              <ErrorMessage
                ErrorMessage={formik.errors.selectedLesson}
                className={"text-center"}
              />
            )}
          </div>
        </div>
        <button type="submit" className="hidden">
          Submit
        </button>
      </form>
    </div>
  );
};

export const Section3 = ({
  setFormData,
  formData,
  setIsNext,
  openModal,
  setContent,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedInstructor, setSelectedInstructor] = useState(
    JSON.parse(localStorage.getItem("selectedInstructor")) || null
  );
  const [bookingDate, setBookingDate] = useState(new Date().toISOString());

  const [drivingLevel, setDrivingLevel] = useState("All");

  const validationSchema = Yup.object({
    selectedType: Yup.string().required("Please select a lesson type."),
    selectedPackage: Yup.object().required("Please select a package."),
  });

  const formik = useFormik({
    initialValues: formData,
    validationSchema,
    onSubmit: (values) => {
      setFormData((prev) => ({
        ...prev,
        ...values,
      }));
    },
  });
  useEffect(() => {
    setIsVisible(true);
    const isoBookingDate = new Date(bookingDate).toISOString();
    formik.setFieldValue("bookingDate", isoBookingDate);
    formik.setFieldValue("instructorId", selectedInstructor?.id);
    formik.handleSubmit();
    setContent(
      <CalendarComponent
        currentDate={bookingDate}
        setCurrentDate={setBookingDate}
      />
    );
  }, [bookingDate, selectedInstructor]);

  const filteredInstructors = fakeInstructorData.filter((instructor) => {
    const bookingDateOnly = bookingDate.split("T")[0]; // Get the date part of bookingDate
    return (
      instructor.availability?.some(
        (day) =>
          day.start.split("T")[0] === bookingDateOnly ||
          day.end.split("T")[0] === bookingDateOnly
      ) &&
      (drivingLevel === "All" || instructor.driving_level === drivingLevel)
    );
  });

  useEffect(() => {
    const isFormInvalid = Object.keys(formik.errors).length > 0;
    console.log("Form invalid:", !isFormInvalid);
    console.log("formik.errors:", formik.errors);
    setIsNext(!isFormInvalid);
    setFormData((prev) => ({ ...prev, ...formik.values }));
  }, [formik.errors, formik.values, setIsNext, setFormData]);
  const handleInstructorSelect = (instructor) => {
    setSelectedInstructor(instructor);
    localStorage.setItem("selectedInstructor", JSON.stringify(instructor));
  };

  return (
    <div
      className={`transition-all duration-700 transform ${
        isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full"
      }`}
    >
      {!selectedInstructor ? (
        <div className="text-gray-900">
          <header className="px-6 py-4">
            <h2 className="text-xl mb-3 text-center font-Monsterrat font-bold">
              All Instructors
            </h2>
            <div className="px-4">
              <div className="flex justify-center my-1 mx-1 gap-2 items-center">
                <DropdownButton items={signUpDropdownItems(setDrivingLevel)} />

                <Button
                  label={format(bookingDate, "dd MMM yyyy")}
                  className="justify-center rounded-lg font-bold text-[2.8vw] min-w-[140px] sm:text-[12px] text-center"
                />
                <div>
                  <Button
                    onClick={openModal}
                    type="button"
                    className="justify-center rounded-md font-bold text-[14px] w-full opacity-70 "
                    prefixIcon={
                      <CalenderIcon2 fill={"#fff"} height="15" width="17" />
                    }
                  />
                </div>
              </div>

              <Card
                formData={formData}
                data={filteredInstructors}
                onSelect={handleInstructorSelect}
                setFormData={setFormData}
              />
            </div>
          </header>
        </div>
      ) : (
        <form className="space-y-4" onSubmit={formik.handleSubmit}>
          <div className="mb-8">
            <div className="flex mb-4 items-center gap-2">
              <CornerUpLeft
                className="cursor-pointer h-5 w-5 animate"
                onClick={() => setSelectedInstructor(null)}
              />
              <h2 className="text-lg font-Monsterrat font-bold">
                What type of lessons do you want?
              </h2>
            </div>
            <div className="flex gap-4 justify-center">
              {["manual", "automatic"].map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => formik.setFieldValue("selectedType", type)}
                  className={`px-6 py-2 font-Monsterrat font-bold text-[14px] capitalize rounded-lg transition-colors ${
                    formik.values.selectedType === type
                      ? "bg-purple-1 text-white"
                      : "bg-purple-5 hover:bg-[#e9e3ff]"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
            {formik.errors.selectedType && formik.touched.selectedType && (
              <ErrorMessage
                ErrorMessage={formik.errors.selectedType}
                className="text-center mt-3"
              />
            )}
          </div>
          <div className="mb-8">
            <div className="flex justify-between items-center">
              <h2 className="text-[15px] font-Monsterrat font-bold mb-4">
                Your Instructor
              </h2>
              <span
                className={`font-Monsterrat font-bold  text-white text-[10px] px-3 py-0.5 rounded bg-gray-500`}
              >
                {formatDate(bookingDate)}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-5 rounded-full flex items-center justify-center">
                  <span className="text-purple-1 font-Monsterrat font-bold">
                    {selectedInstructor?.name
                      .split(" ")
                      .map((word) => word.charAt(0))
                      .join("")}{" "}
                  </span>
                </div>
                <span className="font-Monsterrat font-bold text-[14px]">
                  {selectedInstructor.name}
                </span>
              </div>
              <div className="bg-purple-5 px-4 py-2 rounded-lg">
                <span className="font-Monsterrat font-bold text-[14px]">
                  ${selectedInstructor.perHour}/hr
                </span>
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-Monsterrat font-bold text-lg mb-4">
              Choose Your Package
            </h2>
            <div className="grid grid-cols-3 gap-4">
              {selectedInstructor?.packages?.map((pkg) => (
                <button
                  key={pkg.id}
                  type="button"
                  onClick={() => formik.setFieldValue("selectedPackage", pkg)}
                  className={`p-6 rounded-lg transition-colors flex items-center flex-col ${
                    formik.values.selectedPackage.id === pkg.id
                      ? "bg-purple-1 text-white"
                      : "bg-purple-5 hover:bg-[#e9e3ff]"
                  }`}
                >
                  <div className="w-8 h-8 mb-2 rounded-full bg-white flex items-center text-[12px] justify-center">
                    <div
                      className={
                        formik.values.selectedPackage.id === pkg.id
                          ? "text-purple-1 text-center font-Monsterrat font-bold"
                          : "text-center text-black font-Monsterrat font-bold"
                      }
                    >
                      {pkg.id}
                    </div>
                  </div>
                  <div className="text-[12px] mb-2 font-Monsterrat font-bold">
                    {pkg.hours} hours
                  </div>
                  <div className="text-xl font-Monsterrat font-bold">
                    ${pkg.price}
                  </div>
                </button>
              ))}
            </div>
            {formik.errors.selectedPackage &&
              formik.touched.selectedPackage && (
                <ErrorMessage
                  ErrorMessage={formik.errors.selectedPackage}
                  className="text-center mt-3"
                />
              )}
          </div>
        </form>
      )}
    </div>
  );
};

export const Section4 = ({ setFormData, formData, setIsNext, errorText }) => {
  const [isVisible, setIsVisible] = useState(false);
  const formik = useFormik({
    initialValues: formData,
    validationSchema: Yup.object({
      firstName: validationSchema.fields.firstName,
      lastName: validationSchema.fields.lastName,
      phoneNumber: validationSchema.fields.phoneNumber,
      emailAddress: validationSchema.fields.emailAddress,
      dateOfBirth: validationSchema.fields.dateOfBirth,
      billingAddress: validationSchema.fields.address,
      pickupAddress: validationSchema.fields.address,
    }),
    validateOnMount: true,
    onSubmit: (values) => {
      // Update formData when the form is submitted (if needed)
      setFormData((prev) => ({ ...prev, ...values }));
    },
  });
  useEffect(() => {
    formik.handleSubmit();
    setIsVisible(true); // Trigger animation when component is mounted
  }, []);

  useEffect(() => {
    // Check if the form is valid or not
    const isFormInvalid = Object.keys(formik.errors).length > 0;
    console.log("formik.errors", formik.errors);

    setIsNext(!isFormInvalid);

    // Synchronize formData with parent component in real-time
    setFormData((prev) => ({ ...prev, ...formik.values }));
  }, [formik.errors, formik.values, setIsNext, setFormData]);
  console.log("errorText", errorText);

  return (
    <div
      className={`transition-all duration-700 transform ${
        isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full"
      }`}
    >
      <form className="space-y-4" onSubmit={formik.handleSubmit}>
        {[
          { label: "Learner first name", name: "firstName", type: "text" },
          { label: "Learner last name", name: "lastName", type: "text" },
          {
            label: "Learner mobile number",
            name: "phoneNumber",
            type: "number",
          },
          { label: "Learner Date Of Birth", name: "dateOfBirth", type: "date" },
          {
            label: "Learner email address",
            name: "emailAddress",
            type: "email",
          },
          {
            label: "Learner Pickup Address",
            name: "pickupAddress",
            type: "text",
          },
          {
            label: "Learner Billing Address",
            name: "billingAddress",
            type: "text",
          },
        ].map(({ label, name, type }) => (
          <div key={name} className="space-y-2">
            <InputTwo
              label={label}
              type={type}
              placeholder={`Enter ${label.toLowerCase()}`}
              value={formik.values[name]}
              onChange={formik.handleChange}
              name={name}
            />
            {label == "Learner email address" && (
              <ErrorMessage ErrorMessage={errorText} />
            )}
            {formik.errors[name] && formik.touched[name] && (
              <ErrorMessage ErrorMessage={formik.errors[name]} />
            )}
          </div>
        ))}

        <label className="flex items-center gap-2">
          <input type="checkbox" className="w-4 h-4 text-purple-600 rounded" />
          <p className="font-Monsterrat font-bold text-[12px] text-black-1 opacity-60">
            I accept terms and Policy.
          </p>
        </label>

        {/* Submit button (hidden, optional if you don't trigger submit manually) */}
        <button type="submit" className="hidden">
          Submit
        </button>
      </form>
    </div>
  );
};
export const Section5 = ({ setFormData, formData, setIsNext }) => {
  const [isVisible, setIsVisible] = useState(false);

  const formik = useFormik({
    initialValues: formData,
    validationSchema: Yup.object({
      cardNumber: validationSchema.fields.cardNumber,
      expiryDate: validationSchema.fields.expiryDate,
      cvv: validationSchema.fields.cvv,
      cardName: validationSchema.fields.cardName,
    }),
    validateOnMount: true,
    onSubmit: (values) => {
      // Update formData when the form is submitted (if needed)
      setFormData((prev) => ({ ...prev, ...values }));
    },
  });
  useEffect(() => {
    formik.handleSubmit();
    setIsVisible(true); // Trigger animation when component is mounted
  }, []);
  useEffect(() => {
    // Check if the form is valid or not
    const isFormInvalid = Object.keys(formik.errors).length > 0;

    setIsNext(!isFormInvalid);

    // Synchronize formData with parent component in real-time
    setFormData((prev) => ({ ...prev, ...formik.values }));
  }, [formik.errors, formik.values, setIsNext, setFormData]);
  const bookingFee = 10;
  return (
    <div
      className={`transition-all duration-700 transform ${
        isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full"
      }`}
    >
      <div className=" ">
        <h2 className="text-xl font-MonsterratBold font-bold mb-6">Summary</h2>

        <div className="space-y-4">
          {/* Lesson Price */}
          <div className="flex justify-between items-center">
            <span className="font-Monsterrat font-bold ">
              lesson {formData.selectedPackage.hours}
            </span>
            <div className="bg-purple-1 text-white px-4 py-2 rounded-lg">
              <span className="font-medium">
                ${formData.selectedPackage.price}
              </span>
            </div>
          </div>

          {/* Booking Fee */}
          <div className="flex justify-between items-center">
            <span className="font-Monsterrat font-bold ">Booking fee</span>
            <div className="bg-purple-1 text-white px-4 py-2 rounded-lg">
              <span className="font-medium">${bookingFee}</span>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-200 my-4"></div>

          {/* Total */}
          <div className="flex justify-between items-center">
            <span className="font-Monsterrat font-bold  ">Total</span>
            <div className="bg-purple-1 text-white px-4 py-2 rounded-lg">
              <span className="font-medium">
                ${bookingFee + formData.selectedPackage.price}
              </span>
            </div>
          </div>
        </div>

        <form className="mt-10 space-y-4" onSubmit={formik.handleSubmit}>
          <h2 className="text-xl font-MonsterratBold font-bold mb-6">
            Card Details
          </h2>
          {[
            {
              label: "Card Number",
              name: "cardNumber",
              type: "text",
              placeholder: "812394193245",
            },
            {
              label: "Expiry Date",
              name: "expiryDate",
              type: "text",
              placeholder: "MM/YY",
            },
            {
              label: "CVV",
              name: "cvv",
              type: "number",
              placeholder: "XXX",
            },
            {
              label: "Name on card",
              name: "cardName",
              type: "text",
              placeholder: "Your Full Name here",
            },
          ].map(({ label, name, type, placeholder }) => (
            <div key={name} className="space-y-2">
              <InputTwo
                label={label}
                type={type}
                placeholder={placeholder}
                value={formik.values[name]}
                onChange={formik.handleChange}
                name={name}
              />
              {formik.errors[name] && formik.touched[name] && (
                <ErrorMessage ErrorMessage={formik.errors[name]} />
              )}
            </div>
          ))}

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              className="w-4 h-4 text-purple-600 rounded"
            />
            <p className="font-Monsterrat font-bold text-[12px] text-black-1 opacity-60">
              I accept terms and Policy.
            </p>
          </label>

          {/* Submit button (hidden, optional if you don't trigger submit manually) */}
          <button type="submit" className="hidden">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export const Section6 = ({ setFormData, formData, setIsNext, errorText }) => {
  const [isVisible, setIsVisible] = useState(false);
  const formik = useFormik({
    initialValues: formData,
    validationSchema: Yup.object({
      password: validationSchema.fields.password,
      confirmPassword: validationSchema.fields.confirmPassword,
    }),
    validateOnMount: true,
    onSubmit: (values) => {
      setFormData((prev) => ({ ...prev, ...values }));
    },
  });
  useEffect(() => {
    formik.handleSubmit();
    setIsVisible(true);
  }, []);
  useEffect(() => {
    const isFormInvalid = Object.keys(formik.errors).length > 0;
    setIsNext(!isFormInvalid);
    setFormData((prev) => ({ ...prev, ...formik.values }));
  }, [formik.errors, formik.values, setIsNext, setFormData]);

  return (
    <div
      className={`transition-all duration-700 transform ${
        isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full"
      }`}
    >
      <form className="space-y-4" onSubmit={formik.handleSubmit}>
        {[
          { label: "Password", name: "password", type: "password" },
          {
            label: "Confirm Password",
            name: "confirmPassword",
            type: "password",
          },
        ].map(({ label, name, type }) => (
          <div key={name} className="space-y-2">
            <InputTwo
              label={label}
              type={type}
              placeholder={`Enter ${label.toLowerCase()}`}
              value={formik.values[name]}
              onChange={formik.handleChange}
              name={name}
            />
            {label == "Learner email address" && (
              <ErrorMessage ErrorMessage={errorText} />
            )}
            {formik.errors[name] && formik.touched[name] && (
              <ErrorMessage ErrorMessage={formik.errors[name]} />
            )}
          </div>
        ))}

        <label className="flex items-center gap-2">
          <input type="checkbox" className="w-4 h-4 text-purple-600 rounded" />
          <p className="font-Monsterrat font-bold text-[12px] text-black-1 opacity-60">
            I accept terms and Policy.
          </p>
        </label>

        {/* Submit button (hidden, optional if you don't trigger submit manually) */}
        <button type="submit" className="hidden">
          Submit
        </button>
      </form>
    </div>
  );
};

// Main Section7 Component
export const Section7 = ({
  setSection,
  formData,
  setErrorText,
  loading,
  setLoading,
  setIsNext,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [loadingText, setLoadingText] = useState("It will take a moment");
  const [showPayement, setShowPayement] = useState(true);
  useEffect(() => {
    setLoading(true);
    setIsNext(false);
  }, []);
  const loadingTexts = [
    "It will take a moment",
    "Loading",
    "Please hold on, your request is being processed",
  ];

  const data = {
    firstName: formData.firstName,
    lastName: formData.lastName,
    email: formData.emailAddress,
    password: formData.password,
    profilePicture: "https://example.com/profile.jpg",
    phoneNumber: formData.phoneNumber.toString(),
    dob: new Date(formData.dateOfBirth).toISOString(),
    pickupAddress: formData.pickupAddress,
    billingAddress: formData.billingAddress,
    postalCode: formData.postalCode,
    cardDetails: {
      cardNo: formData.cardNumber,
      expiry: formData.expiryDate,
      cvv: formData.cvv,
      name: formData.cardName,
    },
  };

  const bookingData = {
    bookingType: formData.selectedLesson,
    instructorId: formData.instructorId,
    package: {
      hours: formData.selectedPackage.hours,
      price: formData.selectedPackage.price,
    },
    lessonsType: formData.selectedType,
    date: formData.bookingDate,
    start: formData.bookingStart,
    end: formData.bookingEnd,
  };

  const handleError = (error) => {
    if (error.response?.data || error.message === "Email already taken") {
      setTimeout(() => {
        setSection(4);
        setLoading(false);
      }, 2000);
      setErrorText("Email already taken");
      return;
    }
    console.error(
      "Registration Failed:",
      error.response?.data || error.message
    );
  };

  const Signup = async () => {
    try {
      const response = await postRequest("pupil/register", data);
      console.log("Registration Successful:", response.data);
      return response.data;
    } catch (error) {
      handleError(error);
      return false;
    }
  };

  const booking = async (pupilId) => {
    try {
      const response = await postRequest("booking/create", {
        ...bookingData,
        pupilId: pupilId,
      });
      console.log("Booking Successful:", response);
      return response.data.booking._id;
    } catch (error) {
      handleError(error);
    }
  };

  const payForBooking = async (bookingId) => {
    try {
      const response = await postRequest("payment/payForBooking", {
        bookingId: bookingId,
      });
      console.log("Payment Response:", response);
      return response.data;
    } catch (error) {
      handleError(error);
    } finally {
    }
  };
  const [clientSecret, setClientSecret] = useState(null);
  const [payementId, setPayementId] = useState(null);

  useEffect(() => {
    const executeSignupAndBooking = async () => {
      setLoading(true);
      try {
        const signupResult = await Signup();
        if (signupResult) {
          const { pupilId } = signupResult;
          const bookingId = await booking(pupilId);
          const bookingResponse = await payForBooking(bookingId);
          setClientSecret(bookingResponse.client_secret);
          setPayementId(bookingResponse.paymentId);
        } else {
          // setLoading(false);
        }
      } catch (error) {
        console.error("Error in signup and booking process:", error);
        // setLoading(false);
      }
    };

    executeSignupAndBooking();

    setIsVisible(true);
    setLoading(false);
    setShowPayement(false);
    const intervalId = setInterval(() => {
      setLoadingText((prevText) => {
        const currentIndex = loadingTexts.indexOf(prevText);
        const nextIndex = (currentIndex + 1) % loadingTexts.length;
        return loadingTexts[nextIndex];
      });
    }, 2000);

    return () => {
      clearInterval(intervalId);
      setLoading(false);
    };
  }, []);

  return (
    <div
      className={`transition-all duration-700 transform ${
        isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full"
      }`}
    >
      <div className="w-full max-w-md py-[30px] p-4">
        {loading && showPayement ? (
          <div className="flex flex-col items-center justify-center py-[30px]">
            <Loader />
            <p className="font-Monsterrat text-[13px] my-4 font-extrabold">
              {loadingText}
            </p>
          </div>
        ) : (
          <>
            <PaymentForm
              clientSecret={clientSecret}
              payementId={payementId}
              setIsNext={setIsNext}
            />
          </>
        )}
      </div>
    </div>
  );
};

export const PaymentForm = ({
  clientSecret,
  payementId,
  prefilledEmail,
  setIsNext,
}) => {
  const [email, setEmail] = useState(prefilledEmail || "");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const stripe = useStripe();
  const elements = useElements();
  const [hasConfetti, setHasConfetti] = useState(false);

  const confirmPayement = async () => {
    try {
      const response = await postRequest("payment/confirmPayment", {
        paymentId: payementId,
      });
      console.log("Payment Response:", response);
      setIsNext(true);
      return response.data;
    } catch (error) {
      console.error("Error confirming payment:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements || !clientSecret) {
      setError("Stripe is not properly initialized.");
      return;
    }

    setLoading(true);
    setError("");

    const cardElement = elements.getElement(CardElement);

    try {
      const paymentResult = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: cardElement,
          billing_details: {
            email,
          },
        },
      });

      if (paymentResult.error) {
        setError(paymentResult.error.message);
        console.error("Payment failed:", paymentResult.error.message);
      } else if (paymentResult.paymentIntent.status === "succeeded") {
        setHasConfetti(true);
        setTimeout(() => setHasConfetti(false), 8000);

        console.log("Payment successful:", paymentResult.paymentIntent);
        setPaymentSuccess(true);
        confirmPayement();
      }
    } catch (err) {
      setError("An unexpected error occurred. Please try again.");
      console.error("Payment error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {!paymentSuccess && (
        <form onSubmit={handleSubmit} className="space-y-4">
          <h1 className="font-Monsterrat text-md font-bold text-center mb-2">
            Complete Your Payment
          </h1>
          <img
            src={DebitCard}
            alt=""
            className="h-[242px] w-full object-contain"
          />
          <div className="px-4">
            <div>
              <label
                className="font-Monsterrat font-bold text-[13px] text-black-1 opacity-80 mb-1"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full font-semibold text-[13px] text-black-1 placeholder:text-black-1 placeholder:opacity-60 focus:outline-none p-3  border rounded-lg"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <label
                className="font-Monsterrat font-bold text-[13px] text-black-1 opacity-80 mb-1"
                htmlFor="card"
              >
                Card Details
              </label>
              <div className="p-3 border rounded-lg">
                <CardElement
                  options={{
                    style: {
                      base: {
                        fontSize: "16px",
                        color: "#424770",
                        "::placeholder": { color: "#aab7c4" },
                      },
                      invalid: { color: "#9e2146" },
                    },
                  }}
                />
              </div>
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button
              type="submit"
              className={`w-full bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 transition ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={loading || !stripe || !elements}
            >
              {loading ? "Processing..." : "Pay Now"}
            </button>
          </div>
        </form>
      )}

      {paymentSuccess && (
        <>
          <div className="absolute z-50 mt-[-270px]">
            {hasConfetti && (
              <div className="absolute z-50 mt-[-270px]">
                <Confetti />
              </div>
            )}
          </div>
          <h2 className="font-MonsterratBold font-bold text-center text-xl">
            Congratulations!
          </h2>
          <p className="font-Monsterrat font-bold text-center text-[15px]">
            Your Booking has been created.
          </p>
        </>
      )}
    </div>
  );
};




export const Section37 = ({
  setSection,
  formData,
  setErrorText,
  loading,
  setLoading,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasConfetti, setHasConfetti] = useState(false);
  const [loadingText, setLoadingText] = useState("It will take a moment");
  const [pupilId, setPupilId] = useState(null);
  const [bookingId, setBookingId] = useState(null);
  const stripe = useStripe();
  const elements = useElements();

  const data = {
    firstName: formData.firstName,
    lastName: formData.lastName,
    email: formData.emailAddress,
    password: formData.password,
    profilePicture: "https://example.com/profile.jpg",
    phoneNumber: formData.phoneNumber.toString(),
    dob: new Date(formData.dateOfBirth).toISOString(),
    pickupAddress: formData.pickupAddress,
    billingAddress: formData.billingAddress,
    postalCode: formData.postalCode,

    cardDetails: {
      cardNo: formData.cardNumber,
      expiry: formData.expiryDate,
      cvv: formData.cvv,
      name: formData.cardName,
    },
  };

  const bookingData = {
    bookingType: formData.selectedLesson,
    instructorId: formData.instructorId,
    package: {
      hours: formData.selectedPackage.hours,
      price: formData.selectedPackage.price,
    },
    lessonsType: formData.selectedType,
    date: formData.bookingDate,
    start: formData.bookingStart,
    end: formData.bookingEnd,
  };

  const loadingTexts = [
    "It will take a moment",
    "Loading",
    "Please hold on, your request is being processed",
  ];

  const handleError = (error) => {
    if (error.response?.data || error.message === "Email already taken") {
      setTimeout(() => {
        setSection(4);
        setLoading(false);
      }, 2000);
      setErrorText("Email already taken");
    }
    console.error("Registration Failed:", error.response?.data || error.message);
  };

  const Signup = async () => {
    setLoading(true);
    try {
      const response = await postRequest("pupil/register", data);
      console.log("Registration Successful:", response.data);
      setPupilId(response.data.pupilId);
      return response.data;
    } catch (error) {
      handleError(error);
      return false;
    }
  };

  const booking = async (pupilId) => {
    setLoading(true);
    try {
      const response = await postRequest("booking/create", {
        ...bookingData,
        pupilId: pupilId,
      });
      console.log("Booking Successful:", response);
      return response.data.booking._id;
    } catch (error) {
      handleError(error);
    }
  };

  const payForBooking = async (bookingId) => {
    setLoading(true);
    try {
      const response = await postRequest("payment/payForBooking", {
        bookingId: bookingId,
      });
      console.log("Payment Response:", response);
      const clientSecret = response.data.client_secret;
      const payementId = response.data.paymentId;

      // Confirm the payment using Stripe
      if (stripe && elements && clientSecret) {
        const cardElement = elements.getElement(CardElement);
        const paymentResult = await stripe.confirmCardPayment(clientSecret, {
          payment_method: {
            card: cardElement,
          },
        });

        if (paymentResult.error) {
          console.error("Payment failed:", paymentResult.error.message);
          setErrorText(paymentResult.error.message);
          setLoading(false);
        } else if (paymentResult.paymentIntent.status === "succeeded") {
          console.log("Payment successful:", paymentResult.paymentIntent);
          setHasConfetti(true);
          setTimeout(() => setHasConfetti(false), 8000);
        }
      }
    } catch (error) {
      handleError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const executeSignupAndBooking = async () => {
      try {
        const signupResult = await Signup();
        if (signupResult) {
          const { pupilId } = signupResult;
          const bookingId = await booking(pupilId);
          setBookingId(bookingId);
          await payForBooking(bookingId);
        } else {
          setLoading(false);
        }
      } catch (error) {
        console.error("Error in signup and booking process:", error);
        setLoading(false);
      }
    };

    executeSignupAndBooking();

    setIsVisible(true);
    setLoading(false);
    const intervalId = setInterval(() => {
      setLoadingText((prevText) => {
        const currentIndex = loadingTexts.indexOf(prevText);
        const nextIndex = (currentIndex + 1) % loadingTexts.length;
        return loadingTexts[nextIndex];
      });
    }, 2000);

    return () => {
      clearInterval(intervalId);
      setLoading(false);
    };
  }, []);


  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    setLoading(true);
    setError("");

    try {
      // Assuming you have a backend to create the payment intent
      const { clientSecret } = await fetch("/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      }).then((res) => res.json());

      const cardElement = elements.getElement(CardElement);
      const paymentResult = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: cardElement,
          billing_details: { email },
        },
      });

      if (paymentResult.error) {
        setError(paymentResult.error.message);
      } else if (paymentResult.paymentIntent.status === "succeeded") {
        setPaymentSuccess(true);
      }
    } catch (err) {
      setError("An error occurred during payment. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`transition-all duration-700 transform ${
        isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full"
      }`}
    >
      {/* <CardElement /> */}
      <div className="w-full max-w-md  py-[30px] p-4">
        <>
          <h1 className="text-xl font-bold text-center mb-4">
            Complete Your Payment
          </h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="email">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg focus:ring focus:ring-blue-300"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="card">
                Card Details
              </label>
              <div className="p-3 border rounded-lg">
                <CardElement
                  options={{
                    style: {
                      base: {
                        fontSize: "16px",
                        color: "#424770",
                        "::placeholder": {
                          color: "#aab7c4",
                        },
                      },
                      invalid: {
                        color: "#9e2146",
                      },
                    },
                  }}
                />
              </div>
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button
              type="submit"
              className={`w-full bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 transition ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={loading || !stripe || !elements}
            >
              {loading ? "Processing..." : "Pay Now"}
            </button>
          </form>
        </>
      </div>

      {!loading && hasConfetti && (
        <div className="absolute z-50 mt-[-270px]">
          <Confetti />
        </div>
      )}
      {!loading && (
        <>
          <h2 className="font-MonsterratBold font-bold text-center text-xl">
            Congratulations!
          </h2>
          <button onClick={() => payForBooking(bookingId)}>Pay Now</button>
          <p className="font-Monsterrat font-bold text-center text-[15px]">
            Your Booking has been created.
          </p>
        </>
      )}
      {loading && (
        <div className="flex flex-col items-center justify-center py-[30px]">
          <Loader />
          <p className="font-Monsterrat text-[13px] my-4 font-extrabold">
            {loadingText}
          </p>
        </div>
      )}
    </div>
  );
};


  



// export const Section7 = ({
//   setSection,
//   formData,
//   setErrorText,
//   loading,
//   setLoading,
// }) => {
//   const [isVisible, setIsVisible] = useState(false);
//   const [hasConfetti, setHasConfetti] = useState(false);
//   const [loadingText, setLoadingText] = useState("It will take a moment");
//   const [pupilId, setPupilId] = useState(null);
//   const [bookingId, setBookingId] = useState(null);
//   console.log("pupilId", pupilId);
//   console.log("bookingId", bookingId);

//   const data = {
//     firstName: formData.firstName,
//     lastName: formData.lastName,
//     email: formData.emailAddress,
//     password: formData.password,
//     profilePicture: "https://example.com/profile.jpg",
//     phoneNumber: formData.phoneNumber.toString(),
//     dob: new Date(formData.dateOfBirth).toISOString(),
//     pickupAddress: formData.pickupAddress,
//     billingAddress: formData.billingAddress,
//     postalCode: formData.postalCode,

//     cardDetails: {
//       cardNo: formData.cardNumber,
//       expiry: formData.expiryDate,
//       cvv: formData.cvv,
//       name: formData.cardName,
//     },
//   };

//   const bookingData = {
//     bookingType: formData.selectedLesson,
//     instructorId: formData.instructorId,
//     package: {
//       hours: formData.selectedPackage.hours,
//       price: formData.selectedPackage.price,
//     },
//     lessonsType: formData.selectedType,
//     date: formData.bookingDate,
//     start: formData.bookingStart,
//     end: formData.bookingEnd,
//   };

//   const loadingTexts = [
//     "It will take a moment",
//     "Loading",
//     "Please hold on, your request is being processed",
//   ];

//   // Centralized error handling function
//   const handleError = (error) => {
//     if (error.response?.data || error.message === "Email already taken") {
//       setTimeout(() => {
//         setSection(4);
//         setLoading(false);
//       }, 2000);
//       setErrorText("Email already taken");
//     }
//     console.error(
//       "Registration Failed:",
//       error.response?.data || error.message
//     );
//   };

//   const Signup = async () => {
//     setLoading(true);
//     try {
//       const response = await postRequest("pupil/register", data);
//       console.log("Registration Successful:", response.data);
//       console.log("response.data.data.pupilId:", response.data.pupilId);
//       setPupilId(response.data.pupilId);
//       return response.data; // Return the full response data
//     } catch (error) {
//       handleError(error);
//       return false;
//     }
//   };

//   const booking = async (pupilId) => {
//     setLoading(true);
//     try {
//       const response = await postRequest("booking/create", {
//         ...bookingData,
//         pupilId: pupilId, // Use the passed pupilId
//       });
//       console.log("Booking Successful:", response);
//       const bookingId = response.data.booking._id; // Extract bookingId
//       return bookingId; // Return bookingId directly

//       console.log("Booking Successful:", response);
//     } catch (error) {
//       handleError(error);
//     }
//   };

//   const payForBooking = async (bookingId) => {
//     setLoading(true);
//     try {
//       const response = await postRequest("payment/payForBooking", {
//         bookingId: bookingId, // Use the passed pupilId
//       });
//       console.log("Payment Successful:", response);
//     } catch (error) {
//       handleError(error);
//     }
//   };

//   useEffect(() => {
//     const executeSignupAndBooking = async () => {
//       try {
//         const signupResult = await Signup();
//         if (signupResult) {
//           const { pupilId } = signupResult; // Extract pupilId directly
//           const bookingId = await booking(pupilId); // Wait for bookingId from booking
//           await payForBooking(bookingId); // Use the returned bookingId
//         } else {
//           setLoading(false);
//         }
//       } catch (error) {
//         console.error("Error in signup and booking process:", error);
//         setLoading(false);
//       }
//     };

//     executeSignupAndBooking();

//     setIsVisible(true);
//     setHasConfetti(true);
//     setTimeout(() => setHasConfetti(false), 8000);
// setLoading(false);
//     // Change loading text every 2 seconds
//     const intervalId = setInterval(() => {
//       setLoadingText((prevText) => {
//         const currentIndex = loadingTexts.indexOf(prevText);
//         const nextIndex = (currentIndex + 1) % loadingTexts.length;
//         return loadingTexts[nextIndex];
//       });
//     }, 2000);

//     // Clear interval when loading is done
//     return () => {
//       clearInterval(intervalId);
//       setLoading(false);
//     };
//   }, []); // Empty dependency array to ensure it only runs on mount

//   return (
//     <div
//       className={`transition-all duration-700 transform ${
//         isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full"
//       }`}
//     >
//       {!loading && hasConfetti && (
//         <div className="absolute z-50 mt-[-270px]">
//           <Confetti />
//         </div>
//       )}
//       {!loading && (
//         <>
//           <h2 className="font-MonsterratBold font-bold text-center text-xl">
//             Congratulations!
//           </h2>
//           <button onClick={() => booking(pupilId)}>book</button>
//           <p className="font-Monsterrat font-bold text-center text-[15px]">
//             Your Booking has been created.
//           </p>
//         </>
//       )}
//       {loading && (
//         <div className="flex flex-col items-center justify-center py-[30px]">
//           <Loader />
//           <p className="font-Monsterrat text-[13px] my-4 font-extrabold">
//             {loadingText}
//           </p>
//         </div>
//       )}
//     </div>
//   );
// };

// export const Section7 = ({
//   setSection,
//   formData,
//   setErrorText,
//   loading,
//   setLoading,
// }) => {
//   const [isVisible, setIsVisible] = useState(false);
//   const [hasConfetti, setHasConfetti] = useState(false);
//   const [loadingText, setLoadingText] = useState("It will take a moment");
//   const [pupilId, setPupilId] = useState(null);
//   console.log("pupilId", pupilId);

//   const data = {
//     firstName: formData.firstName,
//     lastName: formData.lastName,
//     email: formData.emailAddress,
//     password: formData.password,
//     profilePicture: "https://example.com/profile.jpg",
//     phoneNumber: formData.phoneNumber.toString(),
//     dob: new Date(formData.dateOfBirth).toISOString(),
//     pickupAddress: formData.pickupAddress,
//     billingAddress: formData.billingAddress,
//     postalCode: formData.postalCode,

//     cardDetails: {
//       cardNo: formData.cardNumber,
//       expiry: formData.expiryDate,
//       cvv: formData.cvv,
//       name: formData.cardName,
//     },
//   };

//   const bookingData = {
//     bookingType: formData.selectedLesson,
//     instructorId: formData.instructorId,
//     package: {
//       hours: formData.selectedPackage.hours,
//       price: formData.selectedPackage.price,
//     },
//     lessonsType: formData.selectedType,
//     date: formData.bookingDate,
//     start: formData.bookingStart,
//     end: formData.bookingEnd,
//   };

//   const loadingTexts = [
//     "It will take a moment",
//     "Loading",
//     "Please hold on, your request is being processed",
//   ];

//   // Centralized error handling function
//   const handleError = (error) => {
//     if (error.response?.data || error.message === "Email already taken") {
//       setTimeout(() => {
//         setSection(4);
//         setLoading(false);
//       }, 2000);
//       setErrorText("Email already taken");
//       // console.log("errorText", errorText);
//     }
//     console.error(
//       "Registration Failed:",
//       error.response?.data || error.message
//     );
//   };

//   const Signup = async () => {
//     setLoading(true);
//     try {
//       const response = await postRequest("pupil/register", data);
//       console.log("Registration Successful:", response.data);
//       console.log("response.data.data.pupilId:", response.data.pupilId);
//       setPupilId(response.data.pupilId);
//       return true;
//     } catch (error) {
//       handleError(error);
//       return false;
//     }
//   };

//   const booking = async () => {
//     setLoading(true);
//     try {
//       const response = await postRequest("booking/create", {
//         ...bookingData,
//         pupilId: pupilId,
//       });
//       console.log("Booking Successful:", response);
//     } catch (error) {
//       handleError(error);
//     }
//   };

//   useEffect(() => {
//     const executeSignupAndBooking = async () => {
//       const signupSuccess = await Signup();
//       if (signupSuccess) {
//         await booking();
//       } else {
//         setLoading(false);
//       }
//     };

//     executeSignupAndBooking();

//     setIsVisible(true);
//     setHasConfetti(true);
//     setTimeout(() => setHasConfetti(false), 8000);

//     // Change loading text every 2 seconds
//     const intervalId = setInterval(() => {
//       setLoadingText((prevText) => {
//         const currentIndex = loadingTexts.indexOf(prevText);
//         const nextIndex = (currentIndex + 1) % loadingTexts.length;
//         return loadingTexts[nextIndex];
//       });
//     }, 2000);

//     // Clear interval when loading is done
//     return () => {
//       clearInterval(intervalId);
//       setLoading(false);
//     };
//   }, []); // Empty dependency array to ensure it only runs on mount

//   return (
//     <div
//       className={`transition-all duration-700 transform ${
//         isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full"
//       }`}
//     >
//       {!loading && hasConfetti && (
//         <div className="absolute z-50 mt-[-270px]">
//           <Confetti />
//         </div>
//       )}
//       {!loading && (
//         <>
//           <h2 className="font-MonsterratBold font-bold text-center text-xl">
//             Congratulations!
//           </h2>
//           <button onClick={booking}>book</button>
//           <p className="font-Monsterrat font-bold text-center text-[15px]">
//             Your Booking has been created.
//           </p>
//         </>
//       )}
//       {loading && (
//         <div className="flex flex-col items-center justify-center py-[30px]">
//           <Loader />
//           <p className="font-Monsterrat text-[13px] my-4 font-extrabold">
//             {loadingText}
//           </p>
//         </div>
//       )}
//     </div>
//   );
// };