import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import InputTwo from "../../../../components/InputTwo";
import ErrorMessage from "../../../../components/ErrorMessage";
import { validationSchema } from "../../../../utils/ValidationSchema";
import * as Yup from "yup";
import Confetti from "react-confetti"; // Import react-confetti
import { postRequest } from "../../../../helpers/Functions";

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
    "I want to learn drive",
    "I want refresher learner",
    "I have a test booked within 14 days",
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
                  lesson
                )}`}
                onClick={() => formik.setFieldValue("selectedLesson", lesson)} // Update Formik field value
              >
                {lesson}
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

export const Section3 = ({ setFormData, formData, setIsNext }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [instructor, setInstructor] = useState({ id: 1, name: "Jimmy Tim" });

  const packages = [
    { id: 1, hours: 5, price: 59.5 },
    { id: 2, hours: 10, price: 109.0 },
    { id: 3, hours: 20, price: 199.0 },
  ];

  // Yup Validation Schema
  const validationSchema = Yup.object({
    selectedType: Yup.string().required("Please select a lesson type."),
    selectedPackage: Yup.number().required("Please select a package."),
  });

  const formik = useFormik({
    initialValues: formData,
    validationSchema,
    validateOnMount: true, // Ensure validation occurs on mount
    validateOnChange: true, // Enable validation on change
    validateOnBlur: true, // Enable validation on blur
    onSubmit: (values) => {
      setFormData((prev) => ({ ...prev, ...values }));
    },
  });

  useEffect(() => {
    setIsVisible(true); // Trigger animation when component is mounted
    formik.handleSubmit();
  }, []);

  useEffect(() => {
    const isFormInvalid = Object.keys(formik.errors).length > 0;
    setIsNext(!isFormInvalid);
    setFormData((prev) => ({ ...prev, ...formik.values }));
    setFormData((prev) => ({ ...prev, instructor: instructor.name }));
  }, [formik.errors, formik.values, setIsNext, setFormData]);

  return (
    <div
      className={`transition-all duration-700 transform ${
        isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full"
      }`}
    >
      <form className=" space-y-4" onSubmit={formik.handleSubmit}>
        <div className="mb-8">
          <h2 className="text-lg font-Monsterrat font-bold mb-4">
            What type of lessons do you want?
          </h2>
          <div className="flex gap-4 justify-center">
            {["Manual", "Automatic"].map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => formik.setFieldValue("selectedType", type)}
                className={`px-6 py-2 font-Monsterrat font-bold text-[14px] rounded-lg transition-colors ${
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
              className={"text-center mt-3"}
            />
          )}
        </div>

        {/* Instructor Section */}
        <div className="mb-8">
          <h2 className="text-[15px] font-Monsterrat font-bold mb-4">
            Your Instructor
          </h2>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-purple-5 rounded-full flex items-center justify-center">
                <span className="text-purple-1 font-Monsterrat font-bold">
                  JT
                </span>
              </div>
              <span className="font-Monsterrat font-bold text-[14px]">
                Jimmy Tim
              </span>
            </div>
            <div className="bg-purple-5 px-4 py-2 rounded-lg">
              <span className="font-Monsterrat font-bold text-[14px]">
                $59.50/hr
              </span>
            </div>
          </div>
        </div>

        {/* Package Selection */}
        <div>
          <h2 className="font-Monsterrat font-bold text-lg mb-4">
            Choose Your Package
          </h2>
          <div className="grid grid-cols-3 gap-4">
            {packages.map((pkg) => (
              <button
                key={pkg.id}
                type="button"
                onClick={() => formik.setFieldValue("selectedPackage", pkg.id)}
                className={`p-6 rounded-lg transition-colors ${
                  formik.values.selectedPackage === pkg.id
                    ? "bg-purple-1 text-white"
                    : "bg-purple-5 hover:bg-[#e9e3ff]"
                }`}
              >
                <div className="w-8 h-8 mb-2 rounded-full bg-white flex items-center text-[12px] justify-center ml-[7px] sm:ml-[14px]">
                  <div
                    className={
                      formik.values.selectedPackage === pkg.id
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
          {formik.errors.selectedPackage && formik.touched.selectedPackage && (
            <ErrorMessage
              ErrorMessage={formik.errors.selectedPackage}
              className={"text-center mt-3"}
            />
          )}
        </div>

        {/* Submit Button */}
        {/* <div className="mt-8">
          <button
            type="button"
            onClick={formik.handleSubmit}
            className="bg-purple-1 text-white p-4 rounded-lg"
          >
            Submit
          </button>
        </div> */}
      </form>
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
          { label: "Learner mobile number", name: "phoneNumber", type: "text" },
          {
            label: "Learner email address",
            name: "emailAddress",
            type: "email",
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
            <span className="font-Monsterrat font-bold ">lesson 2hrs</span>
            <div className="bg-purple-1 text-white px-4 py-2 rounded-lg">
              <span className="font-medium">${199}</span>
            </div>
          </div>

          {/* Booking Fee */}
          <div className="flex justify-between items-center">
            <span className="font-Monsterrat font-bold ">Booking fee</span>
            <div className="bg-purple-1 text-white px-4 py-2 rounded-lg">
              <span className="font-medium">${1}</span>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-200 my-4"></div>

          {/* Total */}
          <div className="flex justify-between items-center">
            <span className="font-Monsterrat font-bold  ">Total</span>
            <div className="bg-purple-1 text-white px-4 py-2 rounded-lg">
              <span className="font-medium">${200}</span>
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
export const Section7 = ({
  setSection,
  formData,
  setErrorText,
  loading,
  setLoading,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasConfetti, setHasConfetti] = useState(false);
  const [loadingText, setLoadingText] = useState("It will take a moment");

  const data = {
    firstName: formData.firstName,
    lastName: formData.lastName,
    email: formData.emailAddress,
    password: formData.password,
    profilePicture: "https://example.com/profile.jpg",
    phoneNumber: formData.phoneNumber,
    dob: "1990-01-01T00:00:00Z",
    pickupAddress: "123 Street Name, City, Country",
    billingAddress: "456 Another Street, City, Country",
    postalCode: formData.postalCode,
    lessonsType: formData.selectedType,
    instructor: formData.instructor,
    plan: formData.selectedPackage,
    cardDetails: {
      cardNo: formData.cardNumber,
      expiry: formData.expiryDate,
      cvv: formData.cvv,
      name: formData.cardName,
    },
  };

  const loadingTexts = [
    "It will take a moment",
    "Loading",
    "Please hold on, your request is being processed",
  ];

  const Signup = async () => {
    setLoading(true);
    try {
      const response = await postRequest("pupil/register", data);
      console.log("Registration Successful:", response);
      setLoading(false);
    } catch (error) {
      if (error.response?.data || error.message === "Email already taken") {
        setTimeout(() => {
          setSection(4);
          setLoading(false);
        }, 2000);
        setErrorText("Email already taken");
        console.log("errorText", errorText);
      }
      console.error(
        "Registration Failed:",
        error.response?.data || error.message
      );
    }
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  useEffect(() => {
    Signup();
    setIsVisible(true);
    setHasConfetti(true);
    setTimeout(() => setHasConfetti(false), 8000);

    // Change loading text every 2 seconds
    const intervalId = setInterval(() => {
      setLoadingText((prevText) => {
        const currentIndex = loadingTexts.indexOf(prevText);
        const nextIndex = (currentIndex + 1) % loadingTexts.length;
        return loadingTexts[nextIndex];
      });
    }, 2000);

    // Clear interval when loading is done
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      className={`transition-all duration-700 transform ${
        isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full"
      }`}
    >
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
          <p className="font-Monsterrat font-bold text-center text-[15px]">
            Your Booking has been created.
          </p>
        </>
      )}
      {loading && (
        <div className="flex flex-col items-center justify-center py-[30px]">
          <br />
          <br />
          <br />
          <div className="dot-spinner ">
            <div className="dot-spinner__dot"></div>
            <div className="dot-spinner__dot"></div>
            <div className="dot-spinner__dot"></div>
            <div className="dot-spinner__dot"></div>
            <div className="dot-spinner__dot"></div>
            <div className="dot-spinner__dot"></div>
            <div className="dot-spinner__dot"></div>
            <div className="dot-spinner__dot"></div>
          </div>
          <p className="font-Monsterrat text-[13px] my-4 font-extrabold">
            {loadingText}
          </p>
        </div>
      )}
    </div>
  );
};



