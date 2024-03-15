"use server";

export const sendBooking = async (formData: FormData) => {
  console.log("running on server");
  console.log(formData.get("name"));
  console.log(formData.get("email"));
  console.log(formData.get("message"));
  console.log(formData.get("people"));
  console.log(formData.get("phone"));
  console.log(formData.get("time"));
  console.log(formData.get("date"));
};
