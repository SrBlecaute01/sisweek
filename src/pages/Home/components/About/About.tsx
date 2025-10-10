import ImageTriangleSwapper from '../ImageTriangleSwapper/ImageTriangleSwapper';
import styles from './About.module.css';

const images = Object.values(import.meta.glob('../../../../assets/about/*', { eager: true, query: '?url', import: 'default' }))
    .filter(Boolean)
    .map((src, idx) => ({
      src: src as string,
      alt: `${idx + 1}`
    }));

export default function About(){
  return(
    <section id="about" className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>SisWeek 2025</h1>
        <h1 className={styles.subTitle}>Um dos maiores eventos de tecnologia do Baixo São Francisco</h1>
        <p className={styles.text}>
          Promovida por estudantes de Sistemas de Informação da UFAL - Campus Penedo, a <b>SisWeek</b> possui como objetivo
          trazer para à comunidade externa as inovações e os impactos sociais das tecnologias que são desenvolvidas
          dentro da universidade.
          <br/>
          <br/>
          Em nossa programação, você terá a oportunidade de aprofundar seus conhecimentos na área da
          tecnologia e debater temas como <b>Desenvolvimento de Sistemas</b>, <b>Infraestrutura</b> e <b>Gestão de Projetos</b>,
          permitindo que os participates apliquem esses conhecimentos em situações reais do dia a dia.
          <br/>
          <br/>
          A edição desse ano trará também o <b className={styles.highlight}>HACKATON</b> com um prêmio que pode chegar a <b className={styles.highlight}>R$ 10.000,00</b>.
          Além da grande premiação, teremos diversos sorteios e brindes exclusivos durante toda a programação!
          Não fique de fora! <b>Inscreva-se</b> agora e garanta sua vaga na <b>SisWeek 2025!</b>
        </p>
      </div>

      <div className={styles.animation}>
        <ImageTriangleSwapper images={images}/>
      </div>
    </section>
  )
}