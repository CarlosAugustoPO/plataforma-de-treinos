import styles from 'src/components/scrollbar.module.css';

export default function StyledScrollBar(Props: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.scrollBar}>{Props.children}</div>
  );
}
