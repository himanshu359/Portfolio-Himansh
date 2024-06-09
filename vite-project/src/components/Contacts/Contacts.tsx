import "../Experience/Experience.css";
import { ContactsDetails } from "../constant/StringConstants";
import { motion } from "framer-motion";

const Contacts = () => {
  return (
    <div className="experienece">
      <motion.h2
        className="contactHeader"
      >
        Get In Touch
      </motion.h2>
      <div className="contacts">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.5 }}
        >
          {ContactsDetails.address}
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1.5 }}
        >
          {ContactsDetails.phoneNo}
        </motion.p>
        <a href="#">{ContactsDetails.email}</a>
      </div>
    </div>
  );
};

export default Contacts;
