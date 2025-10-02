import api from "./apiConfig";

const index = async () => {
  try {
    const { data } = await api.get("/users");

    if (data.err) {
      throw new Error(data.err);
    }

    return data;
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
};

export { index };
