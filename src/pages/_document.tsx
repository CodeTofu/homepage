import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
          <link rel="icon" href="/tofu.ico" /> {/* 设置图标 */}
          <title>Tofu</title> {/* 设置默认标题 */}
        </Head>
        <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
