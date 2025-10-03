import styles from './RegistrationForm.module.css';
import {useForm} from "react-hook-form";
import {zodResolver} from '@hookform/resolvers/zod';
import {type RegistrationFormData, registrationSchema} from "../../../../schemas";
import {toast} from "react-toastify";

function RegistrationForm() {
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

  const nameValue = watch('name');
  const emailValue = watch('email');
  const passwordValue = watch('password');
  const confirmPasswordValue = watch("confirmPassword");

  const onSubmit = async (data: RegistrationFormData) => {
    console.log('Valid Data Submitted:', data);

    try {
      await new Promise(resolve => setTimeout(resolve, 1500));

      toast.success(<p>Inscrição realizada com sucesso!</p>);
      reset();

    } catch (error) {
      console.error("Error submitting the form", error);
      alert("An error occurred while processing your registration.");
    }
  };

  return (
      <section id="registration" className={styles.formSection}>
        <div className={styles.formContent}>
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
        </div>
      </section>
  )
}

export default RegistrationForm;