// src/pages/about.js
import Head from 'next/head';
import styles from '../styles/about.module.css';

export default function About() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth', // 设置平滑滚动
        block: 'start', // 滚动到目标的顶部
      });
    }
  };

  return (
    <>
      <Head>
        <title>About Me</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className={styles.navbar}>
        <ul>
          {/* 删除 href="#"，仅使用 onClick 处理点击事件 */}
          <li><a onClick={() => scrollToSection('introduction')}>个人介绍</a></li>
          <li><a onClick={() => scrollToSection('tech-stack')}>技术栈</a></li>
          <li><a onClick={() => scrollToSection('work-experience')}>工作经历</a></li>
          <li><a onClick={() => scrollToSection('hobbies')}>爱好</a></li>
        </ul>
      </nav>
      <main className={styles.main}>
        <section id="introduction" className={styles.section}>
          <h2>Code</h2>
          <p>这里是个人介绍的内容，详细描述你的背景、教育和职业生涯等。</p>
        </section>
        <section id="tech-stack" className={styles.section}>
          <h2>技术栈</h2>
          <p>在这里列出你熟悉的技术和工具，例如 JavaScript、React、Node.js 等。</p>
        </section>
        <section id="work-experience" className={styles.section}>
          <h2>工作经历</h2>
          <p>在这里分享你的工作经历，包括公司名称、职位和工作内容等。</p>
        </section>
        <section id="hobbies" className={styles.section}>
          <h2>爱好</h2>
          <p>在这里描述你的爱好和兴趣，例如阅读、旅行、运动等。</p>
        </section>
      </main>
    </>
  );
}
