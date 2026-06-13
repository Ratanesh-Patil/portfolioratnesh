// import { motion } from "framer-motion";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";

// const ContactSchema = Yup.object().shape({
//   name: Yup.string().required("Required"),
//   email: Yup.string().email("Invalid email").required("Required"),
//   message: Yup.string().required("Required"),
// });

// export const Contact = () => {
//   const handleSubmit = (values, { setSubmitting }) => {
//     // Handle form submission here (e.g., send email or API call)
//     console.log(values);
//     setTimeout(() => {
//       alert("Message sent successfully!");
//       setSubmitting(false);
//     }, 1000);
//   };

//   return (
//     <section id="contact" className="py-20 bg-transparent">
//       <div className="container mx-auto px-4">
//         <motion.h2
//           className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           Contact Me
//         </motion.h2>
//         <motion.div
//           className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg p-6 transition duration-300 hover:shadow-xl"
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.2 }}
//         >
//           <Formik
//             initialValues={{ name: "", email: "", message: "" }}
//             validationSchema={ContactSchema}
//             onSubmit={handleSubmit}
//           >
//             {({ isSubmitting }) => (
//               <Form className="space-y-6">
//                 <div>
//                   <Field
//                     name="name"
//                     type="text"
//                     placeholder="Your Name"
//                     className="w-full p-3 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
//                   />
//                   <ErrorMessage
//                     name="name"
//                     component="div"
//                     className="text-red-500 text-sm mt-1"
//                   />
//                 </div>
//                 <div>
//                   <Field
//                     name="email"
//                     type="email"
//                     placeholder="Your Email"
//                     className="w-full p-3 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
//                   />
//                   <ErrorMessage
//                     name="email"
//                     component="div"
//                     className="text-red-500 text-sm mt-1"
//                   />
//                 </div>
//                 <div>
//                   <Field
//                     name="message"
//                     as="textarea"
//                     placeholder="Your Message"
//                     className="w-full p-3 bg-gray-700 rounded h-32 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
//                   />
//                   <ErrorMessage
//                     name="message"
//                     component="div"
//                     className="text-red-500 text-sm mt-1"
//                   />
//                 </div>
//                 <button
//                   type="submit"
//                   disabled={isSubmitting}
//                   className="w-1/6 bg-blue-500 text-white py-3 rounded hover:bg-blue-600 transition-colors"
//                 >
//                   {isSubmitting ? "Sending..." : "Send Message"}
//                 </button>
//               </Form>
//             )}
//           </Formik>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// // export default Contact;
// import { motion } from "framer-motion";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";

// const ContactSchema = Yup.object().shape({
//   name: Yup.string().required("Required"),
//   email: Yup.string().email("Invalid email").required("Required"),
//   message: Yup.string().required("Required"),
// });

// export const Contact = () => {
//   const handleSubmit = (values, { setSubmitting, resetForm }) => {
//     console.log(values);
//     setTimeout(() => {
//       alert("Message sent successfully!");
//       setSubmitting(false);
//       resetForm();
//     }, 1000);
//   };

//   return (
//     <section id="contact" className="py-20">
//       <div className="mx-auto px-4">
//         <motion.h2
//           className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           Contact Me
//         </motion.h2>

//         <motion.div
//           className="bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-xl shadow-lg p-8 transition duration-300 hover:shadow-xl"
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           <Formik
//             initialValues={{ name: "", email: "", message: "" }}
//             validationSchema={ContactSchema}
//             onSubmit={handleSubmit}
//           >
//             {({ isSubmitting }) => (
//               <Form className="space-y-6">
//                 <div>
//                   <Field
//                     name="name"
//                     type="text"
//                     placeholder="Your Name"
//                     className="w-full p-3 rounded-lg bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
//                   />
//                   <ErrorMessage
//                     name="name"
//                     component="div"
//                     className="text-red-500 text-sm mt-1"
//                   />
//                 </div>

//                 <div>
//                   <Field
//                     name="email"
//                     type="email"
//                     placeholder="Your Email"
//                     className="w-full p-3 rounded-lg bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
//                   />
//                   <ErrorMessage
//                     name="email"
//                     component="div"
//                     className="text-red-500 text-sm mt-1"
//                   />
//                 </div>

