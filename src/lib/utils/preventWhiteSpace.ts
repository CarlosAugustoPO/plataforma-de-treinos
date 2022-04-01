const preventWhiteSpace = (e: any): void => {
  if (e.key === ' ') {
    e.preventDefault();
  }
};

export default preventWhiteSpace;
