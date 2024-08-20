import Link from "@docusaurus/Link";
import Heading from "@theme/Heading";
import clsx from "clsx";
import classes from "./hero.module.css";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

export default function HeroSection() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <section className={classes.heroSection}>
      <div className={clsx(classes.videoContainer, classes.videoLight)}>
        <video
          id="background-video"
          autoPlay
          loop
          muted
          playsInline
          height={"100%"}
          width={"100%"}
          poster={"/img/landing/dev_hub_ani_noblur.png"}
        >
          <source
            src={"/img/landing/dev_hub_ani_light.webm"}
            type="video/webm"
            media="(min-width: 996px)"
          ></source>
          <source
            src={"/img/landing/dev_hub_ani_light.mp4"}
            type="video/mp4"
            media="(min-width: 996px)"
          ></source>
        </video>
      </div>
      <div className={clsx(classes.videoContainer, classes.videoDark)}>
        <video
          id="background-video"
          autoPlay
          loop
          muted
          playsInline
          height={"100%"}
          width={"100%"}
          poster={"/img/landing/dev_hub_ani_noblur.png"}
        >
          <source
            src={"/img/landing/dev_hub_ani_dark.webm"}
            type="video/webm"
            media="(min-width: 996px)"
          ></source>
          <source
            src={"/img/landing/dev_hub_ani_dark.mp4"}
            type="video/mp4"
            media="(min-width: 996px)"
          ></source>
        </video>
      </div>
      <picture className={classes.mobileImage}>
        <source
          srcSet="/img/landing/dev_hub_hero_mobile.webp"
          media="(max-width: 996px)"
        />
        <img src="" />
      </picture>
      <div className={clsx(classes.content, "container")}>
        <div className={classes.callToAction}>
          <Heading as="h1" className={classes.heading}>
            {siteConfig.title}
          </Heading>
          <p className={classes.description}>{siteConfig.tagline}</p>
          <Link className={classes.button} to="intro">
            <div>Get Started Building</div>
            <div>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.627 8.75H0.5V7.25H12.627L6.93075 1.55375L8 0.5L15.5 8L8 15.5L6.93075 14.4462L12.627 8.75Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
