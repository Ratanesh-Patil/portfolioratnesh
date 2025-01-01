import { motion } from "framer-motion";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const ContactSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  message: Yup.string().required("Required"),
});

export const Contact = () => {
  const handleSubmit = (values, { setSubmitting }) => {
    // Handle form submission here (e.g., send email or API call)
    console.log(values);
    setTimeout(() => {
      alert("Message sent successfully!");
      setSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 bg-transparent">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          Contact Me
        </motion.h2>
        <motion.div
          className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg p-6 transition duration-300 hover:shadow-xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Formik
            initialValues={{ name: "", email: "", message: "" }}
            validationSchema={ContactSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-6">
                <div>
                  <Field
                    name="name"
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-3 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
                <div>
                  <Field
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    className="w-full p-3 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
                <div>
                  <Field
                    name="message"
                    as="textarea"
                    placeholder="Your Message"
                    className="w-full p-3 bg-gray-700 rounded h-32 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  />
                  <ErrorMessage
                    name="message"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-1/6 bg-blue-500 text-white py-3 rounded hover:bg-blue-600 transition-colors"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </Form>
            )}
          </Formik>
        </motion.div>
      </div>
    </section>
  );
};

// export default Contact;
