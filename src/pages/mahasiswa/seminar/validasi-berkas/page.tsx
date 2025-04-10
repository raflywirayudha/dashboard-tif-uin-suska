// import Step1 from "@/components/mahasiswa/seminar/steps/step1";
// import Step2 from "@/components/mahasiswa/seminar/steps/step2";
// import Step3 from "@/components/mahasiswa/seminar/steps/step3";
// import Step4 from "@/components/mahasiswa/seminar/steps/step4";
// import Step5 from "@/components/mahasiswa/seminar/steps/step5";
// import Step6 from "@/components/mahasiswa/seminar/steps/step6";

// export const infoPengajuanSeminar = {
//   lokasi: "PT RAPP",
//   dosenPembimbing: "Pizaini, ST., M.Kom",
//   dosenPenguji: "Iwan Iskandar,M.T",
//   judul: "Analisis Sistem Keamanan Sistem Perencanaan Divisi Sdm PT RAPP",
//   step: 0, // 0 - 5
// };

// const stepComponents = [Step1, Step2, Step3, Step4, Step5, Step6];

// export default function MahasiswaSeminarValidasiBerkasPage() {
//   const StepComponent = stepComponents[infoPengajuanSeminar.step];

//   return (
//     <StepComponent activeStep={infoPengajuanSeminar.step} status="belum" /> //belum | validasi | ditolak
//   );
// }

import { useState } from "react";
import Step1 from "@/components/mahasiswa/seminar/steps/step1";
import Step2 from "@/components/mahasiswa/seminar/steps/step2";
import Step3 from "@/components/mahasiswa/seminar/steps/step3";
import Step4 from "@/components/mahasiswa/seminar/steps/step4";
import Step5 from "@/components/mahasiswa/seminar/steps/step5";
import Step6 from "@/components/mahasiswa/seminar/steps/step6";
import { Button } from "@/components/ui/button";

export const infoPengajuanSeminar = {
  lokasi: "PT RAPP",
  dosenPembimbing: "Pizaini, ST., M.Kom",
  dosenPenguji: "Iwan Iskandar,M.T",
  judul: "Analisis Sistem Keamanan Sistem Perencanaan Divisi Sdm PT RAPP",
};

const stepComponents = [Step1, Step2, Step3, Step4, Step5, Step6];
const statuses = ["belum", "validasi", "ditolak"];

export default function MahasiswaSeminarValidasiBerkasPage() {
  const [step, setStep] = useState(0);
  const [statusIndex, setStatusIndex] = useState(0);
  const StepComponent = stepComponents[step];

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <StepComponent activeStep={step} status={statuses[statusIndex]} />

      <div className="flex gap-2">
        {stepComponents.map((_, index) => (
          <Button
            key={index}
            onClick={() => setStep(index)}
            className={
              step === index
                ? "bg-blue-500 text-white"
                : "bg-gray-300 text-black"
            }
          >
            Step {index + 1}
          </Button>
        ))}
      </div>

      <div className="flex gap-2">
        <Button
          onClick={() => setStep((prev) => Math.max(0, prev - 1))}
          disabled={step === 0}
        >
          Previous Step
        </Button>
        <Button
          onClick={() =>
            setStep((prev) => Math.min(stepComponents.length - 1, prev + 1))
          }
          disabled={step === stepComponents.length - 1}
        >
          Next Step
        </Button>
      </div>

      <div className="flex gap-2">
        {statuses.map((status, index) => (
          <Button
            key={index}
            onClick={() => setStatusIndex(index)}
            className={
              statusIndex === index
                ? "bg-green-500 text-white"
                : "bg-gray-300 text-black"
            }
          >
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </Button>
        ))}
      </div>
    </div>
  );
}
