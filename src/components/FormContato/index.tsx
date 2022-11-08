import { useState } from "react";
import { useForm } from "react-hook-form";
import maskTel from "utils/maskInputTel";
import styles from "./FormContato.module.scss";

type formData = {
  name: string;
  email: string;
  tel: string;
  msg: string;
  specifi: string;
};

interface IProps {
  inputPageProdutos?: boolean;
  inputPageContato?: boolean;
}

export default function FormContato(props: IProps) {
  const { inputPageProdutos, inputPageContato } = props;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formData>();

  const [telefone, setTelefone] = useState("");

  function onSubmitForm(data: formData) {
    console.log(data);
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmitForm)}
      className={`flex ${styles.formContato}`}
    >
      <div className={`${styles.formContato__Group}`}>
        <label htmlFor="name">Nome</label>
        <input
          type="text"
          id="name"
          {...register("name", { required: true })}
        />
        {errors.name && (
          <span className={`${styles.error}`}>O campo nome é obrigatório</span>
        )}
      </div>

      <div className={`${styles.formContato__Group}`}>
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          id="email"
          {...register("email", { required: true })}
        />
        {errors.email && (
          <span className={`${styles.error}`}>O campo email é obrigatório</span>
        )}
      </div>

      <div className={`${styles.formContato__Group}`}>
        <label htmlFor="tel">Telefone</label>
        <input
          type="tel"
          id="inputTel"
          {...register("tel", { required: true })}
          maxLength={15}
          onChange={(e) =>  setTelefone(maskTel(e.target.value))}
          value={telefone}
        />
        {errors.tel && (
          <span className={`${styles.error}`}>
            O campo telefone é obrigatório
          </span>
        )}
      </div>

      {inputPageProdutos && (
        <div className={`${styles.formContato__Group}`}>
          <label htmlFor="specifi">Especificação</label>
          <textarea
            id="specifi"
            {...register("specifi", { required: true })}
          ></textarea>
          {errors.specifi && (
            <span className={`${styles.error}`}>
              O campo especificação é obrigatório
            </span>
          )}
        </div>
      )}

      {inputPageContato && (
        <div className={`${styles.formContato__Group}`}>
          <label htmlFor="msg">Mensagem</label>
          <textarea id="msg" {...register("msg")}></textarea>
        </div>
      )}

      <input type="submit" value="Enviar" />
    </form>
  );
}
