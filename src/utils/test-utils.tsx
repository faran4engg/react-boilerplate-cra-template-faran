export const asMock = (func: Function) => {
  if (!jest.isMockFunction(func)) {
    console.error('[asMock]: error');
  }
  return func as jest.Mock;
};
export const createRenderPropMock = (mock: jest.Mock, props?: {}) => {
  mock.mockImplementation(({ children }) => children(props));
};

export const createSafeRenderPropMock = (component: Function, props?: {}) => {
  createRenderPropMock(asMock(component), props);
};
