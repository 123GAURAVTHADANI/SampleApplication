function HOC(WrapperComponent) {
  return function () {
    return (
      <>
        <header>Header</header>
        <WrapperComponent />
        <footer>Footer!!</footer>
      </>
    );
  };
}
export default HOC;
