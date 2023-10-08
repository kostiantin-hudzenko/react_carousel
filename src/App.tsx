import { useState } from 'react';
import Carousel from './components/Carousel/Carousel';
import { images } from './api/images';
import { Form } from './components/Form/Form';
import { Params } from './types/Params';
import './App.scss';

const App: React.FC = () => {
  const [visabilityParams, setVisabilityParams] = useState<Params>({
    step: 3,
    frameSize: 3,
    itemWidth: 130,
    animationDuration: 1000,
    infinite: false,
  });

  const handleChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      name, type, value, checked,
    } = event.target;

    setVisabilityParams(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : +value,
    }));
  };

  return (
    <div className="App">
      <h1>
        {`Carousel with ${images.length} images`}
      </h1>

      <Carousel
        images={images}
        visabilityParams={visabilityParams}
      />

      <Form
        visabilityParams={visabilityParams}
        max={images.length}
        handleChangeValue={handleChangeValue}
      />
    </div>
  );
};

export default App;
