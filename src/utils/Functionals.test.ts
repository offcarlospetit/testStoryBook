import GetRandomColor from './Functionals';

test('ToastUIKIT success component should render correctly ', () => {
    expect(GetRandomColor()).toMatch(/^#(?:[0-9a-fA-F]{3}){1,2}$/);
});