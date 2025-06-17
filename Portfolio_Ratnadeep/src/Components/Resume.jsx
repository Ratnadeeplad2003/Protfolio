import Resumee from '../assets/Ratnadeep Lad_Resume.pdf';
export default function Resume() {
  return (
    <section id="resume">
      <h2>Resume</h2>
      <a href={Resumee}download>
        <button>Download Resume</button>
      </a>
    </section>
  );
}