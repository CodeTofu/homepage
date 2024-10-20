import React, { useRef, ReactNode } from "react";
import useOnScreen from "@/hooks/useOnScreen";  // 引入自定义 hook
import styles from "./content-block.module.css"; // 引入 CSS 模块

interface ContentBlockProps {
  children: ReactNode;
  id?: string;  // 可选的 id 属性，用于锚点定位
}

const ContentBlock: React.FC<ContentBlockProps> = ({ children, id }) => {
  const ref = useRef<HTMLDivElement | null>(null);  // 定义 ref 类型
  const isVisible = useOnScreen(ref);  // 调用自定义 hook，判断是否可见

  return (
    <div
      ref={ref}
      id={id}  // 将传入的 id 应用到顶层 div
      className={`${styles.contentBlock} ${isVisible ? styles.visible : ""}`}
    >
      {children}
    </div>
  );
};

export default ContentBlock;
