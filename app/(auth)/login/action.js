export const loginHandle = async (data) => {
  console.log(data, "ini data");
  const { email, password } = data;
  await fetch("http://localhost:8001/api/v1/company/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};
