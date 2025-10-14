import styles from './RegistrationForm.module.css';
import {useForm} from "react-hook-form";
import {zodResolver} from '@hookform/resolvers/zod';
import {type RegistrationFormData, registrationSchema} from "../../../../schemas";
import {toast} from "react-toastify";
import {BaseApiError} from "../../../../services";
import {HttpStatusCode} from "axios";
import {type RegisterUserRequest} from "../../../../services/auth";
import {createToast, formatCPF, scrollTo} from "../../../../utils";
import {useAuth} from "../../../../hooks";
import { FaRegCheckCircle } from "react-icons/fa";
import {useState} from "react";

function RegistrationForm() {
  const { user, authenticated, register: registerUser, logout } = useAuth();
  const {
    register,
    handleSubmit,
    watch,
    formState: {errors, isSubmitting, isValid},
    reset,
  } = useForm<RegistrationFormData>({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
    mode: 'onChange'
  });

  const [cpf, setCpf] = useState('');
  const nameValue = watch('name');
  const emailValue = watch('email');
  const passwordValue = watch('password');
  const confirmPasswordValue = watch("confirmPassword");
  const cpfValue = watch("cpf");

  const errorMessages: Record<string, string> = {
    "cpf já cadastrado": "A inscrição para esse cpf já foi realizada!",
    "email já cadastrado": "A inscrição para esse e-mail já foi realizada!"
  };

  const onSubmit = (formData: RegistrationFormData) => {
    const request: RegisterUserRequest = {
      name: formData.name,
      email: formData.email,
      cpf: formData.cpf,
      password: formData.password
    }

    const toastId = createToast(<p>"Realizando inscrição...</p>);
    registerUser(request)
        .then(() => {
          toast.update(toastId, {
            render: <p>Inscrição realizada com sucesso!</p>,
            type: "success",
            isLoading: false,
            autoClose: 5000,
          });
          reset();
          scrollTo('registration')
        })
        .catch((error) => {
          let message = "Ocorreu um erro inesperado ao tentar realizar a sua inscrição. Por favor, tente novamente mais tarde";
          if (error instanceof BaseApiError && error.statusCode === HttpStatusCode.BadRequest) {
            const errorText = error.message.trim().toLowerCase();
            const customMessage = Object.entries(errorMessages)
                .find(([key]) => errorText.includes(key))?.[1];

            if (customMessage) message = customMessage;
          }

          toast.update(toastId, {
            render: <p>{message}</p>,
            type: "error",
            isLoading: false,
            autoClose: 5000,
          });
        });
  }

  return (
      <section id="registration" className={styles.formSection}>
        <div className={styles.formContent}>
          { authenticated ? (
              <>
                <div className={styles.formTitle}>
                  <h1>OBRIGADO, {user?.name?.split(" ")[0]?.toUpperCase()}!</h1>
                  <h1>PELA SUA INSCRIÇÃO</h1>
                </div>
                <FaRegCheckCircle className={styles.formCheckmarkIcon}/>
                <p className={styles.formRegisteredDescription}>
                  Guarde seus dados de acesso em um local seguro.
                  Eles serão necessários para fazer login e participar
                  das atividades durante o evento.
                </p>
                <p className={styles.formLogout} onClick={() => {
                  logout()
                  scrollTo('registration')
                }}>
                  Clique aqui para realizar outra inscrição
                </p>
              </>
          ) : (
              <>
                <div className={styles.formTitle}>
                  <h1>PARTICIPE CONOSCO</h1>
                  <h1>INSCREVA-SE!</h1>
                </div>

                <form className={styles.formContainer} onSubmit={handleSubmit(onSubmit)} noValidate>
                  <div className={styles.formField}>
                    <label htmlFor="name">Nome</label>
                    <input
                        id="name"
                        type="text"
                        className={styles.formInput}
                        placeholder="SisWeek"
                        {...register("name")}
                    />
                    {errors.name && nameValue !== '' && (<p className={styles.formError}>{errors.name.message}</p>)}
                  </div>

                  <div className={styles.formField}>
                    <label htmlFor="email">E-mail</label>
                    <input
                        id="email"
                        type="email"
                        className={styles.formInput}
                        placeholder="sisweek@gmail.com"
                        {...register("email")}
                    />
                    {errors.email && emailValue != '' && (<p className={styles.formError}>{errors.email.message}</p>)}
                  </div>

                  <div className={styles.formField}>
                    <label htmlFor="cpf">CPF</label>
                    <input
                        id="cpf"
                        type="text"
                        value={cpf}
                        className={styles.formInput}
                        placeholder="123.456.789-00"
                        {...register("cpf", {
                          onChange: (event) => setCpf(formatCPF(event.target.value))
                        })}
                    />
                    {errors.cpf && cpfValue != '' && (<p className={styles.formError}>{errors.cpf.message}</p>)}
                  </div>

                  <div className={styles.formField}>
                    <label htmlFor="password">Senha</label>
                    <input
                        id="password"
                        type="password"
                        className={styles.formInput}
                        {...register("password")}
                    />
                    {errors.password && passwordValue != '' && (
                        <p className={styles.formError}>{errors.password.message}</p>)}
                  </div>

                  <div className={styles.formField}>
                    <label htmlFor="confirmPassword">Confirmar Senha</label>
                    <input
                        id="confirmPassword"
                        type="password"
                        className={styles.formInput}
                        {...register("confirmPassword")}
                    />
                    {errors.confirmPassword && confirmPasswordValue !== '' && (
                        <p className={styles.formError}>{errors.confirmPassword.message}</p>)}
                  </div>

                  <button
                      type="submit"
                      className={styles.formButton}
                      disabled={!isValid || isSubmitting}>
                    {isSubmitting ? 'Enviando Inscrição...' : 'Inscrever-se'}
                  </button>
                </form>
              </>
          )}
        </div>
      </section>
  )
}

export default RegistrationForm;