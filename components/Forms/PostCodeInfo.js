import styles from "../../styles/styles.module.scss";
import { useForm } from "react-hook-form";
import { useFormData } from "../../context";

// propsを分割代入している
export default function PostCodeInfo({ formStep, nextFormStep }) {
  const { setFormValues } = useFormData();

  const {
    handleSubmit,
    formState: { errors },
    register
  } = useForm({ mode: "all" });

  // 関数を実行している
  const onSubmit = (values) => {
    setFormValues(values);
    nextFormStep();
  };

  return (
    <div className={formStep === 0 ? styles.showForm : styles.hideForm}>
      <h2>Input post code</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.formRow}>
          <label htmlFor="postcode">Post code</label>
          <input
            type="postcode"
            id="postcode"
            {...register("postcode", {
              required: true
            })}
          />
          {errors.postcode && (
            <p className={styles.errorText}>Email is required</p>
          )}
        </div>
        <button type="submit">Next</button>
      </form>
    </div>
  );
}
