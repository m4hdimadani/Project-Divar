import { useState } from "react";
import CheckOtpForm from "../components/templates/checkOtpForm";
import SendOtpForme from "../components/templates/sendOtpForme";

function AuthPage() {
  const [step, setStep] = useState(1);
  const [mobile, setMobile] = useState("");
  const [code, setCode] = useState("");
  return (
    <div>
      {step === 1 && <SendOtpForme />}
      {step === 2 && <CheckOtpForm />}
    </div>
  );
}

export default AuthPage;
