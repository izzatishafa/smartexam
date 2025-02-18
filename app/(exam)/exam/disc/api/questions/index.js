import apiService, { isAxiosError } from "@/app/utils/apiService";
const api = async (req, res) => {
  switch (req.method) {
    case "GET": {
      try {
        const response = await apiService.request({
          method: "GET",
          url: "/exam/disc_test",
          params: req?.query,
        });
        const { data: _data, status } = response;
        const { data, message } = _data;
        return res.status(status).send({ status, message, data });
      } catch (err) {
        if (isAxiosError(err)) {
          const status = err.response?.status;
          const message =
            err.response?.data?.message ??
            `External Server Error with status ${status}`;
          const errors = err.response?.data?.errors ?? [];
          return res
            .status(status)
            .send({ status, message, data: null, errors });
        } else {
          return res.status(500).send({
            status: 500,
            message: `Internal Server Error ${err}`,
            data: null,
          });
        }
      }
    }
    default: {
      return res.status(405).send({ message: "Method not allowed" });
    }
  }
};
export default api;
