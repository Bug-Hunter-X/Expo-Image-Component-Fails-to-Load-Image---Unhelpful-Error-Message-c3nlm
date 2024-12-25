# Expo Image Component Loading Issue

This repository demonstrates a common problem encountered when using the Expo Image component: failure to load an image with an unhelpful error message.  The issue stems from inconsistencies in how URIs are handled, particularly with local assets or when accessing images from different sources. The `bug.js` file contains the problematic code, while `bugSolution.js` provides the corrected version. 

The core problem is ensuring the URI is correctly formatted and accessible within the Expo environment. The solution focuses on verifying the URI's integrity and implementing proper error handling. 