export default function Footer() {
  return (
    <footer className="py-8 border-t border-[var(--border-main)] text-center text-xs text-[var(--text-muted)] uppercase tracking-widest transition-colors duration-300">
      &copy; {new Date().getFullYear()} International Micropenis Association. Strictly Confidential.
    </footer>
  );
}
