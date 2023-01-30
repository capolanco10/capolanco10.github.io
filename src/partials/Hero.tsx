import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hola, soy <GradientText>Carlos Polanco</GradientText> 👋
        </>
      }
      description={
        <>
          <h2 className="text-cyan-400">
            Apasionado por la innovación y el mejoramiento continuo.
          </h2>
          Con 2 años de experiencia bajo el rol de Líder tecnico al servicio del
          equipo de desarrollo con el fin de lograr los mejores resultados.{' '}
          <GradientText>
            Con más de 10 años de experiencia en desarrollo de software
          </GradientText>
          , enfocados en la experiencia y satisfacción de los clientes, desde la
          etapa de viabilidad hasta la ejecución y cierre bajo el marco de
          buenas prácticas.
        </>
      }
      avatar={
        <img
          className="h-80 w-64"
          src="/assets/images/avatar.svg"
          alt="Capolanco10"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <a href="https://twitter.com/capolanco10">
            <HeroSocial
              src="/assets/images/twitter-icon.png"
              alt="Twitter @capolanco10"
            />
          </a>
          <a href="https://co.linkedin.com/in/carlospolancodev/">
            <HeroSocial
              src="/assets/images/linkedin-icon.png"
              alt="Linkedin carlospolancodev"
            />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
