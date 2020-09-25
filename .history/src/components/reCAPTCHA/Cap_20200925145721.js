import ReCAPTCHA from "react-google-recaptcha";
 
const recaptchaRef = React.createRef();
 
ReactDOM.render(
  <form onSubmit={() => { recaptchaRef.current.execute(); }}>
    <ReCAPTCHA
      ref={recaptchaRef}
      size="invisible"
      sitekey="Your client site key"
      onChange={onChange}
    />
  </form>,
  document.body
);