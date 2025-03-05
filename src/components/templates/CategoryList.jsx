import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCategory, getCategory } from "src/services/admin";
import Loader from "../modules/Loader";

import styles from "./CategoryList.module.css";

function CategoryList() {
  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery(["get-categories"], getCategory);

  const mutation = useMutation({
    mutationFn: deleteCategory,
    onSuccess: () => {
      queryClient.invalidateQueries(["get-categories"]);
    },
  });

  const deleteHandler = (_id) => {
    mutation.mutate(_id);
  };

  return (
    <div className={styles.list}>
      {isLoading ? (
        <Loader />
      ) : (
        data?.data?.map((i) => (
          <div key={i._id}>
            <img src={`${i.icon}.svg`} alt="category-icon" />
            <h5>{i.name}</h5>
            <p>slug : {i.slug}</p>
            <button
              onClick={() => deleteHandler(i._id)}
              disabled={mutation.isLoading}
            >
                حذف
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default CategoryList;
