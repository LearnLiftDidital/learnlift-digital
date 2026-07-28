export type Credential = {
  id: string;
  learnerName: string;
  program: string;
  credentialType: string;
  dateIssued: string;
  category: "language" | "ai" | "digital";
  status: "valid" | "revoked";
};

export const credentials: Credential[] = [
  {
    id: "LLD-PRO-2026-0001",
    learnerName: "Kahiye Moulid Hassan",
    program: "40-Hour Medical Interpreter Training",
    credentialType: "Certificate of Completion",
    dateIssued: "July 26, 2026",
    category: "language",
    status: "valid",
  },
  {
  id: "LLD-AI-2026-0002",
  learnerName: "Amina Mohamed",
  program: "Applied AI Foundations",
  credentialType: "Certificate of Completion",
  dateIssued: "July 26, 2026",
  category: "ai",
  status: "valid",
},
];

export function getCredentialById(id: string) {
  return credentials.find(
    (credential) => credential.id.toLowerCase() === id.toLowerCase()
  );
}