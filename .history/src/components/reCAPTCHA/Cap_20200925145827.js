import ReCAPTCHA from "react-google-recaptcha";
 
const recaptchaRef = React.createRef();
 
ReactDOM.render(
  <form onSubmit={() => { recaptchaRef.current.execute(); }}>
    <ReCAPTCHA
      ref={recaptchaRef}
      size="invisible"
      sitekey="6Le-gNAZAAAAAGNiZx6RHLJqQtIFzhepb0U3xm9L"
      onChange={onChange}
    />
  </form>,
  document.body
);

export default Cap;