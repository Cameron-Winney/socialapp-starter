import React from "react";
import ReCAPTCHA from "react-google-recaptcha";
 
 
const ReCAPTCHAForm = (props) => {
  const recaptchaRef = React.useRef();
 
  const onSubmitWithReCAPTCHA = async () => {
    const token = await recaptchaRef.current.executeAsync();
 
    // apply to form data
  }
 
  return (
    <form onSubmit={onSubmitWithReCAPTCHA}>
      <ReCAPTCHA
        ref={recaptchaRef}
        size="invisible"
        sitekey="6Le-gNAZAAAAAGNiZx6RHLJqQtIFzhepb0U3xm9L"
      />
    </form>
  )
 
};

  export default ReCAPTCHAForm