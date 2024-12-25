```javascript
import React from 'react';
import { Image } from 'expo-image';

const MyComponent = () => {
  const imageUri = require('./assets/my-image.jpg'); //Make sure the path is correct and the image exists

  return (
    <Image
      source={{ uri: imageUri }}
      style={{ width: 200, height: 200 }}
      onError={(error) => console.error('Image loading error:', error)}
    />
  );
};

export default MyComponent;
```