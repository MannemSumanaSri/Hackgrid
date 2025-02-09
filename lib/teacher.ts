// used for super admin access so that only one can create courses

export const isTeacher = (userId?: string | null) => {
  return userId === process.env.NEXT_PUBLIC_TEACHER_ID;
}