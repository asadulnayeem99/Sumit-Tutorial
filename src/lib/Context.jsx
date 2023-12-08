/* eslint-disable no-unused-vars */
class Context {
  // eslint-disable-next-line no-unused-vars
  constructor(value) {
    this.value = value;
  }
  Provider = ({ children, value }) => {
    this.value = value;
    return children;
  };
  Consumer = ({ children }) => children(this.value);
}
function CreateContext(value = null) {
  const context = new Context(value);
  return {
    Provider: context.Provider,
    Consumer: context.Consumer,
  };
}
export default CreateContext;
