import React from 'react';

import { IconMail } from "./icons"

const Contact = () => {
  return (
    <div id="contact" className="h-72 w-full flex flex-col items-center justify-center text-center space-y-2">
      <p>Nos encantaría contar con vos</p>
      <h2>Contactanos.</h2>
      <div className="flex pt-2">
        <IconMail />
        <a className="ml-2" href="mailto:coopsemillaconsciente@gmail.com" >   coopsemillaconsciente@gmail.com</a>
      </div>




    </div>
  );
};

export default Contact;