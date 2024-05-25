import React, { ChangeEvent } from "react";
import { useGlobal } from "../../context/global";

const Login = () => {
  const { singInUser } = useGlobal();

  const [form, setForm] = React.useState({
    username: "",
    password: "",
  });

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.password === "" && form.username === "") {
      return;
    }

    singInUser(form);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <div className="shadow-md max-w-[500px] mx-auto">
        <form onSubmit={handleSubmit} className="p-5">
          <div className="mb-4">
            <label className="text-black">Usuario</label>
            <input
              onChange={handleChange}
              name="username"
              className="border h-10 w-full text-black"
            />
          </div>

          <div className="mb-4">
            <label className="text-black">Contraseña</label>
            <input
              onChange={handleChange}
              type="password"
              name="password"
              className="border h-10 w-full text-black"
            />
          </div>

          <button className="p-2 bg-blue-600 rounded-md">INGRESAR</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
