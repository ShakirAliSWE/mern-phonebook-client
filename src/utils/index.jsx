import axios from "axios";

const SERVER_URL = "http://localhost:3001";

const serverRequest = async (url, params, success, error) => {
  try {
    await axios
      .post(`${SERVER_URL}/${url}`, params)
      .then((response) => {
        const data = response.data;
        success(data);
      })
      .catch((err) => {
        console.log(
          `Error - serverRequest - ${url} : `,
          err.message,
          err.response
        );
        error(err);
      });
  } catch (err) {
    console.log(`Try catch - serverRequest - ${url} : `, err.message);
    error(err);
  }
};

const serverRequestFormData = async (url, formData, success, error) => {
  try {
    await axios
      .post(`${SERVER_URL}/${url}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        const data = response.data;
        success(data);
      })
      .catch((err) => {
        console.log(
          `Error - serverRequest - ${url} : `,
          err.message,
          err.response
        );
        error(err);
      });
  } catch (err) {
    console.log(`Try catch - serverRequest - ${url} : `, err.message);
    error(err);
  }
};

export { serverRequest, serverRequestFormData };
