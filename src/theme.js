import React, { Component } from 'react';

export const themes = {
  default: {
    mainColor: '#ffffff',
    secondColor: '#222222',
  },
};

export const ThemeContext = React.createContext(
  themes.default,
);
