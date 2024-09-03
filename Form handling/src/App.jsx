import { useForm } from "react-hook-form";
import "./App.css";

export default function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Username"
          {...register("UserName", {
            required: { value: true, message: "This field is required" },
            minLength: { value: 8, message: "minimum length is 8" },
          })}
        />
        <br />
        {errors.UserName && (
          <span className="red">{errors.UserName.message}</span>
        )}
        <br />
        <input
          placeholder="Password"
          type="password"
          {...register("Password", {
            required: { value: true, message: "This field is required" },
            minLength: { value: 5, message: "minimum length is 5" },
          })}
        />
        <br />
        {errors.Password && (
          <span className="red">{errors.Password.message}</span>
        )}

        {errors.exampleRequired && <span>This field is required</span>}
        <br></br>
        <select
          {...register("gender", {
            required: { value: true, message: "This field is required" },
          })}
        >
          <option value="female">female</option>
          <option value="male">male</option>
          <option value="other">other</option>
        </select>
        <br />
        {errors.gender && <span className="red">{errors.gender.message}</span>}
        <br />
        <input type="submit" />
      </form>
    </>
  );
}
