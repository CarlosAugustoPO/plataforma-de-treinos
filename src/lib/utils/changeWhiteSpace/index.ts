const changeWhiteSpace = (e: any): void => {
  e.target.value = e.target.value.replace(/\s/g, '');
};

export default changeWhiteSpace;
