import { useState } from "react";
import CheckOtpForm from "../components/templates/checkOtpForm";
import SendOtpForme from "../components/templates/sendOtpForme";

function AuthPage() {
  const [step, setStep] = useState(1);
  const [mobile, setMobile] = useState("");
  const [code, setCode] = useState("");
  return (
    <div>
      {step === 1 && (
        <SendOtpForme setStep={setStep} setMobile={setMobile} mobile={mobile} />
      )}
      {step === 2 && (
        <CheckOtpForm setStep={setStep} setCode={setCode} code={code} mobile={mobile} />
      )}
    </div>
  );
}

export default AuthPage;
