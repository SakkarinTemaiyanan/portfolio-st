
export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm SAKKARIN TEMIYANAN</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Full Stack</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
            I’m a beginner Full Stack Developer currently learning both front-end and back-end web development. I focus on creating practical applications while learning tools like React,
            Node.js, and Express to grow and improve in this field.
          </p>
        </div>
            <button className="btn btn-primary">Get In Touch</button>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img_st.png" alt="Hero Section" />
      </div>
    </section>
  );
}