//                 <div>
//                   <Field
//                     name="message"
//                     as="textarea"
//                     placeholder="Your Message"
//                     className="w-full p-3 rounded-lg bg-gray-700 h-32 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
//                   />
//                   <ErrorMessage
//                     name="message"
//                     component="div"
//                     className="text-red-500 text-sm mt-1"
//                   />
//                 </div>

//                 <button
//                   type="submit"
//                   disabled={isSubmitting}
//                   className="w-full sm:w-1/3 bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors"
//                 >
//                   {isSubmitting ? "Sending..." : "Send Message"}
//                 </button>
//               </Form>
//             )}
//           </Formik>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

'use client'

import { motion } from "framer-motion"

import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Download,
  SendHorizonal
} from "lucide-react"

import { Formik, Form, Field, ErrorMessage } from "formik"

import * as Yup from "yup"

const ContactSchema = Yup.object().shape({

  name:
    Yup.string().required("Required"),

  email:
    Yup.string()
      .email("Invalid email")
      .required("Required"),

  message:
    Yup.string().required("Required")

})

export const Contact = () => {

  const handleSubmit = (
    values,
    {
      setSubmitting,
      resetForm
    }
  ) => {

    console.log(values)

    setTimeout(() => {

      alert("Message sent successfully!")

      setSubmitting(false)

      resetForm()

    }, 1000)

  }

  return (

    <section
      id="contact"
      className="relative py-24 px-6 md:px-16 overflow-hidden"
    >

      {/* Background Glow */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 
      bg-blue-500/10 rounded-full blur-3xl"></div>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}

        className="text-center mb-20"
      >

        <h2 className="text-4xl md:text-5xl font-black mb-5">

          <span className="text-white">Let’s</span>{" "}

          <span className="bg-gradient-to-r from-blue-400 to-purple-500 
          bg-clip-text text-transparent">
            Connect
          </span>

        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Interested in enterprise applications,
          backend systems, scalable architecture,
          or full-stack development?
          Let’s build something impactful together.
        </p>

      </motion.div>

      {/* Main Layout */}
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}

          className="bg-white/5 border border-white/10
          backdrop-blur-xl rounded-3xl p-10
          shadow-2xl"
        >

          <div className="mb-10">

            <h3 className="text-3xl font-bold text-white mb-4">
              Open to New Opportunities
            </h3>

            <p className="text-gray-400 leading-relaxed">
              Currently focused on building scalable
              ERP, CRM, and enterprise-grade applications
              using Java, Spring Boot, React,
              Microservices, RabbitMQ, Redis,
              and PostgreSQL.
            </p>

          </div>

          {/* Contact Info */}
          <div className="space-y-6 mb-10">

            {/* Email */}
            <motion.a
              href="mailto:ratnesh.k.patil@gmail.com"

              whileHover={{ x: 5 }}

              className="flex items-center gap-4
              text-gray-300 hover:text-blue-400
              transition"
            >

              <div className="p-3 rounded-xl
              bg-blue-500/10 border border-blue-500/20">

                <Mail size={22} />

              </div>

              <div>

                <p className="text-sm text-gray-400">
                  Email
                </p>

                <p className="font-medium">
                  ratnesh.k.patil@gmail.com
                </p>

              </div>

            </motion.a>

            {/* Phone */}
            <motion.a
              href="tel:+917350402226"

              whileHover={{ x: 5 }}

              className="flex items-center gap-4
              text-gray-300 hover:text-blue-400
              transition"
            >

              <div className="p-3 rounded-xl
              bg-purple-500/10 border border-purple-500/20">

                <Phone size={22} />

              </div>

              <div>

                <p className="text-sm text-gray-400">
                  Phone
                </p>

                <p className="font-medium">
                  +91 7350402226
                </p>

              </div>

            </motion.a>

            {/* Location */}
            <motion.div
              whileHover={{ x: 5 }}

              className="flex items-center gap-4
              text-gray-300"
            >

              <div className="p-3 rounded-xl
              bg-green-500/10 border border-green-500/20">

                <MapPin size={22} />

              </div>

              <div>

                <p className="text-sm text-gray-400">
                  Location
                </p>

                <p className="font-medium">
                  Pune, Maharashtra, India
                </p>

              </div>

            </motion.div>

          </div>

          {/* Social Links */}
          <div className="flex gap-5 mb-10">

            <motion.a
              href="https://github.com/Ratanesh-Patil"
              target="_blank"
              rel="noopener noreferrer"

              whileHover={{
                scale: 1.1
              }}

              className="p-4 rounded-2xl
              bg-white/5 border border-white/10
              hover:border-blue-400/30
              transition"
            >

              <Github
                size={24}
                className="text-white"
              />

            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/ratnesh-patil-307013217/"
              target="_blank"
              rel="noopener noreferrer"

              whileHover={{
                scale: 1.1
              }}

              className="p-4 rounded-2xl
              bg-white/5 border border-white/10
              hover:border-blue-400/30
              transition"
            >

              <Linkedin
                size={24}
                className="text-blue-400"
              />

            </motion.a>

          </div>

          {/* Resume Button */}
          <motion.a
            href="/Ratnesh-Patil-Resume.pdf"
            download

            whileHover={{
              scale: 1.03
            }}

            whileTap={{
              scale: 0.95
            }}

            className="inline-flex items-center gap-3
            px-6 py-4 rounded-2xl
            bg-gradient-to-r from-blue-500 to-purple-600
            text-white font-semibold shadow-xl"
          >

            Download Resume

            <Download size={20} />

          </motion.a>

        </motion.div>

        {/* RIGHT SIDE FORM */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}

          className="bg-white/5 border border-white/10
          backdrop-blur-xl rounded-3xl p-10
          shadow-2xl"
        >

          <Formik
            initialValues={{
              name: "",
              email: "",
              message: ""
            }}

            validationSchema={ContactSchema}

            onSubmit={handleSubmit}
          >

            {({ isSubmitting }) => (

              <Form className="space-y-7">

                {/* Name */}
                <div>

                  <label className="block text-sm text-gray-400 mb-2">
                    Full Name
                  </label>

                  <Field
                    name="name"
                    type="text"
                    placeholder="Enter your name"

                    className="w-full p-4 rounded-2xl
                    bg-[#111827] border border-white/10
                    text-white placeholder:text-gray-500
                    focus:outline-none focus:border-blue-500
                    transition"
                  />

                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-red-400 text-sm mt-2"
                  />

                </div>

                {/* Email */}
                <div>

                  <label className="block text-sm text-gray-400 mb-2">
                    Email Address
                  </label>

                  <Field
                    name="email"
                    type="email"
                    placeholder="Enter your email"

                    className="w-full p-4 rounded-2xl
                    bg-[#111827] border border-white/10
                    text-white placeholder:text-gray-500
                    focus:outline-none focus:border-blue-500
                    transition"
                  />

                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-400 text-sm mt-2"
                  />

                </div>

                {/* Message */}
                <div>

                  <label className="block text-sm text-gray-400 mb-2">
                    Message
                  </label>

                  <Field
                    as="textarea"
                    name="message"

                    placeholder="Tell me about your project or opportunity..."

                    className="w-full p-4 rounded-2xl h-40
                    bg-[#111827] border border-white/10
                    text-white placeholder:text-gray-500
                    focus:outline-none focus:border-blue-500
                    transition resize-none"
                  />

                  <ErrorMessage
                    name="message"
                    component="div"
                    className="text-red-400 text-sm mt-2"
                  />

                </div>

                {/* Submit */}
                <motion.button
                  type="submit"

                  disabled={isSubmitting}

                  whileHover={{
                    scale: 1.02
                  }}

                  whileTap={{
                    scale: 0.96
                  }}

                  className="w-full py-4 rounded-2xl
                  bg-gradient-to-r from-blue-500 to-purple-600
                  text-white font-semibold
                  shadow-xl flex items-center
                  justify-center gap-3"
                >

                  {isSubmitting
                    ? "Sending..."
                    : "Send Message"}

                  <SendHorizonal size={18} />

                </motion.button>

              </Form>

            )}

          </Formik>

        </motion.div>

      </div>

    </section>

  )
}

export default Contact