import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

import { getCategory } from "src/services/admin";

function AddPost() {
  const [form, setForm] = useState({
    title: "",
    content: "",
    category: "",
    city: "",
    amount: null,
    images: null,
  });

  const { data } = useQuery(["get-categories"], getCategory);

  const changHandler = (event) => {
    const name = event.target.name;
    if (name !== "images") {
      setForm({ ...form, [name]: event.target.value });
    } else {
      setForm({ ...form, [name]: event.target.files[0] });
    }
  };

  const addHandler = (event) => {
    event.preventDefault();
  };
  return (
    <form onChange={changHandler}>
      <h3>افزودن آگهی</h3>
      <label htmlFor="title">عنوان آگهی</label>
      <input type="text" name="title" id="title" />
      <label htmlFor="content">توضیجات</label>
      <textarea name="content" id="content" />
      <label htmlFor="amount"> قیمت</label>
      <input type="text" name="amount" id="amount" />
      <label htmlFor="city"> شهر</label>
      <input type="text" name="city" id="city" />
      <label htmlFor="category"> دسته بندی</label>
      <select name="category" id="category">
        {data?.data?.map((i) => (
          <option key={i._id} value={i._id}>
            {i.name}
          </option>
        ))}
      </select>
      <label htmlFor="images"> شهر</label>
      <input type="file" name="images" id="images" />
      <button onClick={addHandler}>ایجاد</button>
    </form>
  );
}

export default AddPost;
