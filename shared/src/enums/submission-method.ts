export const SubmissionMethod = {
  email: "email",
  rest: "rest",
} as const;

export type SubmissionMethod = keyof typeof SubmissionMethod;
