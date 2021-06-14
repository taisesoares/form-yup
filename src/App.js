import { useSpring, config } from 'react-spring'

import Container from "./components/Container";
import ContainerForm from './components/ContainerForm';

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

function App() {
  const [props, set] = useSpring(() => ({ xys: [0, 0, 1] , config: config.default}))

  return (
    <Container
      onMouseMove={({clientX: x, clientY: y}) => (set({xys: calc(x, y)}))}
      onMouseLeave={() => set({xys:[0,0,1]})}
      style={{
          transform: props.xys.interpolate(trans)
      }}
    >
      <ContainerForm />
    </Container>
  );
}

export default App;
