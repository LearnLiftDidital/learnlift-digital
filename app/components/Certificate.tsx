"use client";

import Image from "next/image";

type CertificateProps = {
  candidate: string;
  language: string;
  certificateId: string;
  issueDate: string;
  qrCode: string;
};

export default function Certificate({
  candidate,
  language,
  certificateId,
  issueDate,
  qrCode,
}: CertificateProps) {
  return (
    <div className="mx-auto w-[1200px] bg-white border-[14px] border-blue-700 rounded-xl shadow-2xl overflow-hidden">

      {/* Header */}

      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white px-14 py-10 flex justify-between items-center">

        <div className="flex items-center gap-6">

          <Image
            src="/logo.png"
            alt="LearnLift Digital"
            width={90}
            height={90}
          />

          <div>

            <h1 className="text-5xl font-extrabold tracking-wide">
              LearnLift Digital
            </h1>

            <p className="text-blue-200 mt-2">
              Learn • Build • Lift
            </p>

          </div>

        </div>

        <div className="text-right">

          <h2 className="text-3xl font-bold">
            Language Proficiency Certificate
          </h2>

          <p className="text-blue-200 mt-2">
            Official Assessment Credential
          </p>

        </div>

      </div>

      {/* Body */}

      <div className="px-20 py-20">

        <p className="uppercase tracking-[6px] text-gray-500 text-center">
          This certifies that
        </p>

        <h1 className="text-center text-6xl font-black text-gray-900 mt-6">
          {candidate}
        </h1>

        <p className="text-center text-2xl text-gray-700 mt-10 leading-10">

          has successfully demonstrated

          <span className="font-bold text-blue-700">
            {" "}Professional {language} Language Proficiency{" "}
          </span>

          through the LearnLift Digital Language
          Proficiency Assessment Framework.

        </p>

        {/* Details */}

        <div className="grid grid-cols-2 gap-10 mt-20">

          <div className="space-y-8">

            <div>

              <p className="text-gray-500 text-sm uppercase">
                Certificate ID
              </p>

              <h2 className="text-2xl font-bold">
                {certificateId}
              </h2>

            </div>

            <div>

              <p className="text-gray-500 text-sm uppercase">
                Language
              </p>

              <h2 className="text-2xl font-bold">
                {language}
              </h2>

            </div>

            <div>

              <p className="text-gray-500 text-sm uppercase">
                Issue Date
              </p>

              <h2 className="text-2xl font-bold">
                {issueDate}
              </h2>

            </div>

            <div>

              <p className="text-gray-500 text-sm uppercase">
                Status
              </p>

              <span className="bg-green-100 text-green-700 px-5 py-2 rounded-full font-bold">
                VERIFIED
              </span>

            </div>

          </div>

          <div className="flex flex-col items-center">

            <Image
              src={qrCode}
              alt="QR"
              width={180}
              height={180}
            />

            <p className="mt-5 text-sm text-gray-500 text-center">
              Scan to verify this certificate.
            </p>

          </div>

        </div>

      </div>

      {/* Footer */}

      <div className="border-t px-20 py-12 flex justify-between items-end">

        <div>

          <p className="text-gray-500 uppercase text-sm">
            Authorized By
          </p>

          <h3 className="text-xl font-bold mt-2">
            Joseph Parmuat
          </h3>

          <p className="text-gray-600">
            Chief Executive Officer
          </p>

        </div>

        <div className="text-right">

          <h3 className="font-bold text-blue-700">
            LearnLift Digital
          </h3>

          <p className="text-gray-500">
            Certification & Assessment Office
          </p>

          <p className="mt-3 text-sm">
            learnliftdigital.com
          </p>

        </div>

      </div>

    </div>
  );
}