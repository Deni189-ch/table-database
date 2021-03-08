import * as axios from "axios";

const instance = axios.create({
  withCredentials: false, //обошел так ошибку CORSE КАК можно и нужно иначе?
  baseURL: "http://www.filltext.com/",
});

export const datasAPI = {
  getDatas(size) {
    const Url = `?rows=1000&id={number|${size}}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`;
    return instance.get(Url).then((response) => response);
  },
};
